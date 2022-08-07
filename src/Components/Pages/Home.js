import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Cd";
import CardHome from "../CdHome";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://sleepy-tor-05641.herokuapp.com/api/home";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <div className="Home">
        <div className="home__container">
          <div className="home__first">
            <h1>This is My First Trip</h1>
          </div>
          <div className="home__sec">
            <Link to="/fitness">
              {" "}
              <img
                src="https://th.bing.com/th/id/OIP.fO18_gM97Fsuy5HNIlAVLQHaKe?pid=ImgDet&rs=1"
                alt="not found"
              />
            </Link>
          </div>
        </div>
        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
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
              src="https://i.pinimg.com/originals/37/8b/99/378b99936dd29a3cc185b7437be70737.jpg"
              alt=""
            />
          </div>
        <div className="home__left left1">
          {data
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                fulldescription={n.description}
                author={n.author}
              />
            ))}
        </div>
        
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="rightbar2">
          {data
            .filter((article) => {
              return article.category === "mix";
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
              src="https://th.bing.com/th/id/OIP.2FFfVUhTq_3OCgE4SV1magHaKs?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
      </div>
    </div>
  );
};

export default Home;
