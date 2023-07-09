import { useEffect, useState } from "react";
import "./App.scss";
import SearchInput from "./components/core/Input/SearchInput";
import Tweet from "./components/core/Tweet/Tweet";
import TweetBar from "./components/core/Tweet/TweetBar";
import Button from "./components/core/buttons/Button";
import Card from "./components/core/cards/Card";
import Trend from "./components/core/cards/Trend";
import Section from "./components/core/lists/Section";
import BaseLayout from "./components/layout/BaseLayout";
import TopBar from "./components/ui/TopBar";

// Data
import Avatar from "./components/core/Avatar/Avatar";
import trendData from "./data/trends.json";
import tweetData from "./data/tweets.json";
import WTFData from "./data/wtf.json";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const mediaQuery = useMediaQuery("480px");
  const [isScroll, setScrolling] = useState<boolean>(false);

  // FUNCTIONS
  const handleScroll = () => {
    console.log(window);
    /**if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    } */
  };

  const topBarPosHandler = () => {
    if (mediaQuery && isScroll === true) {
      return "fixed";
    } else if (!mediaQuery) {
      return "fixed";
    } else if (mediaQuery && isScroll === false) {
      return "relative";
    } else {
      return "";
    }
  };

  const tweets = tweetData.map((twt, idx) => {
    return (
      <Tweet
        key={idx}
        avatar={twt.avatar}
        name={twt.name}
        username={twt.username}
        time={twt.time}
        status={twt.status as "gold" | "blue"}
        content={twt.content}
        images={twt.images}
        replies={twt.replies}
        retweets={twt.retweets}
        likes={twt.likes}
        views={twt.views}
      />
    );
  });

  console.log(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => console.log(window.scrollY));
    return () =>
      window.removeEventListener("scroll", () => console.log(window.scrollY));
  }, []);

  return (
    <BaseLayout>
      <Section className="home-tweets">
        <TopBar
          title="Home"
          style={{
            position: topBarPosHandler() as React.CSSProperties["position"],
          }}
        >
          <div className="link-wrapper">
            <ul className="top-links">
              <li>
                <a href="/home" className="active">
                  For you
                </a>
              </li>
              <li>
                <a href="/home">Following</a>
              </li>
            </ul>
          </div>
        </TopBar>
        <TweetBar></TweetBar>

        {/** TWEETS */}
        {tweets}
      </Section>
      <Section className="rightbar">
        <div className="wrapper">
          <div className="search-wrapper">
            <SearchInput />
          </div>
          <div className="space"></div>
          <Card headerText="Get Verified">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0px 1rem 1rem",
                gap: ".6rem",
              }}
            >
              <h4>Subscribe to unlock more features</h4>
              <Button style={{ width: "fit-content" }}>
                <a href="/tweet">Get Verified</a>
              </Button>
            </div>
          </Card>
          <Card headerText="Trends for you">
            {trendData.map((t, k) => {
              return (
                <Trend
                  key={k}
                  name={t.name}
                  category={t.category}
                  tweetVolume={t.tweetVolume}
                />
              );
            })}
            <div className="card-ls-link">
              <a href="#">show more</a>
            </div>
          </Card>
          <Card headerText="Who to follow">
            {WTFData.map((w, k) => {
              return (
                <div className="user-to-follow" key={k}>
                  <Avatar src={w.avatar} />
                  <div className="main">
                    <span className="username">
                      {w.name}
                      <span className="emoji">{w.emoji}</span>
                    </span>
                    <span className="name">{w.username}</span>
                  </div>
                  <Button className="follow-btn">follow</Button>
                </div>
              );
            })}
            <div className="card-ls-link">
              <a href="#">show more</a>
            </div>
          </Card>
          <div className="divider"></div>
          <div className="links">
            <nav aria-label="Footer" role="navigation"></nav>
          </div>
        </div>
      </Section>
    </BaseLayout>
  );
}

export default App;
