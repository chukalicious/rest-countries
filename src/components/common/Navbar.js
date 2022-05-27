import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
        <h1>Where in the World?</h1>{" "}
        <Button
          variant="text"
          sx={{ color: "#fff" }}
          startIcon={<DarkModeOutlinedIcon />}
        >
          Dark Mode (in Toolbar 2)
        </Button>{" "}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
