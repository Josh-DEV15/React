import React from 'react';
import { FaUserTie } from "react-icons/fa";
import './HireMeFloat.css';

export default function HireMeFloat() {
    return (
        <a 
        href="mailto:risingsun15052005@gmail.com" className="hire-me-float" target="_blank" rel="noopener noreferrer">
            <FaUserTie size={30} color="#fff"/>
        </a>
    );
}   