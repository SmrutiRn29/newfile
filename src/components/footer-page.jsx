import "./../css/footerpage.css";

export default function Footer() {
    return (
        <>
            <div className="footer_base">
                <div className="footer_page">
                    <div className="footer_details">
                        <div className="footer_card">
                            <div className="footer_card_heading">
                                <p>Lets talk about</p>
                            </div>
                            <div className="footer_page_learnmore">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                            <div>
                                <button className="footer_button"> 
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="footer_details">
                        <div className="footer_card">
                            <span className="footer_card_heading">Links</span>
                            <ul className="footer_links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Projects</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_details">
                        <div className="footer_card">
                            <span className="footer_card_heading">Services</span>
                            <ul className="footer_links">
                                <li><a href="/">Hyper Automation</a></li>
                                <li><a href="/">Application Services</a></li>
                                <li><a href="/">Integration Service</a></li>
                                <li><a href="/">Data analytics</a></li>
                                <li><a href="/">Digital Consulting</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_details">
                        <div className="footer_card">
                            <span className="footer_card_heading">Have a Questions?</span>
                            <ul className="footer_links">
                                <li style={{marginBottom:"10px"}}>3rd floor, <br /> survey No. 123/1 ITPL Main Road,<br /> AECS Layout, <br />Brookfield,Bangalore,<br /> Karnataka - 560037</li>
                                <li><a href="mailto:pravaskumar45@gmail.com">pravaskumar45@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright_section">
                    <p>Copyright &copy; 2024 "company name ". All rights reserved.</p>
                </div>
            </div>
        </>
    );
}