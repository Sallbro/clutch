import React, { useContext, useEffect } from "react";
import NFt from "../assets/img/nftgirl.jpeg";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { UserInfo } from "../contexts/userInfo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserNfts } from "../contexts/usents";

function Index() {
  const address = useAddress();
  const { walletAddr, setWalletAddr } = useContext(UserInfo);
  const { setuserdata } = useContext(UserNfts);
  const navigate = useNavigate();

  useEffect(() => {
    setWalletAddr(address);

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
  }, [address]);

  return (
    <>
      {console.log(address)}
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("${NFt}")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Welcome To Wallet</h1>
            <p className="mb-5">
              We are excited to announce that we are launching a new NFT-based
              charity initiative. Our goal is to use the power of NFTs to raise
              funds for various charitable causes.
            </p>
            <p className="mb-5">
              Thank you for visiting our website and supporting our NFT-based
              charity initiative. Together, we can make a real impact on the
              world.
            </p>
            <div className="flex justify-center">
              <ConnectWallet
                accentColor="#1fb2a5"
                colorMode="dark"
                btnTitle="Connect Wallet"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
