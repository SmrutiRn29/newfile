import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserBase from "../components/user-base";
import "./../css/homepage.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export const Slide1 = () => (
    <div className="item-slider relative slide-red"
        data-aos="fade"
        data-aos-ease="ease-out"
        data-aos-duration="1000"
    >
        <div className="overlay"></div>
        <div className="container">
            <div className="row fullscreen justify-content-center align-items-center">
                <div className="col-md-10 col-12">
                    <div className="banner-content text-center">
                        <h4 className="heading_text"
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="700"
                        >
                            Discover the Colorful World
                        </h4>
                        <div className="text-uppercase text-white title_text"
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                        >
                            New Adventure
                        </div>
                        <p className="base_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                        <div className="button_box">
                            <div className="homepage_button">
                                <a className="link-no-underline" href="/login">Login here</a><br />
                            </div>
                            <div className="homepage_button">
                                <a className="link-no-underline" href="/user/dashboard">Dashboard</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const Slide2 = () => (
    <div className="item-slider relative slide-green"
        data-aos="fade"
        data-aos-easing="ease-out"
        data-aos-duration="1000"
    >
        <div className="overlay"></div>
        <div className="container">
            <div className="row fullscreen justify-content-center align-items-center">
                <div className="col-md-10 col-12">
                    <div className="banner-content text-center">
                        <h4 className="heading_text"
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="700">
                            Discover the Colorful World
                        </h4>
                        <div className="text-uppercase text-white title_text"
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                        >
                            New Trip
                        </div>
                        <p className="base_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                        <div className="button_box">
                            <div className="homepage_button">
                                <a className="link-no-underline" href="/login">Login here</a><br />
                            </div>
                            <div className="homepage_button">
                                <a className="link-no-underline" href="/user/dashboard">Dashboard</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const Slide3 = () => (
    <div className="item-slider relative slide-yellow"
        data-aos="fade"
        data-aos-easing="ease-out"
        data-aos-duration="1000"
    >
        <div className="overlay"></div>
        <div className="container">
            <div className="row fullscreen justify-content-center align-items-center">
                <div className="col-md-10 col-12">
                    <div className="banner-content text-center">
                        <h4 className="heading_text"
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="700">
                            Discover the Colorful World
                        </h4>
                        <div className="text-uppercase text-white title_text"
                            data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                        >
                            New Experience
                        </div>
                        <p className="base_text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        </p>
                        <div className="button_box">
                            <div className="homepage_button">
                                <a className="link-no-underline" href="/login">Login here</a><br />
                            </div>
                            <div className="homepage_button">
                                <a className="link-no-underline" href="/user/dashboard">Dashboard</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
