import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

import Userbase from "../../user-base";
import "./../../../css/admin-pages/test/add-test.css";

export default function Addtest() {


    const names = [
        'Fluoride plasma-01',
        'Fluoride plasma - 2',
        'Fluoride plasma - 3',
        'Lithium Heparin',
        'PUS',
        'Citrated Plasma',
        ',EDTA Blood',
        'Serum',
        'SPUTUM',
        'Stool',
        'Urine'
    ];
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const [gender, setGender] = React.useState('');
    const handleSelectChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <Userbase>
                <div className="add_test">
                    <div className="add_test_base">
                        <div className="add_test_heding">
                            <p>
                                Add Test
                            </p>
                        </div>
                        <div className="add_test_submit_card">
                            <form action="" className="add_test_submit_form" >
                                <div className="add_test_form">
                                    <div className="add_test_submit_index">
                                        <div className="add_test_submit_input">
                                            <label for="">Patient Name <span>*</span></label>
                                            <input type="text"
                                                placeholder="Enter Patient Name"
                                                required
                                            />
                                        </div>
                                        <div className="add_test_submit_input">
                                            <label for="gender">Select Gender:</label>
                                            <select id="gender" name="gender">
                                                <option value="">Select</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="add_test_submit_input">
                                            <label for="">Email / Phone No </label>
                                            <input type="text"
                                                placeholder="Enter Email or Mobile No"
                                                required
                                            />
                                        </div>

                                        <div className="add_test_submit_input">
                                            <label for="">Test Name <span>*</span></label>
                                            <input type="text"
                                                placeholder="Enter Test Name"
                                                required
                                            />
                                        </div>

                                        <div className="add_test_submit_input">
                                            <label for="">Choose Date <span>*</span></label>
                                            <input type="date"
                                                placeholder="Enter The Test Date"
                                                required
                                            />
                                        </div>

                                    </div>
                                    <div className="add_doctor_submit_index">
                                        <div className="add_test_submit_input">
                                            <label for="">Methodology <span>*</span></label>
                                            <input type="text"
                                                placeholder="Enter Test Methodology"
                                                required
                                            />
                                        </div>
                                        <div className="add_test_submit_input">
                                            <label for="">Select Test Sample <span>*</span></label>
                                            <Select
                                                className='sample_select'
                                                labelId="multy-select-box"
                                                id="multy-select"
                                                multiple
                                                value={personName}
                                                onChange={handleChange}
                                                input={<OutlinedInput id="multy-select-box" />}
                                                renderValue={(selected) => (
                                                    <Box className="select_box" sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, border: 'none' }}>
                                                        {selected.map((value) => (
                                                            <Chip key={value} label={value} />
                                                        ))}
                                                    </Box>
                                                )}
                                            >
                                                {names.map((name) => (
                                                    <MenuItem
                                                        key={name}
                                                        value={name}
                                                    >
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </div>
                                        <div className="add_test_submit_input">
                                            <label for="">Test Description <span>*</span></label>
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