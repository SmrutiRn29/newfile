import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import "./../../../css/admin-pages/doctor/doctor-list.css";
import Userbase from '../../user-base';


export default function DoctorList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'doctor-name',
            headerName: 'Doctor Name',
            description: 'This column shows the name of the Doctor',
            sortable: true,
            width: 200,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
            field: 'age',
            headerName: 'Age',
            width: 60,
        },
        { field: 'gender', headerName: 'Gender', width: 100 },
        { field: 'commission', headerName: 'Commission', width: 100 },
        { field: 'specialization', headerName: 'Specialization', width: 160 },
        { field: 'address', headerName: 'Address', width: 180 },
        { field: 'remark', headerName: 'Remark', width: 180 },
        { field: 'date_of_joining', headerName: 'Date Of Joining ', width: 170 },
        { field: 'action', headerName: 'action ', width: 70 },

    ];

    const rows = [
        { id: 1, lastName: 'Doe', firstName: 'John', gender: 'male', age: 35, commission: "15%", specialization: "Orthopedics", address: "City Hospital", remark: "Excellent surgeon", date_of_joining: "2024-03-15 09:00:00" },
        { id: 2, lastName: 'Smith', firstName: 'Jane', gender: 'female', age: 40, commission: "18%", specialization: "Dermatology", address: "Sunshine Clinic", remark: "Great dermatologist", date_of_joining: "2024-04-01 10:30:00" },
        { id: 3, lastName: 'Johnson', firstName: 'Emily', gender: 'female', age: 28, commission: "20%", specialization: "Oncology", address: "Hope Hospital", remark: "Caring oncologist", date_of_joining: "2023-12-20 11:45:00" },
        { id: 4, lastName: 'Williams', firstName: 'Michael', gender: 'male', age: 45, commission: "17%", specialization: "Cardiology", address: "Heart Center", remark: "Skilled cardiologist", date_of_joining: "2024-02-10 08:15:00" },
        { id: 5, lastName: 'Brown', firstName: 'Olivia', gender: 'female', age: 32, commission: "16%", specialization: "Neurology", address: "Brain Institute", remark: "Knowledgeable neurologist", date_of_joining: "2023-11-05 13:20:00" },
        { id: 6, lastName: 'Miller', firstName: 'William', gender: 'male', age: 50, commission: "19%", specialization: "Endocrinology", address: "Hormone Clinic", remark: "Expert endocrinologist", date_of_joining: "2024-01-28 14:45:00" },
        { id: 7, lastName: 'Wilson', firstName: 'Sophia', gender: 'female', age: 38, commission: "22%", specialization: "Pulmonology", address: "Breath Clinic", remark: "Respiratory specialist", date_of_joining: "2023-10-12 16:00:00" },
        { id: 8, lastName: 'Moore', firstName: 'James', gender: 'male', age: 48, commission: "21%", specialization: "Urology", address: "Bladder Center", remark: "Experienced urologist", date_of_joining: "2024-05-02 09:30:00" },
        { id: 9, lastName: 'Taylor', firstName: 'Emma', gender: 'female', age: 42, commission: "24%", specialization: "Rheumatology", address: "Joint Clinic", remark: "Rheumatic diseases expert", date_of_joining: "2023-09-18 12:15:00" },
        { id: 10, lastName: 'Anderson', firstName: 'Alexander', gender: 'male', age: 55, commission: "16%", specialization: "Gastroenterology", address: "Digestive Care", remark: "Gastrointestinal specialist", date_of_joining: "2024-03-30 11:00:00" },
        { id: 11, lastName: 'Thomas', firstName: 'Charlotte', gender: 'female', age: 29, commission: "18%", specialization: "Ophthalmology", address: "Eye Hospital", remark: "Skilled eye surgeon", date_of_joining: "2023-12-10 10:45:00" },
        { id: 12, lastName: 'Jackson', firstName: 'Daniel', gender: 'male', age: 41, commission: "20%", specialization: "Nephrology", address: "Kidney Center", remark: "Expert nephrologist", date_of_joining: "2024-02-15 08:30:00" },
        { id: 13, lastName: 'White', firstName: 'Isabella', gender: 'female', age: 33, commission: "17%", specialization: "Allergy and Immunology", address: "Allergy Clinic", remark: "Allergist and immunologist", date_of_joining: "2023-11-20 13:00:00" },
        { id: 14, lastName: 'Harris', firstName: 'Matthew', gender: 'male', age: 47, commission: "19%", specialization: "Hematology", address: "Blood Center", remark: "Blood disorders specialist", date_of_joining: "2024-01-10 14:45:00" },
        { id: 15, lastName: 'Martin', firstName: 'Emily', gender: 'female', age: 36, commission: "23%", specialization: "Psychiatry", address: "Mind Wellness", remark: "Mental health expert", date_of_joining: "2023-10-05 16:30:00" },
        { id: 16, lastName: 'Thompson', firstName: 'David', gender: 'male', age: 44, commission: "25%", specialization: "Otolaryngology", address: "ENT Clinic", remark: "Ear, nose, and throat specialist", date_of_joining: "2024-05-15 09:15:00" },
        { id: 17, lastName: 'Garcia', firstName: 'Olivia', gender: 'female', age: 30, commission: "20%", specialization: "Plastic Surgery", address: "Beauty Clinic", remark: "Skilled plastic surgeon", date_of_joining: "2023-08-28 11:00:00" },
        { id: 18, lastName: 'Rodriguez', firstName: 'Ethan', gender: 'male', age: 39, commission: "18%", specialization: "Geriatrics", address: "Elderly Care", remark: "Geriatrician", date_of_joining: "2024-03-20 10:00:00" },
        { id: 19, lastName: 'Martinez', firstName: 'Amelia', gender: 'female', age: 31, commission: "22%", specialization: "Pediatric Surgery", address: "Children's Hospital", remark: "Pediatric surgeon", date_of_joining: "2023-12-05 12:45:00" },
        { id: 20, lastName: 'Davis', firstName: 'Daniel', gender: 'male', age: 37, commission: "16%", specialization: "Internal Medicine", address: "Internal Clinic", remark: "Internist", date_of_joining: "2024-02-28 14:30:00" },
        { id: 21, lastName: 'Wilson', firstName: 'Liam', gender: 'male', age: 34, commission: "18%", specialization: "Orthopedics", address: "City Hospital", remark: "Skilled orthopedic surgeon", date_of_joining: "2024-04-10 09:00:00" },
        { id: 22, lastName: 'Anderson', firstName: 'Ava', gender: 'female', age: 38, commission: "20%", specialization: "Dermatology", address: "Sunshine Clinic", remark: "Excellent dermatologist", date_of_joining: "2024-04-10 10:30:00" },
        { id: 23, lastName: 'Johnson', firstName: 'Noah', gender: 'male', age: 42, commission: "17%", specialization: "Oncology", address: "Hope Hospital", remark: "Dedicated oncologist", date_of_joining: "2024-04-10 11:45:00" },
        { id: 24, lastName: 'Martinez', firstName: 'Sophia', gender: 'female', age: 29, commission: "19%", specialization: "Cardiology", address: "Heart Center", remark: "Skilled cardiologist", date_of_joining: "2024-04-10 08:15:00" },
        { id: 25, lastName: 'Brown', firstName: 'Logan', gender: 'male', age: 46, commission: "21%", specialization: "Neurology", address: "Brain Institute", remark: "Expert neurologist", date_of_joining: "2024-04-10 13:20:00" },
        { id: 26, lastName: 'Garcia', firstName: 'Mia', gender: 'female', age: 35, commission: "16%", specialization: "Endocrinology", address: "Hormone Clinic", remark: "Specialized endocrinologist", date_of_joining: "2024-04-10 14:45:00" },
        { id: 27, lastName: 'Taylor', firstName: 'Elijah', gender: 'male', age: 51, commission: "20%", specialization: "Pulmonology", address: "Breath Clinic", remark: "Respiratory care expert", date_of_joining: "2024-04-10 16:00:00" },
        { id: 28, lastName: 'Harris', firstName: 'Harper', gender: 'female', age: 39, commission: "22%", specialization: "Urology", address: "Bladder Center", remark: "Experienced urologist", date_of_joining: "2024-04-10 09:30:00" },
        { id: 29, lastName: 'Miller', firstName: 'Benjamin', gender: 'male', age: 43, commission: "24%", specialization: "Rheumatology", address: "Joint Clinic", remark: "Rheumatologist", date_of_joining: "2024-04-10 12:15:00" },
        { id: 30, lastName: 'Thomas', firstName: 'Abigail', gender: 'female', age: 32, commission: "16%", specialization: "Gastroenterology", address: "Digestive Care", remark: "Gastrointestinal expert", date_of_joining: "2024-04-10 11:00:00" },
        { id: 31, lastName: 'Jackson', firstName: 'Ethan', gender: 'male', age: 48, commission: "18%", specialization: "Ophthalmology", address: "Eye Hospital", remark: "Skilled ophthalmologist", date_of_joining: "2024-04-10 10:45:00" },
        { id: 32, lastName: 'White', firstName: 'Elizabeth', gender: 'female', age: 30, commission: "20%", specialization: "Nephrology", address: "Kidney Center", remark: "Expert nephrologist", date_of_joining: "2024-04-10 08:30:00" },
        { id: 33, lastName: 'Williams', firstName: 'Mason', gender: 'male', age: 44, commission: "17%", specialization: "Allergy and Immunology", address: "Allergy Clinic", remark: "Allergist and immunologist", date_of_joining: "2024-04-10 13:00:00" },
        { id: 34, lastName: 'Moore', firstName: 'Scarlett', gender: 'female', age: 33, commission: "19%", specialization: "Hematology", address: "Blood Center", remark: "Hematologist", date_of_joining: "2024-04-10 14:45:00" },
        { id: 35, lastName: 'Brown', firstName: 'Henry', gender: 'male', age: 49, commission: "23%", specialization: "Psychiatry", address: "Mind Wellness", remark: "Psychiatrist", date_of_joining: "2024-04-10 16:30:00" },
        { id: 36, lastName: 'Davis', firstName: 'Lily', gender: 'female', age: 31, commission: "25%", specialization: "Otolaryngology", address: "ENT Clinic", remark: "ENT specialist", date_of_joining: "2024-04-10 09:15:00" },
        { id: 37, lastName: 'Wilson', firstName: 'Lucas', gender: 'male', age: 36, commission: "21%", specialization: "Plastic Surgery", address: "Beauty Clinic", remark: "Plastic surgeon", date_of_joining: "2024-04-10 11:00:00" },
        { id: 38, lastName: 'Martinez', firstName: 'Evelyn', gender: 'female', age: 47, commission: "19%", specialization: "Geriatrics", address: "Elderly Care", remark: "Geriatric care specialist", date_of_joining: "2024-04-10 10:00:00" },
        { id: 39, lastName: 'Taylor', firstName: 'Logan', gender: 'male', age: 32, commission: "22%", specialization: "Pediatric Surgery", address: "Children's Hospital", remark: "Pediatric surgeon", date_of_joining: "2024-04-10 12:45:00" },
        { id: 40, lastName: 'Johnson', firstName: 'Madison', gender: 'female', age: 38, commission: "16%", specialization: "Internal Medicine", address: "Internal Clinic", remark: "Internal medicine specialist", date_of_joining: "2024-04-10 14:30:00" }
    ];

    return (
        <Userbase>
            <div className="doctor_list_main_page">
                <div className="doctor_list_base_page">
                    <div className="doctor_List_main">
                        <div className="doctor_list_heding">
                            <p>List doctor</p>
                        </div>
                        <div className='doctor_list_details_page'>
                            <div className='doctor_list_search_page'>
                                <input type="text" className="search-box" id="searchInput" placeholder="Search..." />
                            </div>
                            <div className='doctor_test_table'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Userbase>

    );
}
