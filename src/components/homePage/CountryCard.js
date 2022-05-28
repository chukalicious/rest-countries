import { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

const CountryCard = (props) => {
  const [country] = useState(props.data);
  console.log("props in data", country);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${country.name}`}
          image={country.flags.svg}
        ></CardMedia>
        <CardContent>
          <Typography>{country.name}</Typography>
          <Typography>{country.population}</Typography>
          <Typography>{country.region}</Typography>
          <Typography>{country.capital}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
