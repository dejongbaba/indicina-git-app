import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import { CONSTANTS } from "./utils/utils";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_GRAPH_QL_URI,
  headers: {
    Authorization:
      `Bearer ${sessionStorage.getItem(CONSTANTS.ACCESS_TOKEN)}` ?? "",
  },
  // link: authLink,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
