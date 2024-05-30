import "./../../../css/admin-pages/test/test-list.css";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import Userbase from "../../user-base";


export default function Test() {
    const columns = [
        { id: 'id', label: 'ID', minWidth: 20 },
        { id: 'test_id', label: 'Test\u00a0ID', minWidth: 70 },
        {
            id: 'patient_name',
            label: 'Patient\u00a0Name',
            minWidth: 80,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'test_name',
            label: 'Test\u00a0Name',
            minWidth: 280,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'tat_time',
            label: 'TAT\u00a0Time',
            minWidth: 70,
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'type_of_sample',
            label: 'Type\u00a0Of\u00a0Sample',
            minWidth: 100,
            format: (value) => value.toFixed(2),
        },
        {
            id: 'mrp',
            label: 'MRP',
            minWidth: 70,
            format: (value) => value.toFixed(2),
        },
        {
            id:'status',
            label:'Status',
            minWidth:70,
            format: (value) => value.toFixed(2),
        }


    ];
    const rows = [
        { id: 1, test_id: "TS00010",patient_name:"Doe John", test_name: "feaver test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 300,status:"Completed" },
        { id: 2, test_id: "TS00011",patient_name:"Alice Johnson", test_name: "Blood Pressure Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 270,status:"Completed" },
        { id: 3, test_id: "TS00012",patient_name:"Bob Williams", test_name: "Cholesterol Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 360,status:"Completed" },
        { id: 4, test_id: "TS00013",patient_name:"Emily Davis", test_name: "Diabetes Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 374,status:"Completed" },
        { id: 5, test_id: "TS00014",patient_name:"James Wilson", test_name: "Thyroid Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 400,status:"Completed" },
        { id: 6, test_id: "TS00015",patient_name:"Emma Martinez", test_name: "Liver Function Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 532,status:"Completed" },
        { id: 7, test_id: "TS00016",patient_name:"William Anderson", test_name: "Kidney Function Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 462,status:"Completed" },
        { id: 8, test_id: "TS00017",patient_name:"Sophia Garcia", test_name: "Cancer Screening Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 735,status:"Completed" },
        { id: 9, test_id: "TS00018",patient_name:"Alexander Garcia", test_name: "Allergy Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 456,status:"Completed" },
        { id: 10, test_id: "TS00019",patient_name:"Olivia Martinez", test_name: "HIV Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 480,status:"Completed" },
        { id: 11, test_id: "TS00020",patient_name:"Daniel Brown", test_name: "Stress Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 486,status:"Completed" },
        { id: 12, test_id: "TS00021",patient_name:"Ava Wilson", test_name: "Bone Density Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 640,status:"Completed" },
        { id: 13, test_id: "TS00022",patient_name:"Matthew Thomas", test_name: "Pregnancy Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 117,status:"Completed" },
        { id: 14, test_id: "TS00023",patient_name:"Isabella Lopez", test_name: "Hepatitis Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 532,status:"Completed" },
        { id: 15, test_id: "TS00024",patient_name:"Ethan Hernandez", test_name: "Colonoscopy", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 920,status:"Completed" },
        { id: 16, test_id: "TS00025",patient_name:"Madison Garcia", test_name: "Bone Marrow Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 1125,status:"Completed" },
        { id: 17, test_id: "TS00026",patient_name:"Noah Wilson", test_name: "Genetic Testing", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 1100,status:"Completed" },
        { id: 18, test_id: "TS00027",patient_name:"Chloe Martinez", test_name: "Glucose Tolerance Test", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 540,status:"Completed" },
        { id: 19, test_id: "TS00028",patient_name:"Liam Brown", test_name: "Electrocardiogram (ECG)", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 396,status:"Completed" },
        { id: 20, test_id: "TS00029",patient_name:"Grace Johnson", test_name: "Ultrasound", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 400,status:"Completed" },
        { id: 21, test_id: "TS00030",patient_name:"Mason Davis", test_name: "MRI Scan", tat_time: 120, type_of_sample: "EDTA Blood", mrp: 1080,status:"Completed" },
    ];


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Userbase>
                <div className="testlist_main">
                    <div className="testlist_base">
                        <div className="testlist_cardlist">
                            <div className="testlist_download">
                                <div className="testlist_download_button">
                                    <button>Excel <FontAwesomeIcon icon={faDownload} /></button>
                                </div>
                                <div className="testlist_download_button">
                                    <button>PDF <FontAwesomeIcon icon={faDownload} /></button>
                                </div>
                            </div>
                            <div className="testlist_card card_1">
                                <h1>Total Test</h1>
                                <p>Count</p>
                            </div>
                            <div className="testlist_card card_2">
                                <h1>Completed Test</h1>
                                <p>Count</p>
                            </div>
                            <div className="testlist_card card_3">
                                <h1>Pending Test</h1>
                                <p>Count</p>
                            </div>
                        </div>
                        <div className="test_list_table">
                            <Paper sx={{ width: '100%' }}>
                                <TableContainer sx={{ maxHeight: 440, }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody style={{ maxWidth: "600px" }}>
                                            {rows
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row) => (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                        {columns.map((column) => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    {column.format && typeof value === 'number'
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />

                            </Paper>
                        </div>
                    </div>
                </div>
            </Userbase>

        </>
    )
}