import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <MiniPalette />
        <h1>React Colours</h1>
        {palettes.map(palette => (
          <MiniPalette {...palette} /> //passes everything to component
        ))}
      </div>
    );
  }
}

export default PaletteList;
