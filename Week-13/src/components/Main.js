import { React, useState } from "react";
import "./component-style.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { UrlItem } from "./UrlItem.js";

export function Main() {
  // let [shortUrl, setShortUrl] = useState("");
  let [urls, setUrls] = useState([]);
  // let [longUrl, setLongUrl] = useState("");
  async function callShortenApi(event) {
    const corsProxy =
      "https://cors-anywhere.herokuapp.com/https://api.shrtco.de/v2/shorten?url=";
    event.preventDefault();
    let formData = new FormData(event.target);
    let url = Object.fromEntries(formData.entries());
    let longUrl = corsProxy + encodeURIComponent(url.longUrl);
    console.log(longUrl);
    const headers = { "Content-Type": "application/json" };
    let response = await fetch(longUrl, { headers });
    let data = await response.json();
    debugger;
    // console.log(data);
    let shortenedUrl = {
      longUrl: url.longUrl,
      shortUrl: data.result.short_link,
      fullUrl: data.result.full_short_link
    };
    setUrls([...urls, shortenedUrl]);
    // console.log(`This is ${urls}`);
  }

  return (
    <div className="main">
      <div className="hero">
        <h1>shrtn ur urls.</h1>
        <div></div>
        {/* <img src="/media/images/hero.png"></img> */}
      </div>
      <div className="card">
        <form className="urlForm" onSubmit={callShortenApi}>
          <div style={{ position: "relative", display: "flex", width: "100%" }}>
            <input
              required
              name="longUrl"
              placeholder="Paste your long URL here"
              type="url"
              style={{ flex: "1", paddingRight: "60px" }}
            ></input>
            <button
              type="submit"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0
              }}
            >
              Shorten
            </button>
          </div>
        </form>
      </div>
      <div
        className="card"
        style={{ display: urls.length === 0 ? "none" : "flex" }}
      >
        <div className="links-list">
          {urls.map((url) => {
            return <UrlItem url={url} /> || <Skeleton />;
          })}
        </div>
        {/* <UrlItem lxn={urls} /> */}
      </div>
    </div>
  );
}
