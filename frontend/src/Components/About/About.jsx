import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="items-center max-w-screen-xl sm:flex">
      <div className="p-5 sm:w-1/2">
        <div className="object-center text-center image">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
        </div>
      </div>
      <div className="p-5 sm:w-1/2">
        <div className="text">
          <h1>
            About <span className="text-indigo-600">Techify</span>
          </h1>

          <h2 className="my-4 text-3xl font-bold sm:text-4xl">
            From University to Corporate: The Techeify Journey
          </h2>
          <p className="text-white-200">
            In the hustle of university life, I often found myself longing for a
            single source that could deliver all the latest headlines in the
            dynamic worlds of technology and business. Fast forward to the
            corporate grind, and time became an even more precious commodity.
            The need for a convenient, one-stop platform for daily insights
            became clearer than ever.
            <br></br>
            That's where Techeify comes into play.
          </p>
          {!showMore && (
            <button
              className="mt-2 text-indigo-600 underline"
              onClick={toggleShowMore}
            >
              Read More
            </button>
          )}
          {showMore && (
            <div>
              <p className="text-white">
                Our Story <br /> Techeify is more than just a news website; it's
                a solution born out of personal experiences. During my
                university days, I struggled to find a comprehensive source that
                aggregated all the headlines about tech and business. Now, in
                the corporate world, the struggle persists with the added
                challenge of time constraints.
                <br></br>
                Bridging the Information Gap <br /> At Techeify, we understand
                the value of time and the importance of staying informed. Our
                mission is simple yet powerful: to be the One Source for
                Countless Stories. We curate headlines from various sources,
                bringing you a consolidated overview of the latest developments
                in technology, business, AI, blockchain, cryptocurrency, and the
                corporate world.
                <br></br>
                Your Time, Our Priority <br />
                We know you are busy. That's why Techeify is designed to be your
                daily tech fix in a time-efficient manner. Our website displays
                headlines, allowing you to quickly scan through the latest news.
                If a topic catches your eye, a simple click will take you to the
                original source for the full article.
                <br></br>
                Post section <br />
                Our team of experts and contributors shares in-depth articles,
                exclusive interviews, and thought-provoking content directly on
                our platform. These posts delve into the heart of tech and
                business, offering perspectives and analyses that go beyond the
                headlines.
                <br></br>
                Subscribe for Daily Insights
                <br></br>
                Don't have time to search multiple sources? Subscribe to our
                newsletter for a daily digest of curated tech news delivered
                straight to your inbox. Stay in the loop and navigate the
                ever-evolving landscape of technology and business with ease.
                <br />
                Join the Techeify Community
                <br />
                Whether you're a tech enthusiast, a business professional, or
                someone eager to stay informed, Techeify welcomes you. Be part
                of our community, engage in discussions, on our telegram group
                and share your thoughts. We believe in the power of diverse
                voices and the collective intelligence of our audience.
                <br />
                Connect With Us <br />
                Follow Techeify on Twitter, LinkedIn, and Instagram to stay
                updated on the latest news, trends, and exclusive content.
                <br />
                Techeify is more than a website; it's your daily companion in
                the journey of staying informed, connected, and inspired in the
                rapidly changing world of technology and business.
              </p>
              <button
                className="mt-2 text-indigo-600 underline"
                onClick={toggleShowMore}
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
