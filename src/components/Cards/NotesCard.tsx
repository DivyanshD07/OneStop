import React from 'react';
import './NotesCard.css';
import Link from 'next/link';
// import { useRouter } from 'next/router';



const card = (props: { department: string }) => {

  // const router = useRouter();
  // const handleClick = (props: { service: string }) => {
  //   router.push(`./${props.service.toLowerCase()}`); 
  // }
  
  return (
      <Link href={`/${props.department.toLowerCase()}`} className="Notescard">
        <h1>{props.department}</h1>
      </Link>
  )
}

export default card;