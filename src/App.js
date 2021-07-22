import { Route, Switch } from "react-router-dom";

import UrlShortenerPage from "./pages/UrlShortener";
import UrlShortenerRedirectPage from "./pages/UrlShortenerRedirect";
import UrlStatisticsDashboardPage from "./pages/UrlStatisticsDashboard";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <UrlShortenerPage />
          </Route>
          <Route path="/l/:hash" exact>
            <UrlShortenerRedirectPage />
          </Route>
          <Route path="/statistics/:hash" exact>
            <UrlStatisticsDashboardPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
