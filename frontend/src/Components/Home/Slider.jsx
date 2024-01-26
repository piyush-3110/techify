import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const Slider = () => {
  //   const [news, setNews] = useState([]);
  const getData = async () => {
    try {
      const repsonse = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=954e71bbb32945b4b9731ac371cd59e1"
      );
      const data = await repsonse.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <Marquee>AST</Marquee>
      </div>
    </>
  );
};

export default Slider;
