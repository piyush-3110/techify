import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
export const Slider = ({ url }) => {
  const [news, setNews] = useState([]);
  const getData = async () => {
    let api = url;
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

  return (
    <>
      <div className="my-2">
        <Marquee speed={50} pauseOnHover={true}>
          {news.map((data, index) => (
            <div key={index} className="mx-[1rem]">
              <a
                href={data.url}
                key={index}
                rel="noreferrer"
                target="_blank"
                className="text-white text-bold"
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
