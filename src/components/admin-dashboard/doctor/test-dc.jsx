import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import "./../../../css/admin-pages/doctor/doctor-list.css";
import Userbase from '../../user-base';


export default function TestDc() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'test_id', headerName: 'Test ID', width: 130 },
        {
            field: 'test_name',
            headerName: 'Test Name',
            description: 'This column shows the name of the Test ',
            sortable: true,
            width: 500,
        },
        {
            field: 'test_price',
            headerName: 'Test Price',
            width: 150,
        },
        {
            field: 'doctor_commission',
            headerName: 'Doctor Commission (%)',
            width: 200,
        },
        {
            field: 'doctor_commission_rupees',
            headerName: 'Doctor Commission (Rs)',
            width: 200,
        },


    ];

    const rows = [
        { id: 1, test_id: "TS00010", test_name: "feaver test", test_price: 200, doctor_commission: "15%", doctor_commission_rupees: 300 },
        { id: 2, test_id: "TS00011", test_name: "Blood Pressure Test", test_price: 150, doctor_commission: "18%", doctor_commission_rupees: 270 },
        { id: 3, test_id: "TS00012", test_name: "Cholesterol Test", test_price: 180, doctor_commission: "20%", doctor_commission_rupees: 360 },
        { id: 4, test_id: "TS00013", test_name: "Diabetes Test", test_price: 220, doctor_commission: "17%", doctor_commission_rupees: 374 },
        { id: 5, test_id: "TS00014", test_name: "Thyroid Test", test_price: 250, doctor_commission: "16%", doctor_commission_rupees: 400 },
        { id: 6, test_id: "TS00015", test_name: "Liver Function Test", test_price: 280, doctor_commission: "19%", doctor_commission_rupees: 532 },
        { id: 7, test_id: "TS00016", test_name: "Kidney Function Test", test_price: 210, doctor_commission: "22%", doctor_commission_rupees: 462 },
        { id: 8, test_id: "TS00017", test_name: "Cancer Screening Test", test_price: 350, doctor_commission: "21%", doctor_commission_rupees: 735 },
        { id: 9, test_id: "TS00018", test_name: "Allergy Test", test_price: 190, doctor_commission: "24%", doctor_commission_rupees: 456 },
        { id: 10, test_id: "TS00019", test_name: "HIV Test", test_price: 300, doctor_commission: "16%", doctor_commission_rupees: 480 },
        { id: 11, test_id: "TS00020", test_name: "Stress Test", test_price: 270, doctor_commission: "18%", doctor_commission_rupees: 486 },
        { id: 12, test_id: "TS00021", test_name: "Bone Density Test", test_price: 320, doctor_commission: "20%", doctor_commission_rupees: 640 },
        { id: 13, test_id: "TS00022", test_name: "Pregnancy Test", test_price: 100, doctor_commission: "17%", doctor_commission_rupees: 117 },
        { id: 14, test_id: "TS00023", test_name: "Hepatitis Test", test_price: 280, doctor_commission: "19%", doctor_commission_rupees: 532 },
        { id: 15, test_id: "TS00024", test_name: "Colonoscopy", test_price: 400, doctor_commission: "23%", doctor_commission_rupees: 920 },
        { id: 16, test_id: "TS00025", test_name: "Bone Marrow Test", test_price: 450, doctor_commission: "25%", doctor_commission_rupees: 1125 },
        { id: 17, test_id: "TS00026", test_name: "Genetic Testing", test_price: 550, doctor_commission: "20%", doctor_commission_rupees: 1100 },
        { id: 18, test_id: "TS00027", test_name: "Glucose Tolerance Test", test_price: 300, doctor_commission: "18%", doctor_commission_rupees: 540 },
        { id: 19, test_id: "TS00028", test_name: "Electrocardiogram (ECG)", test_price: 180, doctor_commission: "22%", doctor_commission_rupees: 396 },
        { id: 20, test_id: "TS00029", test_name: "Ultrasound", test_price: 250, doctor_commission: "16%", doctor_commission_rupees: 400 },
        { id: 21, test_id: "TS00030", test_name: "MRI Scan", test_price: 600, doctor_commission: "18%", doctor_commission_rupees: 1080 },
    ];

    return (
        <Userbase>
                <div className="doctor_list_main_page">
                    <div className="doctor_list_base_page">
                        <div className="doctor_List_main">
                                <div className="doctor_list_heding">
                                    <p>Test Doctor Commission</p>
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
