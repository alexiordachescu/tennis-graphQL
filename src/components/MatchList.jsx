import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";

import {
  GET_ALL_MATCHES,
  GET_ALL_MATCHES_AND_PLAYERS,
} from "../graphql/queries";
import TennisMatch from "./TennisMatch";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2em",
  },
}));

function MatchList() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_ALL_MATCHES);
  console.log("object", data);
  if (loading) return "Loading...";
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );

  return (
    <Container className={classes.root}>
      <Typography variant="h2">Live Matches</Typography>
      {data.ongoing.map((match) => {
        return <TennisMatch match={match} />;
      })}
      <Typography variant="h2">Finished Matches</Typography>

      <Box>
        {data.finished.map((match) => {
          return <TennisMatch match={match} />;
        })}
      </Box>
    </Container>
  );
}

export default MatchList;
