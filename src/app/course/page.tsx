"use client";
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
// import axios from 'axios';
import Card from "@/components/Cards/CourseCard";
import { FaUpload } from 'react-icons/fa6';

interface CoursesInfo {
    id: number;
    name: string;
}

function CourseComponent() {
    const departmentIdStr = useSearchParams().get('departmentId'); // Extract department ID from query parameters
    const departmentId = departmentIdStr ? parseInt(departmentIdStr) : null; // Convert string to integer
    const [showForm, setShowForm] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [coursesData, setCoursesData] = useState<CoursesInfo[]>([
        { id: 1, name: 'Computer Science' },
        { id: 2, name: 'Business Administration' },
        { id: 3, name: 'Biotechnology' },
        { id: 4, name: 'Physics' },
    ]);

    // const fetchCoursesData = async () => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = await axios.get(`http://localhost:8080/api/v1/courses/department/${departmentId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });
    //         console.log('API Response:', response);
    //         if (response.data.success && response.data.courses) {
    //             const courseNames = response.data.courses.map((course: any) => ({
    //                 id: course.id,
    //                 name: course.name,
    //             }));
    //             setCoursesData(courseNames);
    //         } else {
    //             console.error('Error: Response does not contain courses', response.data);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching courses data:', error);
    //     }
    // };

    // useEffect(() => {
    //     if (departmentId !== null) {
    //         fetchCoursesData();
    //     }
    // }, [departmentId]);

    const handleAddCourse = async () => {
        if (selectedCourse) {
            const newCourse: CoursesInfo = {
                id: coursesData.length + 1, // Generate a new id
                name: selectedCourse,
            };
            setCoursesData([...coursesData, newCourse]);
            setSelectedCourse("");
            setShowForm(false);
        }
        // if (selectedCourse) {
        //     try {
        //         const token = localStorage.getItem('token');
        //         const response = await axios.post(
        //             `http://localhost:8080/api/v1/departments/${departmentId}/courses/upload`,
        //             { name: selectedCourse },
        //             {
        //                 headers: {
        //                     Authorization: `Bearer ${token}`
        //                 }
        //             }
        //         );
        //         if (response.data.success) {
        //             fetchCoursesData(); // Re-fetch courses after adding a new one
        //             setSelectedCourse("");
        //             setShowForm(false);
        //         } else {
        //             console.error('Error: Course upload failed', response.data);
        //         }
        //     } catch (error) {
        //         console.error('Error uploading course:', error);
        //     }
        // }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center text-black">
            <div className="mb-8 w-3/4 flex flex-row items-center justify-around">
                <h1 className="text-2xl text-white">Courses</h1>
                <div className="bg-white font-semibold text-black hover:bg-blue-400 flex items-center border-0 rounded-xl px-3 py-2">
                    <div className="mr-2">
                        <FaUpload className='text-black' />
                    </div>
                    <button onClick={() => setShowForm(true)}>Upload</button>
                </div>
            </div>
            <div className="w-1/2 md:grid md:grid-cols-2 md:gap-4 flex flex-col">
                {coursesData.map((course) => (
                    <Card key={course.id} Course={course} />
                ))}
            </div>

            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-xl mb-4">Add Course</h2>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md p-2 mb-4"
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            placeholder="Enter course name"
                        />
                        <button onClick={handleAddCourse} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
                        <button onClick={() => setShowForm(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-4">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}


export default function Home() {
    <Suspense fallback={<div>Loading...</div>
    } >
        <CourseComponent/>
    </Suspense>
}