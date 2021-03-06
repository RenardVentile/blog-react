import React, { Component } from "react";
import { Route } from "react-router-dom";
import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import Home from '../Home';
import Page1 from '../Page1';
import Page2 from '../Page2';


class Header extends Component {
  render() {
    return (
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <SideNav
							style={{background:'black'}}
              onSelect={selected => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-home"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="page1">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-pencil-ruler"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Graphisme</NavText>
                </NavItem>
								<NavItem eventKey="page2">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-font"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Typographie</NavText>
                </NavItem>
								<NavItem eventKey="page2">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-pencil-alt"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Illustration</NavText>
                </NavItem>
								<NavItem eventKey="page2">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-camera"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Photographie</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main>
              <Route path="/" exact component={Home} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
            </main>
          </React.Fragment>
        )}
      />
    );
  }
}

export default Header;
