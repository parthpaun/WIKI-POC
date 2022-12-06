import { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./../Components/searchInput";
import LogoutButton from "../Components/logoutButton";
import Widget from "../Components/widget/widget";
import LineChart from "../Components/lineChart";

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchWikipedia = async () => {
      try {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: searchTerm,
          },
        });
        if (searchTerm) {
          setSearchResults(data.query.search);
        }
      } catch (e) {
        console.log(e);
      }
    };
    if (searchTerm) {
      searchWikipedia();
    }
  }, [searchTerm]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        setSearchTerm(input);
      } else {
        setSearchResults([]);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <div className="App">
      <LogoutButton />
      <div className="widgetContainer">
        <Widget title={"Past 7 Days"} count={100} />
        <Widget title={"Past 1 Day"} count={50} />
        <Widget title={"Past 1 hour"} count={20} />
      </div>
      <div className="chartCointainer">
          <LineChart />
      </div>
      <div className="searchContainer">
        <h2>Wiki Search</h2>
        <SearchInput value={input} onSearch={(value) => setInput(value)} />
        <div className="resultsContainer">
          {searchResults.map((result) => (
            <div key={result.pageid} className="results">
              <a
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                style={{ fontWeight: "bold" }}
                target="_blank"
              >
                {result.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
