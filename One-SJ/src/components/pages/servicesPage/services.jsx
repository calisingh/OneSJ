import { Component } from "react";
import axios from "axios";
import { servicesapiLink, categoriesapiLink } from "../../utilities/constants";
import NavigationBar from "../../reusable/navigationBar";
import InsuredSnack from "./insuredSnack";
import ServicesShown from "./servicesShown";
import SearchBar from "./searchBar";
import PageSizeHandler from "./pageSizeHandler";
import Filter from "./filter";
import DataDisplay from "./dataDisplay";
import PaginationHandler, { paginate } from "./paginationHandler";
import Footer from "../../reusable/footer";
import "../../../css/services.css";

// Component that renders all the data and filter components together
export default class Services extends Component {
  state = {
    data: [],
    filteredData: [],
    searchedData: [],
    checkedCategories: [],
    categories: [],
    currentSearch: "",
    searchInProgress: false,
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

  handleFilter = (value) => {
    // Prepare new array for new list of checked categories
    let newCheckedCategories = this.state.checkedCategories;

    // Grab category name from the event
    const categoryName = value;

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
      this.setState(
        {
          filteredData: [],
          checkedCategories: [],
          currentPage: 1,
        },
        () => {
          if (this.state.searchInProgress)
            this.handleSearch(this.state.currentSearch);
        }
      );
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

    // Make sure to call search function again if there was a search in progress after filtering
    this.setState(
      {
        filteredData: newData,
        checkedCategories: newCheckedCategories,
        currentPage: 1,
      },
      () => {
        if (this.state.searchInProgress)
          this.handleSearch(this.state.currentSearch);
      }
    );
  };

  handleSearch = (value) => {
    // If search returns to empty, reset state
    if (value === "" && this.state.searchedData.length) {
      this.setState({
        searchedData: [],
        searchInProgress: false,
        currentSearch: value,
        currentPage: 1,
      });
    }

    // Use filtered data if there are checked categories, else use all data
    let data = this.state.checkedCategories.length
      ? this.state.filteredData
      : this.state.data;

    let newData = [];

    data.forEach((service) => {
      if (service.provider_name.toLowerCase().includes(value.toLowerCase()))
        newData.push(service);
    });

    this.setState({
      searchedData: newData,
      searchInProgress: true,
      currentSearch: value,
      currentPage: 1,
    });
  };

  render() {
    const {
      data,
      filteredData,
      searchedData,
      checkedCategories,
      categories,
      searchInProgress,
      currentPage,
      pageSize,
    } = this.state;
    let dataToRender = data;
    // Check whether there is filtered data
    if (checkedCategories.length) {
      dataToRender = filteredData;
    }
    // Check whether there is a search in progress
    if (searchInProgress) {
      dataToRender = searchedData;
    }
    // Get the correct page of data to show
    const services = paginate(dataToRender, currentPage, pageSize);

    return (
      <>
        <NavigationBar />
        <InsuredSnack />
        <div className="servicesLayout">
          <ServicesShown
            currentPage={currentPage}
            pageSize={pageSize}
            total={dataToRender.length}
          />
          <SearchBar onSearch={this.handleSearch} />
          <div className="filterBox boxShadow">
            <PageSizeHandler
              pageSize={pageSize}
              onPageSizeChange={this.handlePageSizeChange}
            />
            <h4 className="services">Categories</h4>
            <Filter categories={categories} onFilter={this.handleFilter} />
          </div>
          <div className="center" style={{ width: "100%" }}>
            <DataDisplay data={services} />
            <PaginationHandler
              itemCount={dataToRender.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
