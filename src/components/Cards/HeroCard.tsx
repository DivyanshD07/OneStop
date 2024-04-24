import React from 'react';
import './HeroCard.css';
import Link from 'next/link';
// import { useRouter } from 'next/router';



const card = (props: { service: string }) => {

  // const router = useRouter();
  // const handleClick = (props: { service: string }) => {
  //   router.push(`./${props.service.toLowerCase()}`); 
  // }
  
  return (
      <Link href={`/${props.service.toLowerCase()}`} className="card">
        <h1>{props.service}</h1>
      </Link>
  )
}

export default card;