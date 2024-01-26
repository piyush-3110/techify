import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
export const Slider = () => {
  const [news, setNews] = useState([]);
  const getData = async () => {
    let api =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=954e71bbb32945b4b9731ac371cd59e1";
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
      setNews(data.articles);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(typeof news);
  return (
    <>
      <div>
        <Marquee speed={50} pauseOnHover={true}>
          {news.map((data, index) => (
            <div key={index} className="mx-[1rem]">
              <a
                href={data.url}
                key={index}
                rel="noreferrer"
                target="_blank"
                className="text-slate-300"
              >
                {" "}
                {data.title}
              </a>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="my -[4rem]">
        <Marquee speed={50} pauseOnHover={true} direction="right">
          {news.map((data, index) => (
            <div key={index} className="mx-[1rem]">
              <a
                href={data.url}
                key={index}
                rel="noreferrer"
                target="_blank"
                className="text-slate-300"
              >
                {" "}
                {data.title}
              </a>
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};
