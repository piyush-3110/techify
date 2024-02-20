import BitcoinNews1 from "./Containers/BitcoinNews1";
import { Slider } from "./Slider";

import TradingViewWidget from "./TradingViewWidget";
import { Youtube } from "./Youtube";

const Home = () => {
  const url1 = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";
  const headers1 = {
    "X-RapidAPI-Key": "f7fc764790msh3a5265a6c4231f9p1e2e3fjsn38200b63171a",
    "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  };
  const url2 = "https://cryptocurrency-news2.p.rapidapi.com/v1/cointelegraph";
  const headers2 = {
    "X-RapidAPI-Key": "f7fc764790msh3a5265a6c4231f9p1e2e3fjsn38200b63171a",
    "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  };
  const url3 = "https://cryptocurrency-news2.p.rapidapi.com/v1/decrypt";
  const headers3 = {
    "X-RapidAPI-Key": "f7fc764790msh3a5265a6c4231f9p1e2e3fjsn38200b63171a",
    "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  };
  const url4 = "https://news67.p.rapidapi.com/v2/crypto";
  const headers4 = {
    "X-RapidAPI-Key": "f7fc764790msh3a5265a6c4231f9p1e2e3fjsn38200b63171a",
    "X-RapidAPI-Host": "news67.p.rapidapi.com",
  };

  return (
    <div className="pt-2">
      <Slider
        url={
          "https://newapi.org/v2/top-headlines?country=us&category=business&apiKey=954e71bbb32945b4b9731ac371cd59e1"
        }
      />
      <TradingViewWidget className="pb-2" />
      <div className="my-5 sm:flex ">
        <BitcoinNews1 url={url1} headers={headers1} Source="CoinDesk" />
        <BitcoinNews1 url={url2} headers={headers2} Source="CoinTelegraph" />
        <BitcoinNews1 url={url3} headers={headers3} Source="Decrypt" />
      </div>
      <div className="my-5 sm:flex ">
        <BitcoinNews1 url={url1} headers={headers1} Source="CoinDesk" />
        <BitcoinNews1 url={url2} headers={headers2} Source="CoinTelegraph" />
        <BitcoinNews1 url={url3} headers={headers3} Source="Decrypt" />
      </div>

      <Slider
        url={
          "https://newsai.org/v2/top-headlines?country=in&category=technology&apiKey=954e71bbb32945b4b9731ac371cd59e1"
        }
      />
      <Youtube />
      <div className="my-5 sm:flex ">
        <BitcoinNews1 url={url1} headers={headers1} Source="CoinDesk" />
        <BitcoinNews1 url={url2} headers={headers2} Source="CoinTelegraph" />
        <BitcoinNews1 url={url3} headers={headers3} Source="Decrypt" />
      </div>
      <div className="my-5 sm:flex ">
        <BitcoinNews1 url={url1} headers={headers1} Source="CoinDesk" />
        <BitcoinNews1 url={url2} headers={headers2} Source="CoinTelegraph" />
        <BitcoinNews1 url={url3} headers={headers3} Source="Decrypt" />
      </div>
    </div>
  );
};

export default Home;
