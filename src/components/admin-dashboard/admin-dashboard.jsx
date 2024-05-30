import { LineChart } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import UserBase from "../user-base";
import "./../../css/admin-pages/admin-dashboard.css";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Admindashboard() {

    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 3000, 2000, 2780, 1890, 2390, 3490, 3000, 2000, 2780, 1890, 2390, 3490, 3000, 2000, 2780, 1890, 2390, 3490, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 1900, 3908, 4800, 3800, 4300, 1398, 3800, 3908, 4800, 3800, 4300, 1398, 3800, 3908, 4800, 3800, 4300, 1398, 2800, 3908, 4800, 3800, 4300, 1398, 3200, 3908, 4800, 3800, 4300];
    const amtData = [2400, 2210, 2000, 2000, 2181, 2500, 2100, 2210, 2000, 2000, 2181, 2500, 2100, 2210, 2000, 2000, 2181, 2500, 2100, 2210, 2000, 2000, 2181, 2500, 2100, 2210, 2000, 2000, 2181, 2500, 2100];
    const xLabels = [
        '1 May',
        '2 May',
        '3 May',
        '4 May',
        '5 May',
        '6 May',
        '7 May',
        '8 May',
        '9 May',
        '10 May',
        '11 May',
        '12 May',
        '13 May',
        '14 May',
        '15 May',
        '16 May',
        '17 May',
        '18 May',
        '19 May',
        '20 May',
        '21 May',
        '22 May',
        '23 May',
        '24 May',
        '25 May',
        '26 May',
        '27 May',
        '28 May',
        '29 May',
        '30 May',
        '31 May',


    ];

    const data = [
        { label: 'Group A', value: 400, color: '#0088FE' },
        { label: 'Group B', value: 300, color: '#00C49F' },
        { label: 'Group C', value: 300, color: '#FFBB28' },
        { label: 'Group D', value: 200, color: '#FF8042' },
        { label: 'Group F', value: 350, color: '#9f40f7' },
    ];

    const sizing = {
        margin: { right: 5 },
        width: 200,
        height: 200,
        legend: { hidden: true },
    };
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

    const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
    };
    return (
        <>
            <UserBase>
                <div className="admin_main">
                    <div className="admin_main_base_page">
                        <div className="admin_base_page">
                            <div className="dashboard_navbar">
                                <div className="dashboard_navbar_user_details">
                                    <div className="dashboard_navbar_user_pic">
                                        <img src="/image/homepage/pravas.jpg" alt=" profile pic" />
                                    </div>
                                    <div className="dashboard_navbar_user_name">
                                        <h2>Pravas Kumar</h2>
                                    </div>
                                </div>
                                <div className="dashboard_navbar_details">
                                    <div className='dashboard_navbar_search_page'>
                                        <input type="text" className="search_box" id="searchInput" placeholder="Search..." />
                                    </div>
                                    <div className="dashboard_navbar_setting">
                                        <a href="/"><FontAwesomeIcon className="setting_icon" icon={faGear} /></a>
                                    </div>

                                </div>
                            </div>
                            <div className="admin_status">
                                <div className="admin_status_card card_one">
                                    <h3>Booking Pending</h3>
                                    <p>Count</p>
                                </div>
                                <div className="admin_status_card card_two">
                                    <h3>Test in Progress</h3>
                                    <p>Count</p>
                                </div>
                                <div className="admin_status_card card_three">
                                    <h3>Report Cancelled</h3>
                                    <p>Count</p>
                                </div>
                                <div className="admin_status_card card_four">
                                    <h3>Report Completed</h3>
                                    <p>Count</p>
                                </div>
                            </div>
                        </div>
                        <div className="admin_report">
                            <div className="admin_dialy_report">
                                <div className="admin_daily_report_heading">
                                    <p>Today Date </p>
                                    <p className="heading_details">The daily performance of your lab is shown here. By analyzing this, you can grow your business more. If you need any help contact us by clicking <span className="heading_details_link"><NavLink to="/user/contact-us">here</NavLink></span></p>
                                </div>
                                <div className="admin_daily_report_base">
                                    <div className="admin_report_details">
                                        <p> No of Booking: </p>
                                        <p> No of Test: </p>
                                        <p> No of Samples: </p>
                                        <p> Billing Amount: </p>
                                    </div>
                                    <div className="admin_report_data">
                                        <p>4000</p>
                                        <p>2400</p>
                                        <p>2400</p>
                                        <p>Rs. 10000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="admin_monthly_report">
                                <p className="admin_monthly_report_heading">Monthly Test Overview "May 2024" </p>
                                <p className="heading_details">The monthly performance of your lab is shown here. By analyzing this, you can grow your business more. If you need any help contact us by clicking <span className="heading_details_link"><NavLink to="/user/contact-us">here</NavLink></span></p>
                                <LineChart className="chat"
                                    height={200}
                                    series={[
                                        {
                                            data: uData,
                                            label: 'No of Booking',
                                            showMark: false,

                                        },
                                        {
                                            data: pData,
                                            label: 'No of Test',
                                            showMark: false
                                        },
                                        {
                                            data: amtData,
                                            label: 'No of Samples',
                                            // area: true,
                                            showMark: false,
                                        },
                                    ]}
                                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                                />
                            </div>
                        </div>
                        <div className="admin_report">
                            <div className="performance_monthly_report">
                                <p className="admin_monthly_report_heading">Monthly Performance Dashboard "May 2024" </p>
                                <p className="heading_details">The monthly performance of your lab is shown here. By analyzing this, you can grow your business more. If you need any help contact us by clicking <span className="heading_details_link"><NavLink to="/user/contact-us">here</NavLink></span></p>
                                <LineChart className="chat"
                                    height={200}
                                    series={[
                                        {
                                            data: uData,
                                            label: 'Doctor Name',
                                            showMark: false
                                        },
                                        {
                                            data: pData,
                                            label: 'No of Test',
                                            showMark: false
                                        },
                                        {
                                            data: amtData,
                                            label: 'No of Samples',
                                            // area: true,
                                            showMark: false,
                                        },
                                    ]}
                                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                                />
                            </div>
                            <div className="doctors_report_card">
                                <div className="admin_daily_report_heading">
                                    <p>Doctor Commission Dashboard</p>
                                    <p className="heading_details">Analyze this pie chart to identify top-performing doctors and growth opportunities. If you need any help contact us by clicking <span className="heading_details_link"><NavLink to="/user/contact-us">here</NavLink></span></p>
                                </div>
                                <div className="docters_report">
                                    <PieChart
                                        series={[
                                            {
                                                outerRadius: 80,
                                                data,
                                                arcLabel: getArcLabel,
                                                innerRadius: 20,
                                                paddingAngle: 2,
                                                cornerRadius: 5,
                                            },
                                        ]}
                                        sx={{
                                            [`& .${pieArcLabelClasses.root}`]: {
                                                fill: 'white',
                                                fontSize: 14,
                                            },
                                        }}
                                        {...sizing}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="admin_report">
                            <div className="doctors_report_card">
                                <div className="admin_daily_report_heading">
                                    <p>Today Inventory Stock update</p>
                                    <p className="heading_details">Analyze this pie chart to identify your inventory stock of the day. If you need any help contact us by clicking <span className="heading_details_link"><NavLink to="/user/contact-us">here</NavLink></span></p>
                                </div>
                                <div className="docters_report">
                                    <PieChart
                                        series={[
                                            {
                                                outerRadius: 80,
                                                data,
                                                arcLabel: getArcLabel,
                                                innerRadius: 20,
                                                paddingAngle: 2,
                                                cornerRadius: 5,
                                            },
                                        ]}
                                        sx={{
                                            [`& .${pieArcLabelClasses.root}`]: {
                                                fill: 'white',
                                                fontSize: 14,
                                            },
                                        }}
                                        {...sizing}
                                    />
                                </div>
                            </div>
                            <div className="admin_monthly_report">
                                <p className="admin_monthly_report_heading">Monthly Inventory Overview "May 2024" </p>
                                <p className="heading_details">The monthly Inventory of your lab is shown here. By analyzing this, you can grow your business more. If you need any help contact us by clicking <span className="heading_details_link"><NavLink to="/user/contact-us">here</NavLink></span></p>
                                <LineChart className="chat"
                                    height={200}
                                    series={[
                                        {
                                            data: uData,
                                            label: 'No of Booking',
                                            showMark: false,

                                        },
                                        {
                                            data: pData,
                                            label: 'No of Test',
                                            showMark: false
                                        },
                                        {
                                            data: amtData,
                                            label: 'No of Samples',
                                            // area: true,
                                            showMark: false,
                                        },
                                    ]}
                                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </UserBase>
        </>
    );
}