import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "original_title",
    headerName: "Title",
    width: 450,
    editable: true,
  },
  {
    field: "vote_count",
    headerName: "Vote Count",
    width: 150,
    type: "number",
    editable: true,
  },
  {
    field: "release_date",
    headerName: "Release Date",
    type: "date",
    width: 150,
    editable: true,
  },
];

const EditMovies = ({ MovieData, setMovieData }) => {
  const movieData = MovieData.map((movie) => ({
    id: movie.id,
    original_title: movie.original_title,
    vote_count: movie.vote_count,
    release_date: new Date(movie.release_date),
  }));
  const [rows, setRows] = useState(movieData);

  const processRowUpdate = (newRow, oldRow) => {
    const updatedRows = rows.map((row) =>
      row.id === oldRow.id ? newRow : row
    );
    const newMovieData = MovieData.map((movie) => {
      if (movie.id === oldRow.id) {
        return {
          ...movie,
          original_title: newRow.original_title,
          vote_count: newRow.vote_count,
          release_date: new Date(newRow.release_date)
            .toISOString()
            .split("T")[0],
        };
      }
      return movie;
    });
    setRows(updatedRows);
    setMovieData(newMovieData);
    return newRow;
  };

  return (
    <>
      <Box
        sx={{
          minHeight: `calc(100vh - 64px)`,
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <Container sx={{ pt: 3, pb: 3 }}>
          <DataGrid
            sx={{ background: "white" }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10, 25]}
            processRowUpdate={processRowUpdate}
          />
        </Container>
      </Box>
    </>
  );
};

export default EditMovies;
