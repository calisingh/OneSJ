import { Component } from "react";
import axios from "axios";
import { servicesapiLink, categoriesapiLink } from "../../utilities/constants";
import NavigationBar from "../../reusable/navigationBar";
import PageSizeHandler from "./pageSizeHandler";
import Filter from "./filter";
import DataDisplay from "./DataDisplay";
import PaginationHandler, { paginate } from "./paginationHandler";
import Footer from "../../reusable/footer";

// Component that renders all the data and filter components together
export default class Services extends Component {
  state = {
    data: [],
    filteredData: [],
    checkedCategories: [],
    categories: [],
    currentPage: 1,
    pageSize: 6,
  };

  componentDidMount() {
    // Grabbing both the data and categories from the corresponding apis and setting the state
    axios
      .all([axios.get(servicesapiLink), axios.get(categoriesapiLink)])
      .then((responses) => {
        this.setState({
          data: responses[0].data.rows,
          categories: responses[1].data.rows,
        });
      })
      .catch((e) =>
        console.err(
          "There was a problem retrieving the data. Error Reference: " + e
        )
      );
  }

  handlePageChange = (page) => {
    // Scroll to top when a page change occurs
    window.scrollTo(0, 0);
    this.setState({ currentPage: page });
  };

  handlePageSizeChange = (pageSize) => {
    this.setState({ pageSize, currentPage: 1 });
  };

  handleFilter = (event) => {
    // Prepare new array for new list of checked categories
    let newCheckedCategories = this.state.checkedCategories;

    // Grab category name from the event
    const categoryName = event.target.name;

    // Check whether to remove category from list or add to list
    if (newCheckedCategories.includes(categoryName)) {
      newCheckedCategories = newCheckedCategories.filter(
        (category) => category !== categoryName
      );
    } else {
      newCheckedCategories.push(categoryName);
    }

    // If user unchecks all categories, reset the state so no filtering occurs
    if (!newCheckedCategories.length) {
      this.setState({
        filteredData: [],
        checkedCategories: newCheckedCategories,
        currentPage: 1,
      });
      return;
    }
    // Represents the new filtered data
    let newData = [];
    // Check each service to see if it matches all checked categories
    this.state.data.forEach((service) => {
      let match = true;
      newCheckedCategories.every((category) => {
        if (!service[category]) {
          match = false;
          return false;
        }
        return true;
      });
      // If the service matches all checked categories, add it to the newData array
      if (match) newData.push(service);
    });
    this.setState({
      filteredData: newData,
      checkedCategories: newCheckedCategories,
      currentPage: 1,
    });
  };

  render() {
    const {
      data,
      filteredData,
      checkedCategories,
      categories,
      currentPage,
      pageSize,
    } = this.state;
    // Check whether there is filtered data, else use all data
    const dataToRender = checkedCategories.length ? filteredData : data;
    // Get the correct page of data to show
    const services = paginate(dataToRender, currentPage, pageSize);

    return (
      <>
        <NavigationBar />
        <div
          style={{
            minHeight: "120vh",
          }}
        >
          {/* Filter Section */}
          <div display="flex">
            <div
              style={{
                width: "20%",
                float: "left",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                border: "2px solid lightgrey",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <PageSizeHandler
                pageSize={pageSize}
                onPageSizeChange={this.handlePageSizeChange}
              />
              <h4>Categories</h4>
              <Filter categories={categories} onFilter={this.handleFilter} />
            </div>
            <DataDisplay data={services} />
            <PaginationHandler
              itemCount={
                checkedCategories.length ? filteredData.length : data.length
              }
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
        <div></div>

        <Footer />
      </>
    );
  }
}
