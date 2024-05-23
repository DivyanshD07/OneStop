import './CCard.css';
import React from 'react';
import Link from 'next/link';

interface CourseInfo {
    id: number;
    name: string;
}

const Card: React.FC<{ Course: CourseInfo }> = (props) => {
    return (
        <Link href={`/pyq?courseId=${props.Course.id}`}>
            <div className="Notescard">
                <h1>{props.Course.name}</h1>
            </div>
        </Link>
    );
};

export default Card;