import React from 'react';
import ConferenceWorkshopsHolder from '../../componentData/ConferenceWorkshops';
import Footer from '@/componentData/Footer';

export default function ConferenceWorkshopsPage() {
    return (
        <div className="w-full bg-[#0d0b0a]">
            <ConferenceWorkshopsHolder />
            <Footer />
        </div>
    );
}
