import React from 'react';
import './DashBoardCard.css';
import Link from 'next/link';
// import { useRouter } from 'next/router';



const card = (props: { id:string; service: string }) => {

  // const router = useRouter();
  // const handleClick = (props: { service: string }) => {
  //   router.push(`./${props.service.toLowerCase()}`); 
  // }
  
  return (
      <Link href={`/${props.service.toLowerCase()}`} className="card">
        <h1>{props.id}</h1>
      </Link>
  )
}
 
export default card;