import React from "react";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Review from "../Review/Review";

const reviewPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Review reviewPromise={reviewPromise}></Review>
    </div>
  );
};

export default Home;
