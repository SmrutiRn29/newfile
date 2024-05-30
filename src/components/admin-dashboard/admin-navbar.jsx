import "./../../css/admin-pages/admin-navbar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Adminnavbar() {
    return (
        <>
            <div className="admin_navbar">
                <a href="/dashboard" className="admin_navbar_tabs">Dashboard</a>
                <NavDropdown title="Doctor" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/add-doctor">Add Doctor</NavDropdown.Item>
                    <NavDropdown.Item href="/doctor-commission">Doctor Commission</NavDropdown.Item>
                    <NavDropdown.Item href="/test-dc">Test DC</NavDropdown.Item>
                    <NavDropdown.Item href="/doctor-list">Doctor List</NavDropdown.Item>
                </NavDropdown>
                <a href="/" className="admin_navbar_tabs">Tests</a>
                <a href="/" className="admin_navbar_tabs">Reports</a>
                <a href="/" className="admin_navbar_tabs">Booking</a>
                <a href="/" className="admin_navbar_tabs">Staff</a>
                <a href="/" className="admin_navbar_tabs">Lab</a>
            </div>
        </>
    );
}