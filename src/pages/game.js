import React from "react";
import "semantic-ui-css/semantic.css";
import { Button, Header, Segment, Card, Rating } from "semantic-ui-react";
import NavBar from "../components/navlinks";

const GamePage = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Header>Games</Header>

      <Card.Content>
        <Card.Header>Tic-Tac-Toe</Card.Header>
        <Card.Meta>
          <span>3 in a row</span>
        </Card.Meta>
        <Rating icon="star" defaultRating={2} maxRating={5} />
      </Card.Content>
    </React.Fragment>
  );
};
export default GamePage;
