import "./App.css";
import Box from "@mui/material/Box";
import Navbar from "./components/common/Navbar";
import SearchGrid from "./components/homePage/SearchGrid";

function App() {
  return (
    <Box>
      <Navbar />
      <SearchGrid />
    </Box>
  );
}

export default App;
