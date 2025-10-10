import React from "react";
import "./Navbar.css"; // CSS propio para el navbar
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Izquierda: Logo */}
      <div className="navbar-left">
        <img
          src="https://i.imgur.com/yInEJ52.png"
          alt="Logo"
          className="navbar-logo"
        />
        <span className="navbar-logo-text"></span>
      </div>

      {/* Centro: Botón */}
      <Link to="/new">
        <Button color="orange" variant="light">
          CREAR REVIEW
        </Button>
      </Link>

      {/* Derecha: Texto */}
      <div className="navbar-right">Film Reviewer</div>
    </nav>
  );
}

export default Navbar;
