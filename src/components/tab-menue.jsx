import React from "react";
import { NavLink } from "react-router-dom";
import "./../css/tab-menue.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

export const TabMenu = ({ activeOrgLink, activeTabs, removeTab, showTabs, activeTab }) => {
    return (
        <div className="tab_navbar">
            {showTabs && activeTabs.map((tab, index) => (
                <div key={index} className="tab-content">
                    {tab === 'dashboard' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Dashboard"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/dashboard" className="nabbar_tabs_name">
                                    Dashboard
                                </NavLink>
                            </div>
                        </Tooltip>
                    )}
                    {tab === 'add-doctor' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Add&nbsp;Doctor"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/add-doctor" className="nabbar_tabs_name">
                                    Add&nbsp;Doctor
                                </NavLink>

                                {activeOrgLink && "add-doctor" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>
                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}

                            </div>
                        </Tooltip>
                    )}
                    {tab === 'doctor-commission' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Doctor&nbsp;Commission"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/doctor-commission" className="nabbar_tabs_name">
                                    Doctor&nbsp;Commission
                                </NavLink>

                                {activeOrgLink && "doctor-commission" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>
                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                    )}
                    {tab === 'test-dc' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Test&nbsp;DC"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/test-dc" className="nabbar_tabs_name">
                                    Test&nbsp;DC
                                </NavLink>

                                {activeOrgLink && "test-dc" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>
                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                    )}
                    {tab === 'doctor-list' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Doctor&nbsp;List"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/doctor-list" className="nabbar_tabs_name">
                                    Doctor&nbsp;List
                                </NavLink>

                                {activeOrgLink && "doctor-list" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>
                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                    )}
                    {tab === 'test-list' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title=" Test&nbsp;List"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/test-list" className="nabbar_tabs_name">
                                    Test&nbsp;List
                                </NavLink>

                                {activeOrgLink && "test-list" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>

                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                    )}

                    {tab === 'add-test' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title=" Add&nbsp;test"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/add-test" className="nabbar_tabs_name">
                                    Add&nbsp;test
                                </NavLink>

                                {activeOrgLink && "add-test" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>

                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                    )}

                    {tab === 'add-report' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title=" Add&nbsp;test"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/add-report" className="nabbar_tabs_name">
                                    Add&nbsp;Report
                                </NavLink>

                                {activeOrgLink && "add-report" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>

                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                    )}

                    {tab === 'report-list' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Report&nbsp;List"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/report-list" className="nabbar_tabs_name">
                                    Report&nbsp;List
                                </NavLink>

                                {activeOrgLink && "report-list" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>

                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                    )}
                    {tab === 'report-template' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Report&nbsp;template"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/report-template" className="nabbar_tabs_name">
                                    Report&nbsp;template
                                </NavLink>

                                {activeOrgLink && "report-template" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>

                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                    )}
                    {tab === 'download-report' && (
                        <Tooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 600 }}
                            title="Download&nbsp;Report"
                            arrow
                            enterDelay={700}
                        >
                            <div key={index} className="navbar_tabs" style={{ backgroundColor: activeTab === tab ? 'rgb(212, 152, 245)' : '' }}>
                                <NavLink to="/user/download-report" className="nabbar_tabs_name">
                                    Download&nbsp;Report
                                </NavLink>

                                {activeOrgLink && "download-report" === activeTab ? (
                                    <NavLink to={`/user/${activeOrgLink}`} onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </NavLink>

                                ) : (
                                    <div onClick={() => removeTab(tab)}>
                                        <FontAwesomeIcon className="remove_icon" icon={faTimes} />
                                    </div>
                                )}
                            </div>
                        </Tooltip>
                    )}
                </div>
            ))}
        </div>

    );
};


function OtherComponent({ activeTabs, removeTab, showTabs }) {
    return (
        <div>
            <TabMenu activeTabs={activeTabs} removeTab={removeTab} showTabs={showTabs} />
        </div>
    );
}

export default OtherComponent;