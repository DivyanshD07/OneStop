import './CCard.css';
import React from 'react';
import Link from 'next/link';

interface DepartmentInfo {
    id: number;
    name: string;
}

const Card: React.FC<{ department: DepartmentInfo }> = (props) => {
    return (
        <Link href={`/coursePYQ?departmentId=${props.department.id}`}>
            <div className="Notescard">
                <h1>{props.department.name}</h1>
            </div>
        </Link>
    );
};

export default Card;