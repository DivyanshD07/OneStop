"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import CourseCard from '@/components/Cards/CourseCard';
import { useRouter } from 'next/router';

const Course = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState("");
  const [coursesData, setCoursesData] = useState<string[]>([]);
  const [departmentName, setDepartmentName] = useState<string>(""); // State for department name
  const router = useRouter();
  const { departmentId } = router.query;

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/api/v1/departments/${departmentId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.success && response.data.department) {
          setDepartmentName(response.data.department.name); // Set department name from the API response
        } else {
          console.error('Error: Response does not contain department');
        }
      } catch (error) {
        console.error('Error fetching department:', error);
      }
    };

    if (departmentId) {
      fetchDepartmentData();
    }
  }, [departmentId]); // Fetch department data when departmentId changes

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/api/v1/courses/department/${departmentId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.success && response.data.courses) {
          setCoursesData(response.data.courses);
        } else {
          console.error('Error: Response does not contain courses');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    if (departmentId) {
      fetchCoursesData();
    }
  }, [departmentId]); // Fetch courses when departmentId changes

  const handleAddCourse = async () => {
    try {
      if (selectedCourses) {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          `http://localhost:8080/api/v1/courses/department/${departmentId}`,
          { name: selectedCourses },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        if (response.data.success) {
          setCoursesData([...coursesData, selectedCourses]);
          setSelectedCourses("");
          setShowForm(false);
        } else {
          console.error('Error: Course upload failed');
        }
      }
    } catch (error) {
      console.error('Error uploading course:', error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-black">
      <div className="mb-8 w-3/4 flex flex-row items-center justify-around">
        <h1 className="text-2xl text-white">Courses for {departmentName}</h1> {/* Display department name */}
        <button onClick={() => setShowForm(true)} className="border text-white border-solid-2 px-4 py-1 rounded hover:bg-blue-400 hover:text-black">Upload</button>
      </div>
      <div>
        <div className="w-full grid grid-cols-2 gap-4">
          {coursesData.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl mb-4">Add Course</h2>
            <select className="border border-gray-300 rounded-md p-2 mb-4" value={selectedCourses} onChange={(e) => setSelectedCourses(e.target.value)}>
              <option value="">Select Course</option>
              <option value="Course A">Course A</option>
              <option value="Course B">Course B</option>
              <option value="Course C">Course C</option>
              {/* Add more courses as needed */}
            </select>
            <button onClick={handleAddCourse} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
            <button onClick={() => setShowForm(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-4">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
