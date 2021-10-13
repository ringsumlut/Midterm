import React from "react";
import "semantic-ui-css/semantic.css";
import { Button, Header, Segment, Form } from "semantic-ui-react";
import NavBar from "../components/navlinks";

const ContactPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Header>Contact Us!</Header>

      <Form>
        <Form.Field>
          <label>Full Name</label>
          <input placeholder="Enter your full name..." />
        </Form.Field>
        <Form.Field>
          <label>Contact Email:</label>
          <input placeholder="Enter the best email to contact you with..." />
        </Form.Field>
        <Form.TextArea label="Message" placeholder="Enter your message..." />

        <Form.Field>
          <button class="ui green button" primary>
            Send Message
          </button>
        </Form.Field>
      </Form>
    </React.Fragment>
  );
};
export default ContactPage;
