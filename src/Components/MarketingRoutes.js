import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ShowMarketing from "../Pages/Marketing/ShowMarketing";
import SingleMarketingView from "../Pages/Marketing/SingleMarketingView";


const MarketingRoutes = () => {
  const [MarketingData, setMarketingData] = useState([]);
  const urlMarketing = "http://localhost:4000/home/marketing";

  async function getMarketingData() {
    await fetch(urlMarketing)
      .then((res) => res.json())
      .then((data) => {
        console.log("Marketing Data  insisde fetch funciton", data);

        setMarketingData(data);
      })
      .catch(console.error);
  }

  const createMarketing = async (newMarketing) => {
    await fetch(urlMarketing, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMarketing),
    });
    getMarketingData();
  };

  const updateMarketing = async (Marketing, id) => {
    await fetch(urlMarketing + "/" + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Marketing),
    });
    getMarketingData();
  };

  // delete marketing
  const deleteMarketing = async (id) => {
    await fetch(urlMarketing + "/" + id, {
      method: "delete",
    });
    getMarketingData();
  };

  useEffect(() => {
    getMarketingData();
  }, []);

  if (!MarketingData) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route
          path="/Marketing/:id"
          element={
            <SingleMarketingView
              MarketingData={MarketingData}
              updateMarketing={updateMarketing}
              deleteMarketing={deleteMarketing}
            />
          }
        />
        <Route
          path="/"
          element={
            <ShowMarketing
              MarketingData={MarketingData}
              createMarketing={createMarketing}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default MarketingRoutes;
