import './NotesCard.css';
import React from 'react';
import Link from 'next/link';
// onClick: () => void
const Card = (props: { department: { id: number; name: string } }) => {
  
    return (
      <Link href={`/course?departmentId=${props.department.id}`}>
       {/* onClick={props.onClick} */}
      <div className="Notescard">
        <h1>{props.department.name}</h1>
      </div>
    </Link>
    )
  ;
};

export default Card;
