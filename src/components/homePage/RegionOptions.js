import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SearchField() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="filter by region"
          onChange={handleChange}
        >
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="America">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
