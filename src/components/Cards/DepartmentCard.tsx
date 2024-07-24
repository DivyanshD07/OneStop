// import './NotesCard.css';
// import React from 'react';
// import Link from 'next/link';
// // onClick: () => void
// const Card = (props: { department: { id: number; name: string } }) => {
 
//     return (
//       <Link href={`/course?departmentId=${props.department.id}`}>
//        {/* onClick={props.onClick} */}
//       <div className="Notescard">
//         <h1>{props.department.name}</h1>
//       </div>
//     </Link>
//     )
//   ;
// };

// export default Card;
import './CCard.css';
import React from 'react';
import Link from 'next/link';

interface DepartmentInfo {
    id: number;
    name: string;
}

const Card: React.FC<{ department: DepartmentInfo }> = (props) => {
    return (
        <Link href={`/course?departmentId=${props.department.id}`}>
            <div className="Notescard">
                <h1 className='text-xl p-4 md:text-xxl md:p-4'>{props.department.name}</h1>
            </div>
        </Link>
    );
};

export default Card;
