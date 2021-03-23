import React, { Component } from "react";
import Link from "react-router-dom/Link";
import axios from "axios";
import { servicesapiLink, categoriesapiLink } from "./utilities/constants";
import PageSizeHandler from "./utilities/pageSizeHandler";
import Filter from "./utilities/filter";
import DataDisplay from "./dataDisplay";
import PaginationHandler, { paginate } from "./utilities/paginationHandler";

// Component that renders all the data and filter components together
export default class ServicesComponent extends Component {
  state = {
    data: [],
    filteredData: [],
    filtered: false,
    categories: [],
    currentPage: 1,
    pageSize: 4,
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

  handleFilter = (checkedCategories) => {
    // If user unchecks all categories, reset the state so no filtering occurs
    if (!checkedCategories.length) {
      this.setState({ filteredData: [], filtered: false, currentPage: 1 });
      return;
    }
    // Represents the new filtered data
    let newData = [];
    // Check each service to see if it matches all checked categories
    this.state.data.forEach((service) => {
      let match = true;
      checkedCategories.every((category) => {
        if (!service[category]) {
          match = false;
          return false;
        }
        return true;
      });
      // If the service matches all checked categories, add it to the newData array
      if (match) newData.push(service);
    });
    this.setState({ filteredData: newData, filtered: true, currentPage: 1 });
  };

  render() {
    const {
      data,
      filteredData,
      filtered,
      categories,
      currentPage,
      pageSize,
    } = this.state;
    // Check whether there is filtered data, else use all data
    const dataToRender = filtered ? filteredData : data;
    // Get the correct page of data to show
    const services = paginate(dataToRender, currentPage, pageSize);

    return (
      <React.Fragment>
        {/* Dummy Navbar */}
        <div
          style={{
            border: "2px solid green",
            width: "100%",
            height: "10vh",
          }}
        >
          <Link style={{ float: "left" }} to="/">
            Home
          </Link>
          <h1 style={{ textAlign: "center" }}>NAVBAR</h1>
        </div>
        <div>
          {/* Filter Section */}
          <div
            style={{
              width: "25%",
              border: "2px solid blue",
              float: "left",
              textAlign: "center",
            }}
          >
            <h1>Filter</h1>
            <PageSizeHandler
              pageSize={pageSize}
              onPageSizeChange={this.handlePageSizeChange}
            />
            <Filter
              categories={categories}
              onFilter={this.handleFilter}
            ></Filter>
          </div>
          {/* Need a display of flex here to allow for flexbox use in these components */}
          <div display="flex">
            <DataDisplay data={services} />
            <PaginationHandler
              itemCount={filtered ? filteredData.length : data.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
