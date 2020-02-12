import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Views
import Home from "./views/Home/Home";
import NewMovie from "./views/NewMovie/NewMovie";
import PopularMovies from "./views/PopularMovies/PopularMovies";
import SearchMovies from "./views/SearchMovies/SearchMovies";
import Movie from "./views/Movie/Movie";
import Error404 from "./views/Error404/Error404";

export default function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Router>
        <Header>header</Header>
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
      </Router>
    </Layout>
  );
}
