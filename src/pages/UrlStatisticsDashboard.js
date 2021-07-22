import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UrlStatisticsDashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [usageCount, setUsageCount] = useState("");
  const [lastVisit, setLastVisit] = useState("");

  let { hash } = useParams();

  function getLastVisit() {
    if (lastVisit) {
      return lastVisit;
    }
    return "Never";
  }

  useEffect(() => {
    fetch("http://localhost:5000/stats/" + hash)
      .then((response) => {
        if (response.ok) return response.json();
        else {
          throw new Error(response);
        }
      })
      .then((data) => {
        var long_url = data["long_url"];
        var usage_count = data["usage_count"];
        var last_visit = data["last_visit"];

        if (long_url) {
          setLongUrl(long_url);
          setUsageCount(usage_count);
          setLastVisit(last_visit);
          setIsLoading(false);
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
  } else if (isLoading) {
    return (
      <div>
        <div className="row page-header">
          <div className="col-lg-6">
            <h1>Loading..</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="row page-header">
          <div className="col-lg-6">
            <h2>Original URL: {longUrl}</h2>
            <h2>Times link was used: {usageCount}</h2>
            <h2>Last Used: {getLastVisit()}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default UrlStatisticsDashboardPage;
