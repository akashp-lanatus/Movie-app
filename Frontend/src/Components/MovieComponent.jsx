import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const MovieComponent = ({ MovieData }) => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "black",
          width: "100%",
        }}
      >
        <Container
          sx={{
            backgroundColor: "black",
            pt: 3,
            pb: 3,
          }}
        >
          <Grid container spacing={3}>
            {MovieData.length > 0 &&
              MovieData?.map((movie, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                  <Card
                    sx={{
                      cursor: "pointer",
                      height: "100%",
                      p: 2,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Link
                      to={`/movie/${movie.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontWeight: "600",
                          textAlign: "center",
                          mb: 1,
                        }}
                      >
                        {movie.release_date}
                      </Typography>
                      <CardMedia
                        component="img"
                        sx={{
                          display: "block",
                          margin: "0 auto",
                          height: "200px",
                          maxWidth: "170px",
                          objectFit: "cover",
                        }}
                        image={movie.poster_path}
                        alt={"Late Night with the Devil"}
                      />
                      <CardContent>
                        <Typography
                          variant="body1"
                          sx={{ textAlign: "center", mb: 1, fontWeight: 400 }}
                          component="div"
                        >
                          {movie.original_title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {movie?.overview?.length < 55
                            ? movie.overview
                            : movie.overview.substring(0, 55) + "..."}
                        </Typography>
                      </CardContent>
                    </Link>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MovieComponent;
