import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import AddProduct from "./AddProduct";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    // console.log(category);
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ products: res }));
  };

  addToCart = (product) => {
    // alert(product.productName);
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!");
  };

  removeFromCart = (item) => {
    let newCart = this.state.cart.filter((q) => q.product.id !== item.id);
    this.setState({ cart: newCart });
    alertify.error(item.productName + " deleted from cart!");
  };

  render() {
    let categoryInfo = { title: "Category List", size: "h3" };
    let titleProduct = "Product List";
    return (
      <div>
        <Container>
          <Row>
            <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          </Row>

          <Row className="mt-5">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Col xs="3">
                      <CategoryList
                        // {...this.props} olmasa da olur
                        currentCategory={this.state.currentCategory}
                        changeCategory={this.changeCategory}
                        info={categoryInfo}
                      />
                    </Col>

                    <Col xs="9">
                      <ProductList
                        {...this.props}
                        addToCart={this.addToCart}
                        products={this.state.products}
                        currentCategory={this.state.currentCategory}
                        title={titleProduct}
                      />
                    </Col>
                  </>
                }
              />

              <Route
                path="/cart"
                element={
                  <Col xs="12">
                    <CartList
                      {...this.props}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                    />
                  </Col>
                }
              />
                <Route
                path="/addproduct"
                element={
                  <Col xs="12">
                    <AddProduct/>
                  </Col>
                }
              />
              {/* Geçersiz URL'ler için NotFound gösterilmeli */}
              <Route
                path="*"
                element={
                  <Col xs="12">
                    <NotFound />
                  </Col>
                }
              />
            </Routes>
          </Row>
        </Container>
      </div>
    );
  }
}
