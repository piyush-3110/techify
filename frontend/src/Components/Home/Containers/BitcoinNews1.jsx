import { useEffect, useState } from "react";
import axios from "axios";
import { FaShareAlt } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ModalComponent } from "../ModalComponent";

const BitcoinNews = ({ url, headers, Source }) => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const text = [
    {
      url: "https://www.coindesk.com/policy/2023/02/08/crypto-exchange-bitstamp-registers-in-france/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title: "Crypto Exchange Bitstamp Registers in France",
      description:
        "The exchange joins Binance, Bitpanda and Société Générale in securing recognition from one of the most sophisticated regimes in the EU.",
      thumbnail:
        "https://www.coindesk.com/resizer/eblN6NsVqLeX8MvkJ76z27jOEpY=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/RDCXEGZK4FGGBPWNR6CDUTGDIU.jpg",
      createdAt: "Wed, 08 Feb 2023 14:09:00 +0000",
    },
    {
      url: "https://www.coindesk.com/policy/2023/02/08/will-the-sec-convince-a-court-its-right-to-label-these-tokens-as-securities/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title:
        "Will the SEC Convince a Court It’s Right to Label These Tokens as Securities?",
      description:
        "Lawyers have challenged a potentially consequential move from the U.S. Securities and Exchange Commission (SEC) to build a list of crypto tokens it considers unregistered securities.",
      thumbnail:
        "https://www.coindesk.com/resizer/olYCXoAXwseyu4pm6DejHJCgPO4=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/T6T2TQ4QOZEY3OINWPDDEADYW4.jpg",
      createdAt: "Wed, 08 Feb 2023 13:00:00 +0000",
    },
    {
      url: "https://www.coindesk.com/business/2023/02/08/crypto-classification-seeks-to-make-industry-more-welcoming-to-tradfi-participants/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title:
        "Crypto Classification Seeks to Make Industry More Welcoming to TradFi Participants",
      description:
        "Cryptocurrency is an incredibly broad and diverse field, with a huge array of wholly different assets, making the industry an intimidating one to enter.",
      thumbnail:
        "https://www.coindesk.com/resizer/8LSE5HJOIvzV5ji10Zhr_mvES9k=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/EXTO2TBJEVFITL6W2BBZPV4F2E.png",
      createdAt: "Wed, 08 Feb 2023 13:00:00 +0000",
    },
    {
      url: "https://www.coindesk.com/tech/2023/02/08/contentious-uniswap-vote-highlights-the-opaqueness-of-decentralized-governance/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title:
        "Contentious Uniswap Vote Highlights the Opaqueness of Decentralized Governance",
      description:
        "A16z didn’t quash a proposal to launch Uniswap onto Binance’s BNB Chain, but that doesn’t mean it couldn’t have.",
      thumbnail:
        "https://www.coindesk.com/resizer/3aE1pwex93owU9GP8Qq0S6ZpqYI=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/SEZF53NLHZEL5CLPCQY7YRJZJ4.jpg",
      createdAt: "Wed, 08 Feb 2023 12:30:00 +0000",
    },
    {
      url: "https://www.coindesk.com/business/2023/02/08/crypto-classification-seeks-to-make-industry-more-welcoming-to-tradfi-participants/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title:
        "Crypto Classification Seeks to Make Industry More Welcoming to TradFi Participants",
      description:
        "Cryptocurrency is an incredibly broad and diverse field, with a huge array of wholly different assets, making the industry an intimidating one to enter.",
      thumbnail:
        "https://www.coindesk.com/resizer/8LSE5HJOIvzV5ji10Zhr_mvES9k=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/EXTO2TBJEVFITL6W2BBZPV4F2E.png",
      createdAt: "Wed, 08 Feb 2023 13:00:00 +0000",
    },
    {
      url: "https://www.coindesk.com/business/2023/02/08/crypto-classification-seeks-to-make-industry-more-welcoming-to-tradfi-participants/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title:
        "Crypto Classification Seeks to Make Industry More Welcoming to TradFi Participants",
      description:
        "Cryptocurrency is an incredibly broad and diverse field, with a huge array of wholly different assets, making the industry an intimidating one to enter.",
      thumbnail:
        "https://www.coindesk.com/resizer/8LSE5HJOIvzV5ji10Zhr_mvES9k=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/EXTO2TBJEVFITL6W2BBZPV4F2E.png",
      createdAt: "Wed, 08 Feb 2023 13:00:00 +0000",
    },
    {
      url: "https://www.coindesk.com/business/2023/02/08/crypto-classification-seeks-to-make-industry-more-welcoming-to-tradfi-participants/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title:
        "Crypto Classification Seeks to Make Industry More Welcoming to TradFi Participants",
      description:
        "Cryptocurrency is an incredibly broad and diverse field, with a huge array of wholly different assets, making the industry an intimidating one to enter.",
      thumbnail:
        "https://www.coindesk.com/resizer/8LSE5HJOIvzV5ji10Zhr_mvES9k=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/EXTO2TBJEVFITL6W2BBZPV4F2E.png",
      createdAt: "Wed, 08 Feb 2023 13:00:00 +0000",
    },
    {
      url: "https://www.coindesk.com/business/2023/02/08/crypto-classification-seeks-to-make-industry-more-welcoming-to-tradfi-participants/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
      title:
        "Crypto Classification Seeks to Make Industry More Welcoming to TradFi Participants",
      description:
        "Cryptocurrency is an incredibly broad and diverse field, with a huge array of wholly different assets, making the industry an intimidating one to enter.",
      thumbnail:
        "https://www.coindesk.com/resizer/8LSE5HJOIvzV5ji10Zhr_mvES9k=/800x600/cloudfront-us-east-1.images.arcpublishing.com/coindesk/EXTO2TBJEVFITL6W2BBZPV4F2E.png",
      createdAt: "Wed, 08 Feb 2023 13:00:00 +0000",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      // Use the cors-anywhere proxy
      const options = { headers };

      try {
        const response = await axios.get(url, options);
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url, headers]);

  return (
    <>
      <div className="flex w-[100vw] justify-center">
        <div>
          <h2 className="p-4 text-3xl font-bold text-indigo-300">{Source}</h2>
          <div className="">
            {text.map((info, index) => (
              <div className="w-[90vw] sm:w-[30vw] m-2" key={index}>
                {" "}
                <div className="flex items-center justify-between">
                  <div className="flex w-[90vw] sm:w-[30vw] items-center justify-start gap-2">
                    <img
                      src={info.thumbnail}
                      alt="ThumbNail"
                      className="h-[15px] w-[15px]"
                    />

                    <a href={info.url}>
                      <p className="text-[1rem]">{info.title}</p>
                    </a>
                  </div>
                  <div className="h-[15px] w-[15px] ">
                    <FaShareAlt />
                  </div>
                </div>
                <hr className="w-[95%] border-gray-700 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {open ? <ModalComponent setShowModal={setShowModal} /> : ""} */}
    </>
  );
};

export default BitcoinNews;
