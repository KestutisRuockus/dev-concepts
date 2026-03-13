import Layout from "./components/Layout";
import Router from "./router/Router";
import Route from "./router/Route";
import Routing from "./pages/routing/Routing";
import A11y from "./pages/a11y/A11y";
import Lifecycle from "./pages/lifecycle/Lifecycle";

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/routing" component={Routing} />
        <Route path="/a11y" component={A11y} />
        <Route path="/lifecycle" component={Lifecycle} />
      </Layout>
    </Router>
  );
}

export default App;
