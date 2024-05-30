import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";
import "../css/login_page.css";
import {
    currentUser,
    generateToken,
    loginUser,
    setUser
} from "../services/user-service";
import Userbase from "./user-base";

const Login = ({ onBack }) => {
    const navigate = useNavigate();

    const [loginDetail, setLoginDetail] = useState({
        username: "",
        password: "",
    });

    const handleChanges = (event, property) => {
        setLoginDetail({ ...loginDetail, [property]: event.target.value });
    };

    const [visible, setVisible] = useState(false);
    const loginFormSubmit = (event) => {
        event.preventDefault();
        setVisible(false);
        if (
            loginDetail.username.trim() === "" ||
            loginDetail.password.trim() === ""
        ) {
            setVisible(true);
            return;
        }
        generateToken(loginDetail)
            .then((jwtTokenData) => {
                console.log(jwtTokenData);

                loginUser(jwtTokenData.token);
                const token = "Bearer " + jwtTokenData.token;
                currentUser(token).then((user) => {
                    console.log(user);
                    setUser(user);

                    if (user.role === "USER") {
                        console.log("role USER");
                        navigate("/user/dashboard");
                    } else if (
                        user.role === "TRUSTEE" &&
                        user.firstlevelapproval === "true"
                    ) {
                        console.log("role TRUSTEE");
                        navigate("/trustee/dashboard");
                    } else {
                        console.log("role beneficiry");
                        navigate("/beneficiary/dashboard");
                    }


                });
            })
            .catch((error) => {
                setVisible(true);
                console.log(error);
            });
    };
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return (

        <>
            <Userbase>
                <div className="login_main">
                    <div className="login_page_base">
                        <div className="loging_page_design">
                            <div className="login_page_image">
                                <img src="/image/login_page/loging_page.svg" alt="company_name" />
                            </div>
                        </div>
                        <div className="loging_form">
                            <div className="company_name">
                                <p>Company name</p>
                            </div>
                            <div className="login_submit_form">
                                <Alert
                                    className="text-center"
                                    color="danger"
                                    isOpen={visible}
                                >
                                    Invalid username or password !!
                                </Alert>
                                <form onSubmit={loginFormSubmit} className="submit_form">
                                    <div className="submit_form_label">
                                        <label className="login_label" for="">Username <span>*</span></label>
                                        <input className="login_input_box" type="text"
                                            placeholder="Unername"
                                            required
                                            id="username"
                                            onChange={(e) => handleChanges(e, "username")}
                                        />
                                    </div>
                                    <div className="submit_form_label_password">
                                        <label className="login_label" for="">Password <span>*</span></label>
                                        <div style={{ display: "flex", width: "100%" }}>
                                            <input className="login_input_box"
                                                placeholder="password"
                                                required
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                                onChange={(e) => handleChanges(e, "password")}
                                            />

                                            <button
                                                className="toggle_password_button"
                                                type="button"
                                                onClick={handleTogglePassword}
                                            >
                                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="forgot_pass_page">
                                        <p><Link className="page_link" to="/forgot-password">Forgot password?</Link></p>
                                    </div>
                                    <div className="signin_btn">
                                        <button>
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                                <div className="register_page">
                                    <p>are you new? <Link className="page_link" to="/register">Create an Account</Link></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Userbase>
        </>
    );
};
export default Login;
