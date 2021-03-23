import React from "react";
import { CardDeck } from "react-bootstrap";
import CardData from "./cardData";

// SFC for rendering all the data
const DataDisplay = ({ data }) => {
  return (
    <CardDeck
      // Styling put here to control how much space the data takes on the page. Must be put here because there is a current problem with using percentages (75%)
      // to control the amount of space a component takes. It does not take the scrollbar into account and creates a horizontal scrollbar. If I were to take the
      // styling out from here and put it in a div in the parent, it will create a horizontal scrollbar as it will go over 100% of the width.
      // More info: https://stackoverflow.com/questions/30489594/prevent-100vw-from-creating-horizontal-scroll
      style={{
        width: "75%",
        border: "2px solid black",
        margin: "0 0 0 25%",
        justifyContent: "flex-start",
      }}
    >
      {/* Create a card for each service provided */}
      {data.map((data) => (
        <CardData key={data.cartodb_id} data={data} />
      ))}
    </CardDeck>
  );
};

export default DataDisplay;