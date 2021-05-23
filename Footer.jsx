import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
    return <>
        <footer className="footer">
            <span>Copyright © {year}</span>
        </footer>
    </>
};

export default Footer;