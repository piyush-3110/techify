import { useEffect } from "react";

const TradingViewWidget = () => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
  script.async = true;
  script.innerHTML = JSON.stringify({
    symbols: [
      { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
      { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
      { description: "Solana", proName: "COINBASE:SOLUSD" },
      { description: "Litecoin", proName: "BINANCE:LTCUSDT" },
      { description: "DogeCoin", proName: "BINANCE:DOGEUSDT" },
      { description: "Cardano", proName: "BINANCE:ADAUSD" },
      { description: "Shibha Inu", proName: "COINBASE:SHIBUSD" },
      { description: "Dai", proName: "BITSTAMP:DAIUSD" },
      { description: "Dash", proName: "BITFINEX:DSHUSD" },
      { description: "Monero", proName: "BINANCE:XMRUSDT" },
      { description: "Polkadot", proName: "COINBASE:DOTUSD" },
      { description: "Tron", proName: "BINANCE:TRXUSDT" },
      { description: "BinanceCoin", proName: "BINANCE:BNBUSDT" },
    ],
    showSymbolLogo: true,
    isTransparent: true,
    displayMode: "adaptive",
    colorTheme: "dark",
    locale: "en",
  });
  useEffect(() => {
    document
      .getElementsByClassName("tradingview-widget-container__widget")[0]
      .appendChild(script);

    // return () => {
    //   document
    //     .getElementsByClassName("tradingview-widget-container__widget")[0]
    //     .removeChild(script);
    // };
  }, [script]);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
