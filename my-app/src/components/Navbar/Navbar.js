// import { NavLink } from "react-router-dom";
import { Nav, NavLinks, NavMenu } from './NavElements'

export default function Navbar() {
    return (
        <Nav className="navbar">
            <NavMenu className="menu">
                <h1>Helping Hands ღ</h1>
                <NavLinks to="/" className="link">
                    Home
                </NavLinks>

                <NavLinks to="/volunteer" className="link">
                    Volunteer
                </NavLinks>
            </NavMenu>
        </Nav>
    )
}