import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadIamge/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Typewriter from "typewriter-effect";

const HeroBanner = () => {
  const navigate = useNavigate();
  const [backGround, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  const media = {
    topic: ["movies", "tv-shows", "hollywood content", "bollywood content"],
  };

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={backGround} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome to Movie World</span>
          <span className="subTitle">
            get details of your preferred
            <span className="typewriter">
              <Typewriter
                options={{
                  strings: media.topic,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </span>

          <div className="serachInput">
            <input
              type="text"
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for your movies"
            />
            <button
              onClick={() => {
                navigate(`/search/${query}`);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
