import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  programming: [
    { name: "Head First java", rating: "4.5/5" },
    { name: "The Code Breaker", rating: "4/5" }
  ],
  fiction: [
    { name: "Ghost on the Beach", rating: "4/5" },
    { name: "Harry Potter and the Chamber of Secrets", rating: "4.5/5" }
  ],
  autobiography: [
    { name: "Can't Hurt Me", rating: "5/5" },
    { name: "Extreme Ownership", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectGenre, setGenre] = useState("autobiography");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> My collection </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Here are a few of the most valuable books in my collection{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
