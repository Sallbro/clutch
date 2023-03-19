import React, { useContext } from "react";
import { UserContext } from "../context/context";

export default function Bid_model() {
  const { setShow } = useContext(UserContext);

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal" className="btn">
        I want to bid
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action m-0">
            <label htmlFor="my-modal" className="btn">
              X
            </label>
          </div>
          <form>
            <div className="mb-6">
              <p>Last bid Price</p>
              <p>{50}</p>
            </div>

            <div className="mb-6">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
              >
                Enter Your Bitting Price
              </label>
              <input
                type="number"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Title"
                required
              />
            </div>
          </form>

          <div
            className="modal-action"
            onClick={() => {
              setShow(true);
            }}
          >
            <label htmlFor="my-modal" className="btn">
              Bid
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
