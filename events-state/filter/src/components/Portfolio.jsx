import React, { Component } from "react";
import { Toolbar } from "./Toolbar";
import { ProjectList } from "./ProjectList";
import cardsList from '../assets/cards.json';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All'
    };
  }

  handleSelectFilter = (filter) => {
    this.setState({ filter });
  }

  handleListFilter = () => {
    if (this.state.filter === "All") {
      return cardsList;
    }
    return cardsList.filter(project => project.category === this.state.filter)
  }

  render() {
    return (
      <>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.filter}
          onSelectFilter={this.handleSelectFilter} />
        <ProjectList
          projects={this.handleListFilter()}
        />
      </>
    )
  }
}
