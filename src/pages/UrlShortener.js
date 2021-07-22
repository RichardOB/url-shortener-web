import UrlShortenerWidget from "../components/widgets/UrlShortener/UrlShortenerWidget";

function UrlShortenerPage() {
  return (
    <div>
      <div className="row page-header">
        <div className="col-lg-6">
          <h1>Url Shortener</h1>
          <h2>Welcome to the best looking Url Shortener App around...</h2>
          <UrlShortenerWidget />
        </div>
      </div>
    </div>
  );
}

export default UrlShortenerPage;
