import { React, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./component-style.css";

export function UrlItem(props) {
  let [isCopied, setIsCopied] = useState(false);

  function handleCopy(link) {
    navigator.clipboard.writeText(link).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 990);
    });
  }
  // console.log(props);
  let url = props.url;
  console.log(url);

  let urls = (
    <div className="shortened-links">
      <div>{url.longUrl}</div>
      <div>
        {url.shortUrl}
        <button
          onClick={() => {
            handleCopy(url.fullUrl);
          }}
          className="copyBtn"
          style={{ backgroundColor: isCopied ? "#70CAD1" : "#0070d2" }}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );

  return urls;
}
