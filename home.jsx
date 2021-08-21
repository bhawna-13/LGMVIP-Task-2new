import React, { useState, useEffect } from "react";
import "./home.scss";

const Home = () => {
  //seperate use state for quote and author
  const [quote, setquote] = useState();
  const [author, setAuthor] = useState();

  // function for fetching api for quotes
  const fetchApi = async () => {
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const jsonData = await response.json();

    const len = jsonData.length;
    const random = Math.floor(Math.random() * len) + 1;
    // console.log(jsonData[random]);
    setquote(jsonData[random].text);
    setAuthor(jsonData[random].author);
  };

  // Use effect
  useEffect(() => {
    fetchApi();
  }, []);

  // returning
  return (
    <>
      <div className="container">
        <div className="message_container">
          <h2>Hi, Thank you for visiting us</h2>
          <div className="quote_container">
            <p className="quote">{quote}</p>
            <h3>~ {author} </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;