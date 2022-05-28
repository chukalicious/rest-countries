import "./App.css";
import Box from "@mui/material/Box";
import Navbar from "./components/common/Navbar";
import SearchGrid from "./components/homePage/SearchGrid";
import Page from "./components/homePage/Page";

function App() {
  return (
    <Box>
      <Navbar />
      <SearchGrid />
      <Page />
    </Box>
  );
}

export default App;
