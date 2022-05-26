import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <p>This is the Navbar</p>{" "}
      <Toolbar>
        <p>This is the Toolbar (all items of the navbar will go in here)</p>{" "}
        <Button
          variant="text"
          color="secondary"
          startIcon={<DarkModeOutlinedIcon />}
        >
          Dark Mode (in Toolbar 2)
        </Button>{" "}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
