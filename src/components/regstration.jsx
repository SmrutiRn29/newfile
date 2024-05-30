import { Link } from "react-router-dom";
import "../css/registration.css";
import UserBase from "./user-base";


export default function Registration() {
    return (
        <>
            <UserBase>
                <div className="registration_main">
                    <div className="registration_page_base">
                        <div className="registration_form_left">
                            <div className="registration_page_company_name">
                                <p>General information</p>
                            </div>
                            <div className="registration_submit_form">
                                <form action="" className="registration_submit_form">
                                    <div className="registration_submit_form_label">
                                        <label className="registration_label" for="">First Name <span>*</span></label>
                                        <input className="registration_input_box" type="text"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className="registration_submit_form_label">
                                        <label className="registration_label" for="">Last Name <span>*</span></label>
                                        <input className="registration_input_box" type="text"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                    <div className="registration_submit_form_label">
                                        <label className="registration_label" for="">Email <span>*</span></label>
                                        <input className="registration_input_box" type="email"
                                            placeholder="Enter your Email"
                                            required
                                        />
                                    </div>
                                    <div className="registration_submit_form_label">
                                        <label className="registration_label" for="">Username <span>*</span></label>
                                        <input className="registration_input_box" type="text"
                                            placeholder="Unername"
                                            required
                                        />
                                    </div>
                                    <div className="registration_submit_form_label">
                                        <label className="registration_label" for="">Password <span>*</span></label>
                                        <input className="registration_input_box" type="password"
                                            placeholder="Password"
                                            required
                                        />
                                    </div>
                                    <div className="registration_page">
                                        <input type="checkbox" value="true" />
                                        <p>i do accept the <Link className="registration_page_link" to="/terms-and-condition">Terms and Conditions</Link> of your site</p>
                                    </div>

                                    <div className="registration_btn">
                                        <button>
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </UserBase>
        </>
    )
}