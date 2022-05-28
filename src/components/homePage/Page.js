import { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import CountryCard from "./CountryCard";

const Page = () => {
  const [globeData, setGlobeData] = useState([]);
  console.log("globeData: ", globeData);
  //   const [regions, setRegions] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setGlobeData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Paper>
      {globeData.map((country, i) => (
        <CountryCard key={i} data={country} />
      ))}
    </Paper>
  );
};

export default Page;
