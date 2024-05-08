"use client";
import { useState, useEffect, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Card from "@/components/Cards/NotesCard";
import { FaUpload } from 'react-icons/fa6';

export default function Home() {
    const router = useRouter();
    const courseIdstr = useSearchParams().toString(); // Extract department ID from router query
    const lastcourseId = courseIdstr.charAt(courseIdstr.length - 1); // Convert string to integer
    const courseId = parseInt(lastcourseId); // Convert string to integer
    const [showForm, setShowForm] = useState(false);
    const [selectedNotes, setSelectedNotes] = useState("");
    const [notesData, setNotesData] = useState<{ id: number; name: string; }[]>([]);

    // Sample hardcoded data for departments and courses
    const hardcodedNotesData = [
        {
            id: 1,
            name: "Web Development",
            notes: [
                { id: 1, name: "Notes 1" },
                { id: 2, name: "Notes 2" },
                { id: 3, name: "Notes 3" },
            ]
        },
        {
            id: 5,
            name: "Marketing",
            notes: [
                { id: 4, name: "Notes 1" },
                { id: 5, name: "Notes 2" },
                { id: 6, name: "Notes 3" },
            ]

        },
    ];

    useEffect(() => {
        // Load coursesData for the selected department from hardcoded data on initial render
        const coursesNotes = hardcodedNotesData.find(course => course.id == courseId);
        if (coursesNotes) {
            setNotesData(coursesNotes.notes);
        }
    }, [courseId]);

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