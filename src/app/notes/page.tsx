"use client";
import { useState, useEffect, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Card from "@/components/Cards/NotesCard";
import { FaUpload } from 'react-icons/fa6';
import axios from 'axios';

interface NotesInfo {
    id: number;
    name: string;
    download: string;
}

export default function Home() {
    const router = useRouter();
    const courseIdstr = useSearchParams().toString(); // Extract department ID from router query
    const lastcourseId = courseIdstr.charAt(courseIdstr.length - 1); // Convert string to integer
    const courseId = parseInt(lastcourseId); // Convert string to integer
    const [showForm, setShowForm] = useState(false);
    const [selectedNotes, setSelectedNotes] = useState("");
    const [notesData, setNotesData] = useState<NotesInfo[]>([]);

    useEffect(() => {
        const fetchCoursesData = async () => {
            if (courseId !== null) {
                try {
                    const token = localStorage.getItem('token');
                    const response = await axios.get(`http://localhost:8080/api/v1/notes/${courseId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log("api response: ", response);
                    console.log("response data: ", response.data);
                    console.log("response succes: ", response.data.success);
                    console.log("response note: ", response.data.notes);
                    if (response.data.success && Array.isArray(response.data.notes)) {
                        const notesNames = response.data.notes.map((notes: any) => ({
                            id: notes.id,
                            name: notes.fileName,
                            download: notes.downloadUrl,
                        }));
                        setNotesData(notesNames);
                        
                    console.log("response data: ", response);
                    } else {
                        console.error('Error: Response does not contain courses');
                    }
                } catch (error) {
                    console.error('Error fetching courses data:', error);
                }
            }
        };

        fetchCoursesData();
    }, [courseId]); // Depend on departmentId to refetch when it changes

    const handleAddCourse = () => {
        if (selectedNotes) {
            const newCourse = {
                id: notesData.length + 1, // Generate a unique id
                name: selectedNotes,
            };
            setNotesData([...notesData, newCourse]);
            setSelectedNotes("");
            setShowForm(false);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center text-black">
            <div className="mb-8 w-3/4 flex flex-row items-center justify-around">
                <h1 className="text-2xl text-white">Notes</h1>
                <div className="bg-white font-semibold text-black hover:bg-blue-400 flex items-center border-0 rounded-xl px-3 py-2">
                    <div className="mr-2">
                        <FaUpload className='text-black' />
                    </div>
                    <button onClick={() => setShowForm(true)} className="">Upload</button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start align-middle gap-2 rounded-lg bg-gray-800 shadow-gray-500 shadow-sm inset-shadow py-2 px-6">
                {notesData.map((notes) => (
                    <Card key={notes.id} Notes={notes} />
                ))}
            </div>

            {
                showForm && (
                    <div className="fixed top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-lg align-middle flex flex-col justify-start items-start p-8 gap-4">
                        <div className="w-full h-full align-middle flex flex-col justify-start items-start gap-4">
                            <div className='text-xl'>Upload your notes here:</div>
                            <div className='w-full h-full top-1/2 left-1/2 border-2 border-dashed border-gray-400 rounded-lg'>
                                <input type="file" className="w-full h-full top-1/2 left-1/2" />
                            </div>
                            <div className='flex flex-row justify-between items-center'>
                                <button onClick={handleAddCourse} className="bg-blue-500 text-white px-4 py-2 rounded-md">Upload</button>
                                <button onClick={() => setShowForm(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-4">Cancel</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
