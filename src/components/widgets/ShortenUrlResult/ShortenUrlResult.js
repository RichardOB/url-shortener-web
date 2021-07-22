function ShortenUrlResult(props) {
  if (props.error) {
    return (
      <div>
        <h2>{props.error}</h2>
      </div>
    );
  } else if (props.shortUrl) {
    return (
      <div>
        <h2>
          Your SHort URL:
          <a href={props.shortUrl}>{props.shortUrl}</a>
        </h2>
        <h2>
          Want to see statistics? Visit{" "}
          <a href={props.statisticsUrl}>{props.statisticsUrl}</a>
        </h2>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ShortenUrlResult;
