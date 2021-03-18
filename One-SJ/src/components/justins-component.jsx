import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import PaginationHandler, { paginate } from "./utilities/paginationHandler";
import Filter from "./utilities/filter";
import PageSizeHandler from "./utilities/pageSizeHandler";
import axios from "axios";

export default class JustinsComponent extends Component {
  state = {
    data: [],
    filteredData: [],
    filtered: false,
    categories: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const apiLink =
      "https://clay-g.carto.com/api/v2/sql?api_key=KVqWfmnUVH9NiZfJqnEBDw&q=SELECT * FROM onesj_services";
    const categoryapiLink =
      "https://clay-g.carto.com/api/v2/sql?api_key=KVqWfmnUVH9NiZfJqnEBDw&q=SELECT * FROM onesj_categories";
    axios.get(apiLink).then((data) => {
      console.log(data.data.rows);
      this.setState({ data: data.data.rows });
    });
    axios.get(categoryapiLink).then((categories) => {
      console.log(categories.data.rows);
      this.setState({ categories: categories.data.rows });
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePageSizeChange = (id) => {
    this.setState({ pageSize: document.getElementById(id).value });
  };

  handleFilter = (checkedCategories) => {
    if (!checkedCategories.length) {
      this.setState({ filteredData: [], filtered: false, currentPage: 1 });
      return;
    }
    let newData = [];
    this.state.data.forEach((service) => {
      let match = true;
      checkedCategories.every((category) => {
        if (!service[category]) {
          match = false;
          return false;
        }
        return true;
      });
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
    const dataToRender = filtered ? filteredData : data;
    const services = paginate(dataToRender, currentPage, pageSize);
    return (
      <div>
        <div
          style={{
            //position: "relative",
            border: "2px solid green",
            width: "100%",
            height: "40%",
          }}
        >
          <Link style={{ float: "left" }} to="/">
            Home
          </Link>
          <h1 style={{ textAlign: "center" }}>NAVBAR</h1>
        </div>
        <div>
          <div
            style={{
              //position: "absolute",
              width: "25%",
              height: "85.5%",
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
          <DataDisplay data={services} />
          <div display="flex">
            <PaginationHandler
              itemCount={filtered ? filteredData.length : data.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
