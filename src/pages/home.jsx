import React, { useEffect, useState } from "react";
import { faAward, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './../css/homepage.css'


const images = [
    process.env.PUBLIC_URL + '/image/homepage/test1.webp',
    process.env.PUBLIC_URL + '/image/homepage/test2.webp',
    process.env.PUBLIC_URL + '/image/homepage/test3.webp',
    process.env.PUBLIC_URL + '/image/homepage/test4.webp',
    process.env.PUBLIC_URL + '/image/homepage/test5.webp',
    process.env.PUBLIC_URL + '/image/homepage/test6.webp'
  ];
  
  export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
    return (
        <>
            <div className="homepage_main">
                <div className="aboutus_page">
                    <div className="aboutus_page_main">
                        <div className="aboutus_image_card">
                            <img
                                className="aboutus_image"
                                src={images[currentImageIndex]}
                                alt="about us"
                            />
                        </div>
                        <div className="aboutus_details">
                            <div className="about_details_rap">
                                <h1 className="aboutus_year">
                                    25
                                </h1>
                                <p className="aboutus_experience">
                                    Year of Experience
                                </p>
                                <h4 className="aboutus_heading">
                                    We Make Your Home Like A Garden
                                </h4>
                                <p className="aboutus_paragraph">
                                    Tempor erat elitr rebum at clita. Diam dolor diam
                                    ipsum sit. Aliqu diam amet diam et eos. Clita erat
                                    ipsum et lorem et sit, sed stet lorem sit clita duo
                                    justo magna dolore erat amet
                                </p>
                            </div>

                            <div className="about_details_last_rap">
                                <a className="aboutus_explore" href="/user/dashboard">
                                    Register
                                </a>
                                <a className="aboutus_explore" href="/login">
                                    Login
                                </a>
                            </div>
                        </div>
                        <div className="aboutus_card">
                            <div
                                className="aboutus_details_card">
                                <FontAwesomeIcon
                                    className="aboutus_details_icon"
                                    icon={faAward}
                                    style={{ color: "#6195fe" }}
                                />
                                <h3 className="aboutus_details_heading">
                                    Award Winning
                                </h3>
                                <p className="aboutus_details_paragraph">
                                    Clita erat ipsum et lorem et sit, sed stet lorem
                                    sit clita duo justo magna
                                </p>
                            </div>
                            <div
                                className="aboutus_details_card">
                                <FontAwesomeIcon
                                    className="aboutus_details_icon"
                                    icon={faUserGroup}
                                    style={{ color: "#6195fe" }}
                                />
                                <h3 className="aboutus_details_heading">
                                    Dedicated Team
                                </h3>
                                <p className="aboutus_details_paragraph">
                                    Clita erat ipsum et lorem et sit, sed stet lorem
                                    sit clita duo justo magna
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
