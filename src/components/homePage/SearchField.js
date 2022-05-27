import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export default function SearchField() {
  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount">Enter Country</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        placeholder="Search for a country..."
        startAdornment={
          <InputAdornment position="start">
            <SearchSharpIcon />{" "}
          </InputAdornment>
        }
        label="enter country"
      />
    </FormControl>
  );
}
