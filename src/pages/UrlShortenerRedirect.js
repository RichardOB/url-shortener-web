import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UrlShortenerRedirectPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  let { hash } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/short-url/" + hash)
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error(response);
        }
      })
      .then((data) => {
        var url = data["url"];
        console.log(url);

        if (url) {
          window.location.href = url;
        } else {
          setError("URL Not Found");
          setIsLoading(false);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        setError("URL Not Found");
        setIsLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div>
        <div className="row page-header">
          <div className="col-lg-6">
            <h1>{error}</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="row page-header">
          <div className="col-lg-6">
            <h1>Redirecting...</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default UrlShortenerRedirectPage;
