import { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
export const Youtube = () => {
  const [news, setNews] = useState([]);
  const halfUrl = "https://www.youtube.com/watch?v=";

  const getData = async () => {
    let api =
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=blockchain%7Cweb3%7Creactjs%7Cwebdev%7Cappdev&regionCode=us&topicId=%2Fm%2F07c1v%20Technology&key=AIzaSyBC-4KDeuJgU_N2oVkODArziFFE5T5W-2Q";
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data);
      setNews(data.items);
      console.log(data.items);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="flex items-center gap-2 ml-2 sm:ml-4 ">
        <p className="text-3xl font-bold text-indigo-300">Youtube</p>
        <a href="https://www.youtube.com/">
          <FaYoutube className="h-[3rem] w-[2rem]" />{" "}
        </a>
      </div>
      <div className="sm:grid sm:grid-cols-5">
        {news.map((data, index) => {
          return (
            <div key={index} className="w-[95%] sm:w-[14rem] ml-2 sm:mx-4 m-2">
              <a
                href={halfUrl + data.id.videoId}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[100%]"
              >
                {" "}
                <img
                  src={data.snippet.thumbnails.high.url}
                  alt="Thumbnail"
                  className="w-[100%]"
                ></img>
              </a>

              <a
                href={halfUrl + data.id.videoId}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-[0.9rem] text-gray-300">
                  {data.snippet.title}
                </p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
