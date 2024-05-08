// import './NotesCard.css';
import React from 'react';
import Link from 'next/link';
import { FaCircle, FaDownload } from 'react-icons/fa6';
import { FaDotCircle } from 'react-icons/fa';


interface NotesInfo {
    id: number;
    name: string;
}

const Card: React.FC<{ Notes: NotesInfo }> = (props) => {
    return (
        <Link href={`/notes?courseId=${props.Notes.id}`}>
            <div className="text-white flex justify-center items-center align-middle gap-6">
                <FaCircle className='h-1/2'/>
                <h1 className='text-xl'>{props.Notes.name}</h1>
                <button><FaDownload /></button>
            </div>
        </Link>
    );
};

export default Card;