"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Card from "@/components/Cards/NotesCard";
import { useRouter } from 'next/router';

export default function Home() {

    // const router = useRouter();



    const [showForm, setShowForm] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [departmentData, setDepartmentData] = useState([
        {
            department: "Technology",
        },
        {
            department: "Management",
        },
        {
            department: "Bio Technology",
        },
        {
            department: "Philosophy",
        },
        {
            department: "Others",
        },
    ]);

    // Load departmentData from localStorage on initial render
    useEffect(() => {
        const savedData = localStorage.getItem('departmentData');
        if (savedData) {
            setDepartmentData(JSON.parse(savedData));
        }
    }, []);

    // Update localStorage whenever departmentData changes
    useEffect(() => {
        localStorage.setItem('departmentData', JSON.stringify(departmentData));
    }, [departmentData]);

    const handleAddDepartment = () => {
        if (selectedDepartment) {
            setDepartmentData([...departmentData, { department: selectedDepartment }]);
            setSelectedDepartment("");
            setShowForm(false);
        }
    };

    
    // const handleDepartmentClick = (department:string) => {
    //     router.push(`/course?department=${encodeURIComponent(department)}`);
    // };

    return (
        <div className="w-full flex flex-col items-center justify-center text-black">
            <div className="mb-8 w-3/4 flex flex-row items-center justify-around">
                <h1 className="text-2xl text-white">Department</h1>
                <button onClick={() => setShowForm(true)} className="border text-white border-solid-2 px-4 py-1 rounded hover:bg-blue-400 hover:text-black">Upload</button>
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-4">
                {departmentData.map((department, index) => (
                    // onClick={() => handleDepartmentClick(department.department)} 
                    <Card key={index} {...department} /> 
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
