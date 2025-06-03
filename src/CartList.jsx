import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((data) => (
              <tr key={data.product.id}>
                <th scope="row">{data.product.id}</th>
                <td>{data.product.productName}</td>
                <td>{data.product.quantityPerUnit}</td>
                <td>@{data.product.unitPrice}</td>
                <td>
                  <Button
                    onClick={() => this.props.removeFromCart(data.product)}
                    color="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
