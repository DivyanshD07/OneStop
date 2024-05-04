
import './NotesCard.css';
import React from 'react';
import Link from 'next/link';
// onClick: () => void
const Card = (props: { department: string; }) => {
  return (
    <Link href={`/course?department=${props.department.toLowerCase()}`}>
       {/* onClick={props.onClick} */}
      <div className="Notescard">
        <h1>{props.department}</h1>
      </div>
    </Link>
  );
};

export default Card;
