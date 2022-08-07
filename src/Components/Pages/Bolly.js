import React, { useEffect, useState } from "react";

import Card from "../Cd";

const Bollywood = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://sleepy-tor-05641.herokuapp.com/api/bolly"; //https://sleepy-tor-05641.herokuapp.com/api/bolly
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
      <div className="main__container">
        <div className="rightbar">
          {data
            .filter((article) => {
              return article.category === "Bollywood";
            })
            .map((n) => (
              <Card
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="advertisement">
            <img
              id="adv"
              src="https://images.pexels.com/photos/331987/pexels-photo-331987.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
          </div>
      </div>
    </div>
  );
};
export default Bollywood;
