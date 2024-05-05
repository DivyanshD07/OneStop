"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from '@/components/Cards/CourseCard';
import { useRouter, useSearchParams } from 'next/navigation';


const Course = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState("");
  const [coursesData, setCoursesData] = useState<string[]>([]);
  const [departmentName, setDepartmentName] = useState<string>("");
  const router = useRouter();
  const id = useSearchParams(); // Extract department ID from router query

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/api/v1/departments/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.success && response.data.department) {
          setDepartmentName(response.data.department.name);
        } else {
          console.error('Error: Department data not found');
        }
      } catch (error) {
        console.error('Error fetching department:', error);
      }
    };

    if (id) {
      fetchDepartmentData();
    }
  }, [id]);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/api/v1/courses/department/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.data.success && response.data.courses) {
          setCoursesData(response.data.courses);
        } else {
          console.error('Error: Courses data not found');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    if (id) {
      fetchCoursesData();
    }
  }, [id]);

  const handleAddCourse = async () => {
    try {
      if (selectedCourses) {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          `http://localhost:8080/api/v1/courses/department/${id}`,
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
        <h1 className="text-2xl text-white">Courses for {departmentName}</h1>
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
