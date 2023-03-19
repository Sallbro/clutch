import React, { useContext, useEffect } from "react";
import Yourart from "./my_card";
import Model from "./model_form";
import { UserNfts } from "../../contexts/usents";
import axios from "axios";
import { useAddress } from "@thirdweb-dev/react";

export default function Your_art() {
  const { userdata, setuserdata } = useContext(UserNfts);
  const address = useAddress();
  const getadd = () => {
    const options = {
      method: "GET",
      url: `https://api.verbwire.com/v1/nft/data/owned?walletAddress=${address}&chain=mumbai`,
      headers: {
        accept: "application/json",
        "X-API-Key": "sk_live_6c476df5-f67f-4520-aaa6-a865b1c1b756",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.nfts);
        setuserdata(response.data.nfts);
      })
      .catch(function (error) {
        console.error(error);
      });
    // if (address) {
    //   navigate("/home");
    // }
  };
  useEffect(() => {
    getadd();
    console.log("userdata", userdata);
    userdata?.map((data) => {
      const options = {
        method: "GET",
        url: `https://api.verbwire.com/v1/nft/data/nftDetails?contractAddress=${data.contractAddress}&tokenId=${data.tokenID}&chain=mumbai`,
        headers: {
          accept: "application/json",
          "X-API-Key": "sk_live_6c476df5-f67f-4520-aaa6-a865b1c1b756",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log("lol ", response.data.nfts.nfts);
        })
        .catch(function (error) {
          console.error(error);
        });
    });
  });
  useEffect(() => {
    console.log("userdata2", userdata);
  }, [userdata]);
  return (
    <div>
      <div className="text-2xl font-bold flex justify-between px-5 mx-auto">
        <p>All Your Art</p>
        <Model />
      </div>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 grid-cols-1 px-5 gap-4">
          <Yourart />
          <Yourart />
          <Yourart />
          <Yourart />
          <Yourart />
          <Yourart />
          <Yourart />
          <Yourart />
        </div>
      </div>
    </div>
  );
}
