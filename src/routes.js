import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";

export default function Routes() {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    live: { opacity: 0, transform: 'translateY(50px)' }
  })

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route path="/" exact component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ));
}
