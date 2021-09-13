// import { NavLink } from "react-router-dom";
import { Nav, NavLinks, NavMenu } from './NavElements'

export default function Navbar() {
    return (
        <Nav className="navbar">
            <NavMenu className="menu">
                Volunteer Work Manager ღ
                <NavLinks to="/" className="link">
                    Home
                </NavLinks>

                <NavLinks to="/volunteer" className="link">
                    Voluteer
                </NavLinks>
            </NavMenu>
        </Nav>
    )
}