import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });

      setResults(response.data.businesses);
      // console.log(response.data);
    } catch (e) {
      setErrorMessage("something went wrong");
    }
  };

  //searchApi("pasta");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, errorMessage, results];
};
