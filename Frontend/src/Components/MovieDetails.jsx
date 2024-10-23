import React from "react";
import { Box, CardMedia, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";

const MovieDetails = ({ MovieData }) => {
  const { id } = useParams();
  const movie = MovieData.find((movie) => movie.id === parseInt(id));
  return (
    <>
      <Box
        sx={{
          minHeight: `calc(100vh - 64px)`,
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <Container sx={{ pt: 3, pb: 3, color: "white" }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <CardMedia
                component="img"
                sx={{
                  display: "block",
                  margin: "0 auto",
                  height: "400px",
                  maxWidth: "300px",
                  objectFit: "cover",
                }}
                image={movie.poster_path}
                alt={"Late Night with the Devil"}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography sx={{ fontSize: { xs: "18px", sm: "24px" }, mb: 2 }}>
                {movie.original_title}
              </Typography>
              <Typography sx={{ fontSize: { xs: "15px", sm: "20px" }, mb: 1 }}>
                Poularity: {movie.popularity}
              </Typography>
              <Typography sx={{ fontSize: { xs: "15px", sm: "20px" }, mb: 1 }}>
                Released On: {movie.release_date}
              </Typography>
              <Typography sx={{ fontSize: { xs: "15px", sm: "20px" }, mb: 3 }}>
                Vote Count: {movie.vote_count}
              </Typography>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, mb: 3 }}>
                {movie.overview}
              </Typography>

              <Button
                sx={{ width: "100%", display: "flex", alignItems: "center" }}
                variant="contained"
                startIcon={<YouTubeIcon />}
                onClick={() => window.open(`${movie.trailer}`, "_blank")}
              >
                Watch Trailer
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MovieDetails;
