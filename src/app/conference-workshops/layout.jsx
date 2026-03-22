import React from 'react';
import Navbar from '../../componentData/NavBar';

export default function ConferenceWorkshopsLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#0d0b0a]">
            <Navbar />
            {children}
        </div>
    );
} 