import React, { useState, useEffect } from "react";
import './App.css'

const url = "https://api.quotable.io/random";

const App = () => {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

 const { content, author } = quotes;
  return (
    <div className="box-centerside">
      <div className="text">
        <p>{content}</p>
      </div>
      <div className="author">
        <h5>{author}</h5>
        <div className="button-container">
          
          <button onClick={getNewQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
};

export default App;