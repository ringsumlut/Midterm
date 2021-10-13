import React from "react";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <nav>
      <div class="ui icon menu">
        <a href="/" class="item">
          <i class="home icon" size="large"></i>
        </a>
        <a href="/game" class="item">
          <i class="gamepad icon" size="large"></i>
        </a>
        <a href="/game" class="item">
          <i class="users icon" size="large"></i>
        </a>
      </div>
    </nav>
  );
}
