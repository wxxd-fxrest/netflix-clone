import { useState } from "react";
import Navbar from "../components/Navbar";
import background from "../assets/home.jpg";
import movieLogo from "../assets/homeTitle.webp";
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";
import styled from "styled-components";

const Netfilx = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div>
            <Navbar isScrolled={isScrolled} />
            <div className="hero"> 
                <img src={background} alt="background" className="background-image"/>
                <div className="container">
                    <div className="logo">
                        <img src={movieLogo} alt="movieLogo" />
                    </div>
                    <div className="buttons flex">
                        <button className="flex j-center a-center">
                            <FaPlay /> Play
                        </button>
                        <button className="flex j-center a-center">
                            <AiOutlineInfoCircle /> More info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Container = styled.div``;


export default Netfilx;
