import React, { Component } from "react";
import { Link } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import PaginationHandler, { paginate } from "./utilities/paginationHandler";
import Filter from "./utilities/filter";
import axios from "axios";
import Form from "react-bootstrap/Form";

export default class JustinsComponent extends Component {
  state = { data: [], categories: [], currentPage: 1, pageSize: 4 };

  componentDidMount() {
    const apiLink =
      "https://clay-g.carto.com/api/v2/sql?api_key=8TkLxxG_A0KXINCDG3D0wQ&q=SELECT * FROM onesj_services";
    axios.get(apiLink).then((data) => {
      console.log(data.data.rows);
      this.setState({ data: data.data.rows });
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { data, categories, currentPage, pageSize } = this.state;
    const services = paginate(data, currentPage, pageSize);
    console.log("current page size: " + pageSize);
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
            <Form>
              <Form.Group>
                <Form.Label>Current Page Size: {pageSize}</Form.Label>
                <Form.Control
                  type="range"
                  id="rangePrim"
                  min="2"
                  max="15"
                  value={[pageSize]}
                  onChange={() =>
                    this.setState({
                      pageSize: document.getElementById("rangePrim").value,
                    })
                  }
                ></Form.Control>
              </Form.Group>
            </Form>
            {/* <Filter categories={categories} onFilter={handleFilter}></Filter> */}
          </div>
          <DataDisplay data={services} />
          <div display="flex">
            <PaginationHandler
              itemCount={data.length}
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
