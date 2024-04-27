import Image from "next/image";
import Card from "@/components/Cards/NotesCard";

export default function Home() {
    const departmentData = [
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
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="mb-8 w-3/4 flex flex-row items-center justify-around">
                <h1 className="text-2xl">Department</h1>
                <button className="border border-solid-2 px-4 py-1 rounded hover:bg-blue-400 hover:text-black">Upload</button>
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-4">
                {departmentData.map((department, index) => (
                    <Card key={index} {...department} />
                ))}
            </div>
        </div>
    );
}