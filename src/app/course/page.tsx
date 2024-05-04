"use client";
import React from 'react';
// import { useRouter } from 'next/router';

interface CoursesData {
  [key: string]: string[]; // Define an index signature for the object
}

const Course = () => {
  // const router = useRouter();
  // const { department } = router.query;

  // if (typeof department !== 'string') {
  //   return <div>No department selected</div>;
  // }

  // Static courses data
  const coursesData: CoursesData = {
    Technology: ["Course A", "Course B", "Course C"],
    Management: ["Course X", "Course Y", "Course Z"],
    // Add more departments and their courses as needed
  };

  // Check if the department exists in the courses data
  // if (!coursesData.hasOwnProperty(department)) {
  //   return <div>No courses found for this department</div>;
  // }

  // const courses = coursesData[department];

  return (
    <div>
      {/* <h1>Courses for {department}</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Course;
