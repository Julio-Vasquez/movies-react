import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import TopMenu from "./Components/TopMenu";
import Footer from ".//Components/Footer";
//Views
import Home from "./views/Home";
import NewMovie from "./views/NewMovie";
import PopularMovies from "./views/PopularMovies";
import SearchMovies from "./views/SearchMovies";
import Movie from "./views/Movie";
import Error404 from "./views/Error404";

export default function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <TopMenu />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/new-movies" exact={true} component={NewMovie} />
            <Route path="/popular" exact={true} component={PopularMovies} />
            <Route path="/search" exact={true} component={SearchMovies} />
            <Route path="/movie/:id" component={Movie} exact={true} />
            <Route path="*" component={Error404} />
          </Switch>
        </Content>
        <Footer />
      </Router>
    </Layout>
  );
}
