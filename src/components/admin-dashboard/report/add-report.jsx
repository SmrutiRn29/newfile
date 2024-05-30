import Userbase from "../../user-base";
import "./../../../css/report-page/add-report.css";

export default function AddReport() {
    return (
        <>
            <Userbase>
                <div className="add_report">
                    <div className="add_report_base">
                        <div className="add_report_heding">
                            <p>
                                Add Report
                            </p>
                        </div>
                        <div className="add_report_submit_card">
                            <form action="" className="add_report_submit_form">
                                <div className="add_report_form">
                                    <div className="add_report_submit_index">
                                        <div className="add_report_submit_input">
                                            <label htmlFor="">Select Test</label>
                                            <select id="report" name="report">
                                                <option value="">Select Test</option>
                                                <option value="Test-1">Test-1</option>
                                                <option value="Test-2">Test-2</option>
                                                <option value="Test-3">Test-3</option>
                                                <option value="Test-4">Test-4</option>
                                                <option value="Test-5">Test-5</option>
                                            </select>
                                        </div>
                                        <div className="add_report_submit_input">
                                            <label for="">Report Description <span>*</span></label>
                                            <textarea
                                                placeholder="Enter Your Description"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="add_test_submit">
                                    <button className="add_test_btn">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Userbase>
        </>
    );
}