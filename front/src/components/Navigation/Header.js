import React, { Component } from "react";
import { Route } from "react-router-dom";
import ClickOutside from "react-click-outside";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./header.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import Home from "../Pages/Home";
import FrontEndPage from "../Pages/FrontEndPage";
import BackEndPage from "../Pages/BackEndPage";
import GraphismPage from "../Pages/GraphismPage";
import TypographyPage from "../Pages/TypographyPage";
import IllustrationPage from "../Pages/IllustrationPage";
import TattooPage from "../Pages/TattooPage";
import PhotographyPage from "../Pages/PhotographyPage";
import TemplatePost from "../TemplatePost"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }
  render() {
    return (
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <ClickOutside
              onClickOutside={() => {
                this.setState({ expanded: false });
              }}
            >
              <SideNav
                style={{ background: "black" }}
                expanded={this.state.expanded}
                onToggle={expanded => {
                  this.setState({ expanded });
                }}
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
                  <NavItem eventKey="web">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-laptop-code"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Web</NavText>
                    <NavItem eventKey="web/front-end">
                      <NavText>Front-end</NavText>
                    </NavItem>
                    <NavItem eventKey="web/back-end">
                      <NavText>Back-end</NavText>
                    </NavItem>
                  </NavItem>
                  <NavItem eventKey="graphisme">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-pencil-ruler"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Graphisme</NavText>
                  </NavItem>
                  <NavItem eventKey="typographie">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-font"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Typographie</NavText>
                  </NavItem>
                  <NavItem eventKey="illustration">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-pencil-alt"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Illustration</NavText>
                  </NavItem>
                  <NavItem eventKey="tatouage">
                    <NavIcon>
                      <i
                        className="fa fa-fw fa-syringe"
                        style={{ fontSize: "1.75em" }}
                      />
                    </NavIcon>
                    <NavText>Tatouage</NavText>
                  </NavItem>
                  <NavItem eventKey="photographie">
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
            </ClickOutside>
            <main>
              <Route path="/" exact component={Home} />
              <Route path="/web/front-end" component={FrontEndPage} />
              <Route path="/web/back-end" component={BackEndPage} />
              <Route path="/graphisme" component={GraphismPage} />
              <Route path="/typographie" component={TypographyPage} />
              <Route path="/illustration" component={IllustrationPage} />>
              <Route path="/tatouage" component={TattooPage} />
              <Route path="/photographie" component={PhotographyPage} />
              <Route path='/template-post' component={TemplatePost} />
            </main>
          </React.Fragment>
        )}
      />
    );
  }
}

export default Header;
