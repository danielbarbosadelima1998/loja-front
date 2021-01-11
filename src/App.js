import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { Container } from "reactstrap";

import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import ForgotPassword from "./views/ForgotPassword";
import Users from "./views/Users";
import Products from "./views/Product";
import Categories from "./views/Category";

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

          <Route path="/users" component={Users} />
          <Route path="/products" component={Products} />
          <Route path="/categories" component={Categories} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
