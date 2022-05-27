import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import RegionOptions from "./RegionOptions";
import SearchField from "./SearchField";

const SearchGrid = () => {
  return (
    <Grid
      container
      sx={{
        //   border: "yellow solid 3px",
        justifyContent: "space-between",
      }}
    >
      <Grid
        item
        xs={12}
        lg={4}
        //   sx={{ border: "red solid 2px" }}
      >
        <SearchField />
      </Grid>
      <Grid
        item
        xs={6}
        lg={2}
        //   sx={{ border: "green solid 2px" }}
      >
        <RegionOptions />
      </Grid>
    </Grid>
  );
};

export default SearchGrid;
