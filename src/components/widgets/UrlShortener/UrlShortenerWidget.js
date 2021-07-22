import { useState } from "react";
import classes from "./UrlShortenerWidget.module.css";

import ShortenUrlResult from "../ShortenUrlResult/ShortenUrlResult";

function UrlShortenerWidget(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [statisticsUrl, setStatisticsUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    shortenURL();
  }

  function urlInputHandler(longUrl) {
    var longUrl = longUrl.target.value;
    setLongUrl(longUrl);
  }

  function shortenURL() {
    var body = {
      long_url: longUrl,
    };

    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    setIsLoading(true);
    fetch("http://localhost:5000/short-url/", requestOptions)
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error(response);
        }
      })
      .then((data) => {
        var hash = data["url_hash"];
        setStatisticsUrl(getHostUrl() + "statistics/" + hash);
        setShortUrl(getHostUrl() + "l/" + hash);
        clearErrors();
        setIsLoading(false);
      })
      .catch((error) => {
        setError("URL Incorrectly Formatted");
        setIsLoading(false);
      });
  }

  return (
    <div>
      <div>My URL Input Box!</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="header-search">
          <span className={classes.hide}>Shorten your link</span>
        </label>
        <input
          type="url"
          id="header-search"
          placeholder="Shorten your link"
          name="s"
          onChange={urlInputHandler}
        />
        <input type="submit" value="Submit" />
      </form>
      <ShortenUrlResult
        isLoading={isLoading}
        error={error}
        shortUrl={shortUrl}
        statisticsUrl={statisticsUrl}
      />
    </div>
  );

  function clearErrors() {
    setError("");
  }

  function getHostUrl() {
    var url = [
      window.location.protocol,
      "//",
      window.location.host,
      window.location.pathname,
    ].join("");

    return url;
  }
}

export default UrlShortenerWidget;
