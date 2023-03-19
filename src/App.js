import { useAddress } from "@thirdweb-dev/react";
import { UserInfo } from "./contexts/userInfo";
import { UserNfts } from "./contexts/usents";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./components/context/context";
import Index from "./components/index";
import axios from "axios";
import Home from "./components/Home";
import Navbar from "./components/navbar";

export default function App() {
  const address = useAddress();

  const [walletAddr, setWalletAddr] = useState(null);
  const [show, setShow] = useState(false);
  const [userdata, setuserdata] = useState([]);

  return (
    <UserNfts.Provider value={{ userdata, setuserdata }}>
      <UserInfo.Provider value={{ setWalletAddr, walletAddr }}>
        <UserContext.Provider value={{ show, setShow }}>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </UserInfo.Provider>
    </UserNfts.Provider>
  );
}
