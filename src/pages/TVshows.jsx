import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import { fetchMovies, getGenres } from "../store";
import { auth } from "../utils/firebase";

const TVshows = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!genres.length) dispatch(getGenres());
    }, [genres, dispatch]);

    useEffect(() => {
        if (genresLoaded) {
        dispatch(fetchMovies({ genres, type: "tv" }));
        }
    }, [genresLoaded, dispatch, genres]);

    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(undefined);

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) setUser(currentUser.uid);
        else navigate("/login");
    });

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return(
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className="data">
                <SelectGenre genres={genres} type="tv" />
                {movies.length ? (
                <>
                    <Slider movies={movies} />
                </>
                ) : (
                <h1 className="not-available">
                    No TV Shows avaialble for the selected genre. Please select a
                    different genre.
                </h1>
                )}
            </div>
        </Container>
    )
};

const Container = styled.div`
    .data {
        margin-top: 8rem;
        .not-available {
            text-align: center;
            margin-top: 4rem;
        }
    }
`;

export default TVshows;

