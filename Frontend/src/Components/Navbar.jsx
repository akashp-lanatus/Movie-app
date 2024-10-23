import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Link, useLocation } from "react-router-dom";
import { MovieData } from "../MockData";

const SortWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export default function Navbar({ setMovieData, movieData }) {
  const location = useLocation();
  const containsId =
    location.pathname.includes("movie") || location.pathname.includes("edit");
  const [searchInput, setSearchInput] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  const handleInput = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value == "") {
      setMovieData(MovieData);
    } else {
      const filteredMovies = movieData.filter(
        (movie) =>
          movie.original_title
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
          movie.overview.toLowerCase().includes(searchInput.toLowerCase()) ||
          movie.release_date.split("-").indexOf(searchInput) !== -1
      );
      setMovieData(filteredMovies);
    }
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sortMovies = [...MovieData].sort((a, b) => {
      return newOrder === "asc"
        ? a.original_title.localeCompare(b.original_title)
        : b.original_title.localeCompare(a.original_title);
    });

    setMovieData(sortMovies);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          height: "64px",
          position: "sticky",
          zIndex: "555",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgb(37, 64, 97)",
          color: "white",
          fontWeight: "600",
          px: { xs: "5px", sm: "10px", md: "15px", lg: "20px" },

          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            display: "block",
            textDecoration: "none",
            fontSize: { xs: "17px", sm: "20px" },
            color: "white",
          }}
        >
          MovieDB
        </Typography>
        {!containsId ? (
          <Box sx={{ display: "block" }}>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "10px", sm: "20px" },
                alignItems: "center",
              }}
            >
              <Typography
                component={Link}
                to="/edit"
                sx={{
                  textDecoration: "none",
                  fontSize: { xs: "17px", sm: "20px" },
                  color: "white",
                }}
              >
                Edit
              </Typography>
              <SortWrapper onClick={toggleSortOrder}>
                <Typography
                  sx={{
                    textDecoration: "none",
                    fontSize: { xs: "17px", sm: "20px" },
                    color: "white",
                    background: "none",
                  }}
                >
                  Sort
                </Typography>
                {sortOrder === "desc" ? (
                  <ArrowUpwardIcon
                    sx={{ fontSize: { xs: "17px", sm: "20px" } }}
                  ></ArrowUpwardIcon>
                ) : (
                  <ArrowDownwardIcon
                    sx={{ fontSize: { xs: "17px", sm: "20px" } }}
                  ></ArrowDownwardIcon>
                )}
              </SortWrapper>
              <div>
                <input
                  value={searchInput}
                  placeholder="Search.."
                  type="search"
                  onChange={handleInput}
                  style={{
                    border: "1px solid white",
                    borderRadius: "5px",
                    outline: "none",
                    color: "white",
                    height: "35px",
                    padding: "2px 10px",
                    background: "rgb(37, 64, 97)",
                    fontSize: "15px",
                    width: "100%",
                    flexGrow: 1,
                  }}
                />
              </div>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
