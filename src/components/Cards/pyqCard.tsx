import React from 'react';
import Link from 'next/link';
import { FaCircle, FaDownload } from 'react-icons/fa6';

interface NotesInfo {
    id: number;
    name: string;
    download: string;
}

const Card: React.FC<{ Notes: NotesInfo }> = (props) => {
    const handleDownload = () => {
        window.open(props.Notes.download, '_blank');
    };

    return (
        <div className="text-white flex justify-center items-center align-middle gap-6">
            <FaCircle className='h-1/2' />
            <h1 className='text-xl'>{props.Notes.name}</h1>
            <button onClick={handleDownload}><FaDownload /></button>
        </div>
    );
};

export default Card;
