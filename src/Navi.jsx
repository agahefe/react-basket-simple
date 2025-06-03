import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  state = {
    isOpen: false,
  };

  toggle() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }
  render() {
    const { removeFromCart, cart } = this.props;
    return (
      <div>
        <Navbar
          className="rounded"
          color="primary"
          dark={true}
          expand={true}
          // {...this.props}
        >
          <Link className="navbar-brand" to="/">
            Northwind
          </Link>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
             
                  <Link className="nav-link" to="/addproduct">Add Product</Link>
            
              </NavItem>
              <CartSummary removeFromCart={removeFromCart} cart={cart} />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
