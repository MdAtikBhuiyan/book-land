import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const HeaderNavbar = () => {
    return (
        <Container>
            <nav className='header-navbar mt-2'>
                <ul className='list-unstyled text-center'>
                    <li>
                        <button className="btn simillar-btn">Childs Books</button>
                    </li>
                    <li>
                        <button className="btn simillar-btn">Stationary Items</button>
                    </li>
                    <li>
                        <button className="btn simillar-btn">Publisher</button>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default HeaderNavbar;