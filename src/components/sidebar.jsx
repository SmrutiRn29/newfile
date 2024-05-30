import { faBoxesStacked, faBriefcaseMedical, faCaretDown, faCaretRight, faFileWaveform, faHouse, faHouseMedicalFlag, faMicroscope, faMoon, faSun, faUserDoctor, faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./../css/userbase.css";
import { TabMenu } from "./tab-menue";

function Sidebar() {
    const CaretRightIcon = <FontAwesomeIcon icon={faCaretRight} />;
    const location = useLocation();
    const sidebarRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(268);

    const startResizing = React.useCallback((mouseDownEvent) => {
        setIsResizing(true);
    }, []);

    const stopResizing = React.useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = React.useCallback(
        (mouseMoveEvent) => {
            if (isResizing) {
                setSidebarWidth(
                    mouseMoveEvent.clientX -
                    sidebarRef.current.getBoundingClientRect().left
                );
            }
        },
        [isResizing]
    );

    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);
    const [subMenuOpen, setSubMenuOpen] = useState({
        doctor: false,
        test: false,
        report: false,
        booking: false,
        Inventory:false,
        staff: false,
        lab: false
    });

    const toggleSubMenu = (menu) => {
        setSubMenuOpen(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    const hasChildren = (menu) => {
        return menu === "doctor" || menu === "test" || menu === "report" || menu === "booking" || menu === "Inventory" || menu === "staff" || menu === "lab";
    }
    const menus = ["dashboard",
        "add-doctor",
        "doctor-commission",
        "test-dc",
        "doctor-list",
        "test-list",
        "add-test",
        "add-report",
        "report-list",
        "report-template",
        "download-report"
    ];
    const [activeTabs, setActiveTabs] = useState([menus[0]]);

    const handleTabClick = (menu) => {
        if (!activeTabs.includes(menu)) {
            const newTabs = [...activeTabs, menu];
            setActiveTabs(newTabs);
            localStorage.setItem("activeTabs", JSON.stringify(newTabs));
        }
    };

    let activeTab = "";
    if (location.pathname.includes("/user/")) {
        activeTab = location.pathname.split("/")[2];
    }

    const storedTabs = JSON.parse(localStorage.getItem("activeTabs"));
    let initialActiveOrgLink = null;
    if (storedTabs && storedTabs.length > 0) {
        initialActiveOrgLink = storedTabs[storedTabs.indexOf(activeTab) - 1];
    }

    const [activeOrgLink, setActiveOrgLink] = useState(initialActiveOrgLink);
    let tabToRemove2 = "";
    const removeTab = (tabToRemove) => {
        tabToRemove2 = tabToRemove;
        const newTabs = activeTabs.filter(tab => tab !== tabToRemove);
        setActiveTabs(newTabs);
        localStorage.setItem("activeTabs", JSON.stringify(newTabs));

        const storedTabs = JSON.parse(localStorage.getItem("activeTabs"));
        const newActiveOrgLink = storedTabs[storedTabs.indexOf(activeTab) - 1];
        setActiveOrgLink(newActiveOrgLink);
    };
    useEffect(() => {
        const storedTabs = JSON.parse(localStorage.getItem("activeTabs"));
        if (storedTabs && storedTabs.length > 0) {
            const activeTab = location.pathname.split("/")[2];
            setActiveOrgLink(storedTabs[storedTabs.indexOf(activeTab) - 1]);
            setActiveTabs(storedTabs);
        } else {
            setActiveOrgLink("dashboard");
            setActiveTabs(["dashboard"]);
        }
    }, [location.pathname]);

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    };
    return (
        <>
            <div style={{
                width: "100%", backgroundColor: "aliceblue",
                position: "absolute",
                zIndex: "100"
            }}>
                <TabMenu activeOrgLink={activeOrgLink} activeTabs={activeTabs} removeTab={removeTab} showTabs={location.pathname.startsWith("/user/")} activeTab={activeTab} />
            </div>

            <div className="app-container">
                <div
                    ref={sidebarRef}
                    className="app-sidebar"
                    style={{ width: sidebarWidth }}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <div className="app-sidebar-content">
                        <aside className="sidebar_main">
                            <div className="sidebar_logo">
                                <div className="sidebar_logo_inside">
                                    <span>
                                        <img src="/logo192.png" alt="logo_image " />
                                    </span>
                                    <span className="logo_name">Doctor Lab</span>
                                </div>
                                <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                                </button>
                            </div>

                            <ul className="sidebar_components">
                                {/* Dashboard */}
                                <li className="sidebar_tabs">
                                    <NavLink to="/newfile/user/dashboard" onClick={() => handleTabClick("dashboard")}>
                                        <FontAwesomeIcon className="sidebar_icon" icon={faHouse} />
                                        <div>Dashboard</div>
                                    </NavLink>
                                </li>

                                {/* Doctor */}
                                <li className="sidebar_tabs">
                                    <a onClick={() => toggleSubMenu('doctor')}>
                                        <FontAwesomeIcon className="sidebar_icon" icon={faUserDoctor} />
                                        <div>Doctor</div>
                                        <div className="sidebar_dropdown_icon">
                                            {hasChildren("doctor") && (
                                                <FontAwesomeIcon className={subMenuOpen.doctor ? 'rotate-arrow' : ''} icon={faCaretDown} />
                                            )}
                                        </div>
                                    </a>


                                    <ul className={subMenuOpen.doctor ? "sidebar_subheading open" : "sidebar_subheading"}>
                                        <li>
                                            <NavLink to="/newfile/user/add-doctor" onClick={() => handleTabClick("add-doctor")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div> Add Doctor</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/newfile/user/doctor-commission" onClick={() => handleTabClick("doctor-commission")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Doctor Commission</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/newfile/user/test-dc" onClick={() => handleTabClick("test-dc")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Test DC</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/newfile/user/doctor-list" onClick={() => handleTabClick("doctor-list")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Doctor List</div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                {/* doctor menu end  */}

                                {/* test menu start  */}
                                <li className="sidebar_tabs">
                                    <a onClick={() => toggleSubMenu('test')}>
                                        <FontAwesomeIcon className="sidebar_icon" icon={faMicroscope} />
                                        <div>Test</div>
                                        <div className="sidebar_dropdown_icon">
                                            {hasChildren("test") && (
                                                <FontAwesomeIcon className={subMenuOpen.test ? 'rotate-arrow' : ''} icon={faCaretDown} />
                                            )}
                                        </div>
                                    </a>

                                    <ul className={subMenuOpen.test ? "sidebar_subheading open" : "sidebar_subheading"}>
                                        <li>
                                            <NavLink to="/newfile/user/test-list" onClick={() => handleTabClick("test-list")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Test List</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/newfile/user/add-test" onClick={() => handleTabClick("add-test")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Add Test</div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                {/* test menu end  */}
                                {/* report nemu start  */}
                                <li className="sidebar_tabs">
                                    <a onClick={() => toggleSubMenu('report')}>
                                        <FontAwesomeIcon className="sidebar_icon" icon={faFileWaveform} />
                                        <div>Report</div>
                                        <div className="sidebar_dropdown_icon">
                                            {hasChildren("report") && (
                                                <FontAwesomeIcon className={subMenuOpen.report ? 'rotate-arrow' : ''} icon={faCaretDown} />
                                            )}
                                        </div>
                                    </a>

                                    <ul className={subMenuOpen.report ? "sidebar_subheading open" : "sidebar_subheading"}>
                                        <li>
                                            <NavLink to="/newfile/user/add-report" onClick={() => handleTabClick("add-report")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Add Report</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/newfile/user/report-list" onClick={() => handleTabClick("report-list")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Report List</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/newfile/user/report-template" onClick={() => handleTabClick("report-template")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Report Template</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/newfile/user/download-report" onClick={() => handleTabClick("download-report")}>
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Download Report</div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                {/* report menu end  */}
                                {/* booking menu start  */}
                                <li className="sidebar_tabs">
                                    <a onClick={() => toggleSubMenu('booking')}>
                                        <FontAwesomeIcon className="sidebar_icon" icon={faBriefcaseMedical} />
                                        <div>Booking</div>
                                        <div className="sidebar_dropdown_icon">
                                            {hasChildren("booking") && (
                                                <FontAwesomeIcon className={subMenuOpen.booking ? 'rotate-arrow' : ''} icon={faCaretDown} />
                                            )}
                                        </div>
                                    </a>

                                    <ul className={subMenuOpen.booking ? "sidebar_subheading open" : "sidebar_subheading"}>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span> <div>Booking1</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span> <div>Booking2</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Booking3</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span> <div>Booking4</div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                {/* booking menu end  */}
                                <li className="sidebar_tabs">
                                    <a onClick={() => toggleSubMenu('Inventory')}>
                                        <FontAwesomeIcon className="sidebar_icon" icon={faBoxesStacked} />
                                        <div>Inventory</div>
                                        <div className="sidebar_dropdown_icon">
                                            {hasChildren("Inventory") && (
                                                <FontAwesomeIcon className={subMenuOpen.Inventory ? 'rotate-arrow' : ''} icon={faCaretDown} />
                                            )}
                                        </div>
                                    </a>

                                    <ul className={subMenuOpen.Inventory ? "sidebar_subheading open" : "sidebar_subheading"}>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Add Assets</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Inventory manage</div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                {/* staff menu statr  */}
                                <li className="sidebar_tabs">
                                    <a onClick={() => toggleSubMenu('staff')}>
                                        <FontAwesomeIcon className="sidebar_icon" icon={faUserNurse} />
                                        <div>Staff</div>
                                        <div className="sidebar_dropdown_icon">
                                            {hasChildren("staff") && (
                                                <FontAwesomeIcon className={subMenuOpen.staff ? 'rotate-arrow' : ''} icon={faCaretDown} />
                                            )}
                                        </div>
                                    </a>

                                    <ul className={subMenuOpen.staff ? "sidebar_subheading open" : "sidebar_subheading"}>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Staff1</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Staff2</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Staff3</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>staff4</div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                {/* staff menu end  */}
                                {/* lab menu start  */}
                                <li className="sidebar_tabs">
                                    <a onClick={() => toggleSubMenu('lab')}>
                                        <FontAwesomeIcon className="sidebar_icon" icon={faHouseMedicalFlag} />
                                        <div>Lab</div>
                                        <div className="sidebar_dropdown_icon">
                                            {hasChildren("lab") && (
                                                <FontAwesomeIcon className={subMenuOpen.lab ? 'rotate-arrow' : ''} icon={faCaretDown} />
                                            )}
                                        </div>
                                    </a>

                                    <ul className={subMenuOpen.lab ? "sidebar_subheading open" : "sidebar_subheading"}>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Lab1</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span> <div>Lab2</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Lab3</div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/">
                                                <span className="sidebar_subpoints" >{CaretRightIcon}</span><div>Lab4</div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                {/* lab menu end  */}
                            </ul>
                        </aside>
                    </div>
                    <div className="app-sidebar-resizer" onMouseDown={startResizing} />
                </div>
            </div>
        </>
    );
}
export default Sidebar;

