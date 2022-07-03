import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import { Box, CssBaseline, Grid, Pagination, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Singlecard from "../components/Singlecard";
import { exerciseOptions } from "../utils/fetchApi";

export default function Home(props) {
  const { data } = props;
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = data.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event,value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} mt="50px" ml="50px">
        <Stack
          direction="row"
          sx={{ gap: { lg: "50px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentExercises.map((exercise, id) => (
            <Grid item md={3} key={exercise.name}>
              <Singlecard key={id} exercise={exercise} />
            </Grid>
          ))}
        </Stack>
      </Box>
      <Pagination
      defaultPage={1}
      page={currentPage}
      onChange={paginate}
      size="large"
      shape="rounded"
      showFirstButton showLastButton
      sx={{background:"#333",margin:"50px",borderRadius:"8px",paddingLeft:"250px"}}
      count={Math.ceil(data.length / exercisesPerPage)}

      />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises`,
      exerciseOptions
    );

    const data = await res.json();
    console.log(data);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
