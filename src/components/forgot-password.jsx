import { useState } from "react";
import "../css/forgot_password.css";
import UserBase from "./user-base";


export default function ForgotPassword() {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    return (
        <>
            <UserBase>
                <div className="forgot_passward_main">
                    <div className="forgot_passward_page_base">
                        <div className="forgot_passward_form">
                            <div className="forgot_password_company_name">
                                <p>Forgot password?</p>
                                <p className="forgot_passward_details">If you've forgotten your password don't worry. Enter your email address below and we'll help your reset it'</p>
                            </div>
                            <div className="forgot_passward_form_main">
                                <form action="" className="forgot_password_submit_form">
                                    <div className="forgot_password_submit_form_label">
                                        <label className="forgot_passward_label" for="">Email <span>*</span></label>
                                        <input className="forgot_passward_input_box" type="email"
                                            placeholder="Enter Your Email"
                                            required
                                        />
                                    </div>
                                    <div className="forgot_password_btn">
                                        <button onClick={openPopup}>
                                            Send OTP
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {showPopup && (
                            <div className="popup">
                                <div className="popup_main">
                                    <div className="close">
                                        <span className="close_icon" onClick={closePopup}>&times;</span>
                                    </div>
                                    <div className="otp_varification_form">
                                        <div className="otp_varification_company_name">
                                            <p>Varify your OTP</p>
                                            <p className="otp_varification_details">
                                                we've sent a 6 digit varification code to your email address. Please enter the code to complete OTP varification
                                            </p>
                                        </div>
                                        <div className="otp_varification_form_main">
                                            <form action="" className="otp_varification_submit_form">
                                                <div className="otp_varification_submit_form_label">
                                                    <label className="otp_varification_label" for="">Varify Code<span>*</span></label>
                                                    <input className="otp_varification_input_box" type="password"
                                                        required
                                                    />
                                                </div>
                                                <div className="otp_varification_submit_form_label">
                                                    <label className="otp_varification_label" for="">New Passward<span>*</span></label>
                                                    <input className="otp_varification_input_box" type="password"
                                                        placeholder="Enter Your New Password"
                                                        required
                                                    />
                                                </div>
                                                <div className="otp_varification_submit_form_label">
                                                    <label className="otp_varification_label" for="">Confirm Password<span>*</span></label>
                                                    <input className="otp_varification_input_box" type="password"
                                                        placeholder="Confirm Your Password"
                                                        required
                                                    />
                                                </div>
                                                <div className="otp_varification_btn">
                                                    <button >
                                                        Varify & Chnage Password
                                                    </button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </UserBase>
        </>
    )
}