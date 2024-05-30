import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import Userbase from '../../user-base';
import "./../../../css/admin-pages/doctor/doctor-commission.css";
import "./../../../css/admin-pages/doctor/doctor-list.css";


export default function DoctorCommission() {
    const columns = [
        { field: 'booking_id', headerName: 'Booking ID', width: 120 },
        { field: 'date', headerName: 'Date', width: 160 },
        { field: 'patient_name', headerName: 'Patient Name', width: 120 },
        { field: 'gender', headerName: 'Gender', width: 80 },
        { field: 'age', headerName: 'Age', width: 60 },
        {
            field: 'doctor-name',
            headerName: 'Doctor Name',
            description: 'This column shows the name of the Doctor',
            sortable: true,
            width: 160,
            valueGetter: (value, row) => `${row.doctor_firstname || ''} ${row.doctor_lastname || ''}`,
        },


        { field: 'test_name', headerName: 'Test Name', width: 250 },
        { field: 'booking_amount', headerName: 'Booking Amount', width: 120 },
        { field: 'discount', headerName: 'Discount', width: 100 },
        { field: 'total_amount', headerName: 'Total Amount', width: 100 },

    ];

    const initialRows = [
        { id: 1, date: '2024-03-15 09:00:00', booking_id: 'BOOK000001', patient_name: 'Doe John', age: '25', gender: 'male', doctor_firstname: 'dr.Jane', doctor_lastname: 'Smith', test_name: "feaver test and blood test", booking_amount: 200, discount: 10, total_amount: 190 },
        { id: 2, date: '2024-03-16 10:30:00', booking_id: 'BOOK000002', patient_name: 'Alice Johnson', age: '40', gender: 'female', doctor_firstname: 'dr. Michael', doctor_lastname: 'Brown', test_name: "X-ray and MRI", booking_amount: 300, discount: 15, total_amount: 285 },
        { id: 3, date: '2024-03-17 11:45:00', booking_id: 'BOOK000003', patient_name: 'Bob Williams', age: '55', gender: 'male', doctor_firstname: 'dr. Sarah', doctor_lastname: 'Lee', test_name: "Ultrasound", booking_amount: 150, discount: 0, total_amount: 150 },
        { id: 4, date: '2024-03-18 13:00:00', booking_id: 'BOOK000004', patient_name: 'Emily Davis', age: '30', gender: 'female', doctor_firstname: 'dr. David', doctor_lastname: 'Rodriguez', test_name: "ECG and Blood Pressure", booking_amount: 180, discount: 20, total_amount: 160 },
        { id: 5, date: '2024-03-19 14:15:00', booking_id: 'BOOK000005', patient_name: 'James Wilson', age: '45', gender: 'male', doctor_firstname: 'dr. Emily', doctor_lastname: 'Thomas', test_name: "Urine Analysis", booking_amount: 120, discount: 5, total_amount: 115 },
        { id: 6, date: '2024-03-20 15:30:00', booking_id: 'BOOK000006', patient_name: 'Emma Martinez', age: '28', gender: 'female', doctor_firstname: 'dr. Daniel', doctor_lastname: 'Garcia', test_name: "Blood Sugar Test", booking_amount: 100, discount: 0, total_amount: 100 },
        { id: 7, date: '2024-03-21 16:45:00', booking_id: 'BOOK000007', patient_name: 'William Anderson', age: '60', gender: 'male', doctor_firstname: 'dr. Olivia', doctor_lastname: 'Hernandez', test_name: "Cholesterol Test", booking_amount: 90, discount: 0, total_amount: 90 },
        { id: 8, date: '2024-03-22 08:00:00', booking_id: 'BOOK000008', patient_name: 'Sophia Garcia', age: '35', gender: 'female', doctor_firstname: 'dr. Ethan', doctor_lastname: 'Wilson', test_name: "Thyroid Function Test", booking_amount: 200, discount: 10, total_amount: 190 },
        { id: 9, date: '2024-03-23 09:15:00', booking_id: 'BOOK000009', patient_name: 'Alexander Hernandez', age: '50', gender: 'male', doctor_firstname: 'dr. Mia', doctor_lastname: 'Jackson', test_name: "Liver Function Test", booking_amount: 250, discount: 25, total_amount: 225 },
        { id: 10, date: '2024-03-24 10:30:00', booking_id: 'BOOK000010', patient_name: 'Olivia Martinez', age: '32', gender: 'female', doctor_firstname: 'dr. Benjamin', doctor_lastname: 'Taylor', test_name: "Kidney Function Test", booking_amount: 180, discount: 10, total_amount: 170 },
        { id: 11, date: '2024-03-25 11:45:00', booking_id: 'BOOK000011', patient_name: 'Daniel Brown', age: '48', gender: 'male', doctor_firstname: 'dr. Ava', doctor_lastname: 'White', test_name: "HIV Test", booking_amount: 150, discount: 0, total_amount: 150 },
        { id: 12, date: '2024-03-26 13:00:00', booking_id: 'BOOK000012', patient_name: 'Ava Wilson', age: '29', gender: 'female', doctor_firstname: 'dr. Noah', doctor_lastname: 'Martinez', test_name: "Pregnancy Test", booking_amount: 80, discount: 0, total_amount: 80 },
        { id: 13, date: '2024-03-27 14:15:00', booking_id: 'BOOK000013', patient_name: 'Matthew Thomas', age: '55', gender: 'male', doctor_firstname: 'dr. Mia ', doctor_lastname: 'Rodriguez', test_name: "Prostate Exam", booking_amount: 120, discount: 0, total_amount: 120 },
        { id: 14, date: '2024-03-28 15:30:00', booking_id: 'BOOK000014', patient_name: 'Isabella Lopez', age: '42', gender: 'female', doctor_firstname: 'dr. Elijah ', doctor_lastname: 'Perez', test_name: "Bone Density Test", booking_amount: 180, discount: 10, total_amount: 170 },
        { id: 15, date: '2024-03-29 16:45:00', booking_id: 'BOOK000015', patient_name: 'Ethan Hernandez', age: '37', gender: 'male', doctor_firstname: 'dr. Mia ', doctor_lastname: 'Gonzalez', test_name: "Allergy Test", booking_amount: 200, discount: 15, total_amount: 185 },
        { id: 16, date: '2024-03-30 08:00:00', booking_id: 'BOOK000016', patient_name: 'Madison Garcia', age: '31', gender: 'female', doctor_firstname: 'dr. Gabriel ', doctor_lastname: 'Rivera', test_name: "Eye Exam", booking_amount: 100, discount: 5, total_amount: 95 },
        { id: 17, date: '2024-03-31 09:15:00', booking_id: 'BOOK000017', patient_name: 'Noah Wilson', age: '60', gender: 'male', doctor_firstname: 'dr. Isabella ', doctor_lastname: 'Torres', test_name: "Colonoscopy", booking_amount: 300, discount: 20, total_amount: 280 },
        { id: 18, date: '2024-04-01 10:30:00', booking_id: 'BOOK000018', patient_name: 'Chloe Martinez', age: '26', gender: 'female', doctor_firstname: 'dr. Noah ', doctor_lastname: 'Hernandez', test_name: "Pap Smear", booking_amount: 120, discount: 0, total_amount: 120 },
        { id: 19, date: '2024-04-02 11:45:00', booking_id: 'BOOK000019', patient_name: 'Liam Brown', age: '44', gender: 'male', doctor_firstname: 'dr. Sophia ', doctor_lastname: 'Gonzalez', test_name: "Mammogram", booking_amount: 250, discount: 10, total_amount: 240 },
        { id: 20, date: '2024-04-03 13:00:00', booking_id: 'BOOK000020', patient_name: 'Grace Johnson', age: '33', gender: 'female', doctor_firstname: 'dr. Alexander ', doctor_lastname: 'Wilson', test_name: "DEXA Scan", booking_amount: 180, discount: 15, total_amount: 165 },
        { id: 21, date: '2024-04-04 14:15:00', booking_id: 'BOOK000021', patient_name: 'Mason Davis', age: '56', gender: 'male', doctor_firstname: 'dr. Ava ', doctor_lastname: 'Taylor', test_name: "CT Scan", booking_amount: 300, discount: 25, total_amount: 275 }
    ];

    const [rows ] = useState(initialRows);
    const [totalAmount, setTotalAmount] = useState(0);

    // Calculate total amount
    const calculateTotalAmount = (data) => {
        let total = 0;
        data.forEach((row) => {
            total += row.total_amount;
        });
        return total;
    };

    // Update total amount whenever rows change
    useEffect(() => {
        const total = calculateTotalAmount(rows);
        setTotalAmount(total);
    }, [rows]);

    return (
        <Userbase>
            <div className="doctor_commission">
                <div className="doctor_commission_base">
                    <div className='doctor_commission_details_page'>
                        <div className='doctor_commission'>
                            <form action="" className='doctor_commission_form'>
                                <div className='doctor_commission_form_card'>
                                    <label for="">Start&nbsp;Date<span>*</span></label>
                                    <input type="date"
                                        placeholder="Start Date"
                                        required
                                    />
                                </div>
                                <div className='doctor_commission_form_card'>
                                    <label for="">End&nbsp;Date<span>*</span></label>
                                    <input type="date"
                                        placeholder="End Date"
                                        required
                                    />
                                </div>
                                <div className='doctor_commission_form_card'>
                                    <label for="">Doctor&nbsp;Name<span>*</span></label>
                                    <input type="text"
                                        placeholder="Doctor Name"
                                        required
                                    />
                                </div>
                                <div className='doctor_commission_submit'>
                                    <button>View</button>
                                </div>
                            </form>
                        </div>
                        <div className='doctor_commission_search_page'>
                            <div className='doctor_commission_search'>
                                <input type="text" className="search_box" id="searchInput" placeholder="Search..." />
                            </div>
                            <div className='doctor_commission_submit'>
                                <button>View</button>
                            </div>
                        </div>
                        <div className='doctor_commission_table'>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                            />
                            <div style={{ marginTop: '20px' }}>Total Commission Amount: {totalAmount}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Userbase>

    );
}
