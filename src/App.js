import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { Container } from "reactstrap";

import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import ForgotPassword from "./views/ForgotPassword";
import User from "./views/User";
import Product from "./views/Product";
import Category from "./views/Category";

const App = () => {
  return (
    <Container fluid={false}>
      <BrowserRouter>
        <Link to="/users">USUÁRIOS</Link> - <Link to="/products">PRODUTOS</Link>{" "}
        - <Link to="/categories">CATEGORIAS</Link>
        <br />
        <br />
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />

          <Route path="/users" component={User} />
          <Route path="/products" component={Product} />
          <Route path="/categories" component={Category} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
