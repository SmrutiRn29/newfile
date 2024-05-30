import Userbase from "../../user-base";
import "./../../../css/admin-pages/doctor/add-doctor.css";



export default function Adddoctor() {
    return (
        <>
            <Userbase>
                <div className="add_doctor">
                    <div className="add_doctor_base">
                        <div className="add_doctor_base">
                            <div className="add_doctor_heding">
                                <p>
                                    Add doctor
                                </p>
                            </div>
                            <div className="add_doctor_submit_card">
                                <form action="" className="add_doctor_submit_form" >
                                    <div className="add_doctor_form">
                                        <div className="add_doctor_submit_index">
                                            <div className="add_doctor_submit_input">
                                                <label for="">First Name <span>*</span></label>
                                                <input type="text"
                                                    placeholder="First Name"
                                                    required
                                                />
                                            </div>
                                            <div className="add_doctor_submit_input">
                                                <label for="">Last Name <span>*</span></label>
                                                <input type="text"
                                                    placeholder="Last Name"
                                                    required
                                                />
                                            </div>
                                            <div className="add_doctor_submit_input">
                                                <label for="">Email <span>*</span></label>
                                                <input type="email"
                                                    placeholder="Enter your Email"
                                                    required
                                                />
                                            </div>
                                            <div className="add_doctor_submit_input">
                                                <label for="">Date of birth <span>*</span></label>
                                                <input type="date"
                                                    placeholder="Date of Birth"
                                                    required
                                                />
                                            </div>
                                            <div className="add_doctor_submit_input">
                                                <label for="gender">Select Gender:</label>
                                                <select id="gender" name="gender">
                                                    <option value="">Select</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div className="add_doctor_submit_input">
                                                <label for="">Commission <span>*</span></label>
                                                <input type="number"
                                                    placeholder="Commission"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="add_doctor_submit_index">
                                            <div className="add_doctor_submit_input">
                                                <label for="">Specialization <span>*</span></label>
                                                <input type="text"
                                                    placeholder="Specialization"
                                                    required
                                                />
                                            </div>
                                            <div className="add_doctor_submit_input">
                                                <label for="">Remark <span>*</span></label>
                                                <textarea
                                                    placeholder="Enter Your Description"
                                                    required
                                                />
                                            </div>
                                            <div className="add_doctor_submit_input">
                                                <label for="">Address <span>*</span></label>
                                                <textarea
                                                    placeholder="Enter Your Address "
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add_doctor_submit">
                                        <button className="add_doctor_btn">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Userbase>
        </>
    );
}
