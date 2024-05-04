
import './NotesCard.css';
import React from 'react';
import Link from 'next/link';
// onClick: () => void
const Card = (props: { department?: string; }) => {
  const departmentName = props.department ? props.department.toLowerCase() : props.department;
  return (
    <Link href={`/course?department=${departmentName}`}>
       {/* onClick={props.onClick} */}
      <div className="Notescard">
        <h1>{departmentName}</h1>
      </div>
    </Link>
  );
};

export default Card;
