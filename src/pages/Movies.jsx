import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import { fetchMovies, getGenres } from "../store";
import { auth } from "../utils/firebase";

const Movies = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(undefined);

    const navigate = useNavigate();
    const genres = useSelector((state) => state.netflix.genres);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const movies = useSelector((state) => state.netflix.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]) ;

    useEffect(() => {
        if (genresLoaded) {
          dispatch(fetchMovies({ genres, type: "movie" }));
        }
      }, [genresLoaded, dispatch, genres]);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) setUser(currentUser.uid);
        else navigate("/login");
    });
  
    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>
            <div className="data">
                <SelectGenre genres={genres} type="movie" />
                {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
            </div>
        </Container>
    )
};

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;

export default Movies;