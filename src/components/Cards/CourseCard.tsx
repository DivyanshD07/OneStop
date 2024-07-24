import './CCard.css';
import React from 'react';
import Link from 'next/link';

interface CourseInfo {
    id: number;
    name: string;
}

const Card: React.FC<{ Course: CourseInfo }> = (props) => {
    return (
        <Link href={`/notes?courseId=${props.Course.id}`}>
            <div className="Notescard">
                <h1 className='text-xl p-4 md:text-xxl md:p-4'>{props.Course.name}</h1>
            </div>
        </Link>
    );
};

export default Card;