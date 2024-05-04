import React from 'react';
import './NotesCard.css';
import Link from 'next/link';
// import { useRouter } from 'next/router';



const card = (props: { course: string }) => {

  // const router = useRouter();
  // const handleClick = (props: { service: string }) => {
  //   router.push(`./${props.service.toLowerCase()}`); 
  // }
  
  return (
      <Link href={`/${props.course.toLowerCase()}`} className="Notescard">
        <h1>{props.course}</h1>
      </Link>
  )
}

export default card;