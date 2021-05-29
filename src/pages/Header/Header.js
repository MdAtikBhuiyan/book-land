import React from 'react';
import HeaderBanner from './HeaderBanner';
import HeaderNavbar from './HeaderNavbar';
import HeaderTop from './HeaderTop';

const Header = () => {
    return (
        <>

        <HeaderTop></HeaderTop>
        <HeaderNavbar></HeaderNavbar>
        <HeaderBanner></HeaderBanner>
        </>
    );
};

export default Header;