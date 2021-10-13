import React from "react";
import "semantic-ui-css/semantic.css";
import { Button, Header, Segment, Grid } from "semantic-ui-react";
import NavBar from "../components/navlinks";

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Segment>
        <Grid>
          <Grid.Column textAlign="center">
            <div>
              <Header>Home</Header>
            </div>
            <div>
              <p>Some random text that needs not readen</p>
            </div>
            <div>
              <button class="ui green button" primary>
                Join Now!
              </button>
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
      <h3>News</h3>
      <p>Some more random text</p>
    </React.Fragment>
  );
};

export default HomePage;
