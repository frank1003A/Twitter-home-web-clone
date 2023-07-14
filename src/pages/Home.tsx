import { useState } from "react";

// Components
import Avatar from "components/core/Avatar/Avatar";
import SearchInput from "components/core/Input/SearchInput";
import HamburgerMenu from "components/core/Navigation/HamburgerMenu";
import Tweet, { TweetProps } from "components/core/Tweet/Tweet";
import TweetBar from "components/core/Tweet/TweetBar";
import Button from "components/core/buttons/Button";
import Card from "components/core/cards/Card";
import Trend from "components/core/cards/Trend";
import Section from "components/core/lists/Section";
import BaseLayout from "components/layout/BaseLayout";
import MessageBar from "components/ui/MessageBar";
import TopBar from "components/ui/TopBar";

// Data
import Retweet from "components/core/Tweet/Retweet";
import retweetData from "data/retweet.json";
import trendData from "data/trends.json";
import tweetData from "data/tweets.json";
import WTFData from "data/wtf.json";

const Home = () => {
  // mobile responsive hamburger menu component state
  const [toggleHamMenu, setToggleHamMenu] = useState<boolean>(false);

  return (
    <BaseLayout>
      <Section className="home-tweets">
        <TopBar
          title="Home"
          toggleHamMenu={() => setToggleHamMenu(!toggleHamMenu)}
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
        <TweetBar />
        <Tweet
          hasControls
          hasMenu={false}
          avatar="https://pbs.twimg.com/profile_images/1601498696629293056/wKIezqxO_400x400.jpg"
          username="Frank Ezene"
          name="FrankEzene"
          time="1m"
          status="gold"
          replies={80}
          retweets={50}
          likes={200}
          views={300}
          content={
            <>
              👋 Hey everyone! <br />
              Welcome to my Twitter web homepage clone! As a passionate software
              / web developer, I'm excited to share my thoughts and experiences
              in the tech world. Thank you for checking it out and joining me on
              this journey! <br /> Let's connect and learn together.
              <br />
              <span className="hashtags">
                <a href="/#WebDevelopment">#WebDevelopment</a>{" "}
                <a href="/#SoftwareEngineering">#SoftwareEngineering</a>
              </span>
            </>
          }
        />
        {retweetData.map((twt) => {
          return (
            <Tweet
              hasControls
              hasMenu
              key={`${twt.name}_${twt.username}`}
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
        })}
        <Retweet
          tweet={tweetData[1] as TweetProps}
          retweetContent={tweetData[7] as TweetProps}
        />
        {tweetData.map((twt) => {
          return (
            <Tweet
              hasControls
              hasMenu
              key={`${twt.name}_${twt.username}`}
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
        })}
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
              <Button
                id="ver-btn"
                style={{
                  width: "fit-content",
                }}
              >
                <a href="/tweet">Get Verified</a>
              </Button>
            </div>
          </Card>
          <Card headerText="Trends for you">
            {trendData.map((t, k) => {
              return (
                <Trend
                  key={t.name}
                  name={t.name}
                  category={t.category}
                  tweetVolume={t.tweetVolume}
                />
              );
            })}
            <div className="card-ls-link">
              <a href="/tends/more">show more</a>
            </div>
          </Card>
          <Card headerText="Who to follow">
            {WTFData.map((w, k) => {
              return (
                <div className="user-to-follow" key={w.name}>
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
              <a href="/wtf/more">show more</a>
            </div>
          </Card>
          <div className="links">
            <nav aria-label="Footer" role="navigation">
              <a href="/tos">Terms of service</a>
              <a href="/pp">Privacy Policy</a>
              <a href="/cp">Cookie Policy</a>
              <br />
              <a href="/acc">Accessibility</a>
              <a href="/adds/info">Ads info</a>
              <span className="more">
                <span className="text">more </span>
                <span className="elli">&#8230;</span>
              </span>
              <span className="copyright">&#169; 2023 X CORP</span>
            </nav>
          </div>

          <MessageBar>{/** */}</MessageBar>
        </div>
      </Section>
      <HamburgerMenu
        toggle={toggleHamMenu}
        onClose={() => setToggleHamMenu(false)}
      />
    </BaseLayout>
  );
};

export default Home;
