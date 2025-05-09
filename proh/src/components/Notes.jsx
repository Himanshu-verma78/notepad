import { Save, Trash } from 'lucide-react'
import React from 'react'

const Notes = ({note, id, deleteNote}) => {
  const handleDownload=(e)=>{
    e.preventDefault();
    const blob = new Blob([note], {type:"text/plain"});
    const url = URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url;
    a.download=`${id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className='flex flex-col justify-center items-center w-64 h-64 bg-gray-800 round-1g shadow-1g p-4 m-4'>
      <div className='flex justify-center w-full item-center bg-purple-600 round-1g p-2 '>
        <p className='text-sm text-white mt-0'>{id}</p>
        
        </div>

      <h1 className="text-1g font-bold text-center px-2 overflow-hidden break-words">{note}</h1>

      <div className="flex justify-between w-full bg-purple-600 rounded-1g p-2 mt-20">
        <button className="text-red-400 hover:text-red-500" onClick={()=>deleteNote(id)}><Trash/></button>
      <button className='text-green-400 hover:text-green-500' onClick={handleDownload}><Save/></button>
      </div>
    </div>
  )
}

export default Notes
