import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((data) => data.json())
      .then((datajson) => this.setState({ categories: datajson }));
  };

  render() {
    return (
      <div>
        <h4>{this.props.info.title}</h4>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active={this.props.currentCategory===category.categoryName?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
