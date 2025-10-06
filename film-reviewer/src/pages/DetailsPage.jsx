import React from "react";
import { Link } from "react-router-dom";
import { useState, useParams } from "react";

function DetailsPage() {
  const [films, setFilms] = useState({});
  const { id } = useParams();
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
export default DetailsPage;
