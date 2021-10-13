import React from "react";
import "semantic-ui-css/semantic.css";
import { Button, Header, Icon, Card, Rating, Grid } from "semantic-ui-react";
import NavBar from "../components/navlinks";

const GamePage = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Header>Games</Header>
      <Grid>
        <Grid.Column width="4">
          <Card>
            <Card.Content>
              <Card.Header>Tic-Tac-Toe</Card.Header>
              <Card.Meta>
                <span>3 in a row</span>
              </Card.Meta>
              <Rating icon="star" defaultRating={2} maxRating={5} />
              <Icon name="warning circle" size="large" />
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column width="4">
          <Card>
            <Card.Content>
              <Card.Header>Checkers</Card.Header>
              <Card.Meta>
                <span>Jumping race</span>
              </Card.Meta>
              <Rating icon="star" defaultRating={3} maxRating={5} />
              <Icon name="warning circle" size="large" />
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column width="5">
          <Card>
            <Card.Content>
              <Card.Header>Snakes & Ladders</Card.Header>
              <Card.Meta>
                <span>Snake!</span>
              </Card.Meta>
              <Rating icon="star" defaultRating={4} maxRating={5} />
              <Icon name="warning circle" size="large" />
            </Card.Content>
          </Card>
        </Grid.Column>

        <Grid.Column width="4">
          <Card>
            <Card.Content>
              <Card.Header>Yahtzee</Card.Header>
              <Card.Meta>
                <span>Feeling lucky?</span>
              </Card.Meta>
              <Rating icon="star" defaultRating={5} maxRating={5} />
              <Icon name="warning circle" size="large" />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};
export default GamePage;
