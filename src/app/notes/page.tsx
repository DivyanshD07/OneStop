"use client";
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Card from "@/components/Cards/NotesCard";
import { FaUpload } from 'react-icons/fa6';
// import axios from 'axios';

interface NotesInfo {
    id: number;
    name: string;
    download: string;
}

function NotesComponent() {
    const searchParams = useSearchParams();
    const courseIdStr = searchParams.get('courseId');
    const courseId = courseIdStr ? parseInt(courseIdStr) : null;

    const [showForm, setShowForm] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [notesData, setNotesData] = useState<NotesInfo[]>([
        { id: 1, name: 'Lecture 1', download: 'https://example.com/lecture1' },
        { id: 2, name: 'Lecture 2', download: 'https://example.com/lecture2' },
        { id: 3, name: 'Lecture 3', download: 'https://example.com/lecture3' },
    ]);

    // useEffect(() => {
    //     const fetchNotesData = async () => {
    //         if (courseId !== null) {
    //             try {
    //                 const token = localStorage.getItem('token');
    //                 const response = await axios.get(`http://localhost:8080/api/v1/notes/${courseId}`, {
    //                     headers: {
    //                         Authorization: `Bearer ${token}`
    //                     }
    //                 });
    //                 console.log("API Response: ", response);

    //                 if (response.data.success && Array.isArray(response.data.notes)) {
    //                     const notesNames = response.data.notes.map((note: any) => ({
    //                         id: note.id,
    //                         name: note.fileName,
    //                         download: note.downloadUrl,
    //                     }));
    //                     setNotesData(notesNames);
    //                 } else {
    //                     console.error('Error: Response does not contain notes or success is false', response.data);
    //                 }
    //             } catch (error) {
    //                 console.error('Error fetching notes data:', error);
    //             }
    //         }
    //     };

    //     fetchNotesData();
    // }, [courseId]);

    const handleAddNotes = async () => {
        if (selectedFile) {
            const newNote: NotesInfo = {
                id: notesData.length + 1,
                name: selectedFile.name,
                download: URL.createObjectURL(selectedFile),
            };
            setNotesData([...notesData, newNote]);
            setSelectedFile(null);
            setShowForm(false);
        }
        // if (selectedFile) {
        //     const formData = new FormData();
        //     formData.append('file', selectedFile);

        //     try {
        //         const token = localStorage.getItem('token');
        //         const response = await axios.post(
        //             `http://localhost:8080/api/v1/notes/${courseId}/upload`,
        //             formData,
        //             {
        //                 headers: {
        //                     'Content-Type': 'multipart/form-data',
        //                     Authorization: `Bearer ${token}`
        //                 }
        //             }
        //         );

        //         if (response.data.success) {
        //             const newNote = response.data.note;
        //             setNotesData([...notesData, newNote]);
        //             setSelectedFile(null);
        //             setShowForm(false);
        //         } else {
        //             console.error('Error: Notes upload failed', response.data);
        //         }
        //     } catch (error) {
        //         console.error('Error uploading notes:', error);
        //     }
        // }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
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
                    <button onClick={() => setShowForm(true)}>Upload</button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start align-middle gap-2 rounded-lg bg-gray-800 shadow-gray-500 shadow-sm inset-shadow py-2 px-6">
                {notesData.map((note) => (
                    <Card key={note.id} Notes={note} />
                ))}
            </div>

            {showForm && (
                <div className="fixed top-1/4 left-1/4 w-1/2 h-1/2 bg-white rounded-lg align-middle flex flex-col justify-start items-start p-8 gap-4">
                    <div className="w-full h-full align-middle flex flex-col justify-start items-start gap-4">
                        <div className='text-xl'>Upload your notes here:</div>
                        <div className='w-full h-full top-1/2 left-1/2 border-2 border-dashed border-gray-400 rounded-lg'>
                            <input 
                                type="file" 
                                className="w-full h-full top-1/2 left-1/2" 
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <button onClick={handleAddNotes} className="bg-blue-500 text-white px-4 py-2 rounded-md">Upload</button>
                            <button onClick={() => setShowForm(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-4">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}><NotesComponent/></Suspense>
    );
}