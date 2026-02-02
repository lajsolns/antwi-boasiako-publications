import React from 'react';
import Navbar from '../../componentData/NavBar';

export default function CSRLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#0d0b0a]">
            <Navbar />
            {children}
        </div>
    );
} 