import { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { useQuery } from "react-query";
export const Youtube = () => {
  const [news, setNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const halfUrl = "https://www.youtube.com/watch?v=";

  const api =
    "https://youtub.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=blockchain%7Cweb3%7Creactjs%7Cwebdev%7Cappdev&regionCode=us&topicId=%2Fm%2F07c1v%20Technology&key=AIzaSyBC-4KDeuJgU_N2oVkODArziFFE5T5W-2Q";

  const { isLoading, data, error } = useQuery(
    ["url"],

    async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          console.log("No response");
        }
        const result = await response.json();
        setNews(result.items);
        setDisplayedNews(result.items.slice(0, 10));
        console.log(result.items);
        return result;
      } catch (error) {
        console.log(error.message);
      }
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>There is an {error}</div>;
  }
  const handleShowMore = () => {
    setDisplayedNews(news); // Set displayedNews to the entire news array
    setShowAll(true);
  };

  const handleShowLess = () => {
    setDisplayedNews(news.slice(0, 10)); // Display only first 10 items
    setShowAll(false);
  };

  return (
    <div>
      <div className="flex items-center gap-2 ml-2 sm:ml-4 ">
        <p className="text-3xl font-bold text-indigo-300">Youtube</p>
        <a href="https://www.youtube.com/">
          <FaYoutube className="h-[3rem] w-[2rem]" />{" "}
        </a>
      </div>
      <div className="sm:grid sm:grid-cols-5">
        {displayedNews.map((data, index) => {
          return (
            <div key={index} className="w-[95%] sm:w-[14rem] ml-2 sm:mx-4 m-2">
              <a
                href={halfUrl + data.id.videoId}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[100%]"
              >
                <img
                  src={data.snippet.thumbnails.high.url}
                  alt="Thumbnail"
                  className="w-[100%] hover:scale-125 transition duration-500 cursor-pointer"
                />
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
      {!showAll ? (
        <button onClick={handleShowMore} className="ml-2 sm:ml-4">
          <p className="text-[1.5rem] text-indigo-300">More...</p>
        </button>
      ) : (
        <button onClick={handleShowLess} className="ml-2 sm:ml-4">
          <p className="text-[1.5rem] text-indigo-300">Less...</p>
        </button>
      )}
    </div>
  );
};
