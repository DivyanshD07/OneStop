"use client";
import { useState, useEffect } from 'react';
// import axios from 'axios';
import Card from '@/components/Cards/DepartmentCard';
import { FaUpload } from 'react-icons/fa6';

interface DepartmentInfo {
    id: number;
    name: string;
}

export default function Home() {
    const [showForm, setShowForm] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [departmentData, setDepartmentData] = useState<DepartmentInfo[]>([
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Management' },
        { id: 3, name: 'Bio Technology' },
        { id: 4, name: 'Physics' },
    ]);
    // useEffect(() => {
    //     const fetchDepartmentData = async () => {
    //         try {
    //             const token = localStorage.getItem('token');
    //             const response = await axios.get('http://localhost:8080/api/v1/departments', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             });
    //             if (response.data.success && response.data.departments) {
    //                 // Map the response to DepartmentInfo type
    //                 const departmentNames = response.data.departments.map((department: any) => ({
    //                     id: department.id,
    //                     name: department.name,
    //                 }));
    //                 setDepartmentData(departmentNames);
    //             } else {
    //                 console.error('Error: Response does not contain departments');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching department data:', error);
    //         }
    //     };

    //     fetchDepartmentData();
    // }, []);

    const handleAddDepartment = async () => {
        if (!selectedDepartment) {
            return;
        }

        const newDepartment: DepartmentInfo = {
            id: departmentData.length + 1, // generate a new id
            name: selectedDepartment,
        };
        setDepartmentData([...departmentData, newDepartment]);
        setSelectedDepartment("");
        setShowForm(false);
    //     try {
    //         if (!selectedDepartment) {
    //             return;
    //         }

    //         const token = localStorage.getItem('token');
    //         const response = await axios.post(
    //             'http://localhost:8080/api/v1/departments/upload',
    //             { name: selectedDepartment },
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 }
    //             }
    //         );
    //         if (response.data.success) {
    //             // If department upload is successful, update department data in state
    //             const newDepartment: DepartmentInfo = {
    //                 id: response.data.department.id,
    //                 name: selectedDepartment,
    //             };
    //             setDepartmentData([...departmentData, newDepartment]);
    //             setSelectedDepartment("");
    //             setShowForm(false);
    //         } else {
    //             console.error('Error: Department upload failed');
    //         }
    //     } catch (error) {
    //         console.error('Error uploading department:', error);
    //     }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center text-black">
            <div className="mb-8 w-3/4 flex flex-row items-center justify-around">
                <h1 className="text-2xl text-white">Department</h1>
                <div className="bg-white font-semibold text-black hover:bg-blue-400 flex items-center border-0 rounded-xl px-3 py-2">
                    <div className="mr-2">
                        <FaUpload className='text-black' />
                    </div>
                    <button onClick={() => setShowForm(true)}>Upload</button>
                </div>
            </div>
            <div className="w-1/2 md:grid md:grid-cols-2 md:gap-4 flex flex-col">
                {departmentData.map(department => (
                    <Card key={department.id} department={department} />
                ))}
            </div>

            {showForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg">
                        <h2 className="text-xl mb-4">Add Department</h2>
                        <select className="border border-gray-300 rounded-md p-2 mb-4" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                            <option value="">Select Department</option>
                            <option value="Technology">Technology</option>
                            <option value="Management">Management</option>
                            <option value="Bio Technology">Bio Technology</option>
                            <option value="Physics">Physics</option>
                            <option value="Others">Others</option>
                        </select>
                        <button onClick={handleAddDepartment} className="bg-blue-500 text-white px-4 py-2 rounded-md">Add</button>
                        <button onClick={() => setShowForm(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-4">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
