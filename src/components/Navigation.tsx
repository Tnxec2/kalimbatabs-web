import React, { FC, useState } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { useAuth } from "../context/AuthContext";
import LogIn from "../pages/LogIn";
import Modal from "./modal/modal";


const Navigation: FC = () => {
    
    const { token, username, logout } = useAuth();
    const [ showLogin, setShowLogin] = useState(false)
    
    
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" className="mx-2">Tnxec2 Kalimba Tabs</Navbar.Brand>

                <Nav className="ms-auto">
                    { !token ? 
                        <Navbar>
                            <Nav.Link href='# ' className="mx-2" onClick={() => setShowLogin(true)}>
                                🔑 Sign In
                            </Nav.Link>
                        </Navbar> 
                        : 
                        <Navbar>
                            <Navbar.Brand>
                                👽 {username}
                            </Navbar.Brand>
                            <Nav.Link href='# ' className="mx-2" onClick={logout}>
                                Log out
                            </Nav.Link>
                        </Navbar> 
                    }
                </Nav>
            </Navbar>
            
                <Modal open={showLogin} modalLabel='Login' onClose={() => setShowLogin(false)}>
                    <LogIn onLogin={() => setShowLogin(false) } /> 
                </Modal>
            
        </>
    )
}

export default Navigation