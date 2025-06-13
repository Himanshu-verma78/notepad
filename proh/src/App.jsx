import React, { useState } from 'react'
import {Plus,StickyNote} from 'lucide-react'
import Notes from './components/Notes';
import Not from './components/Not';

const App = () => {

   const[notes, setNotes] = useState([
    {id: 1, title: "subscribe"},
    {id: 2, title:"Note App"},
   ]);

   const[text, setText]=useState("");

  const[isToggle, setIsToggle]=useState(false);

  const appNote=()=>{
    if(text.length==0){
       setText("please write something");
       return;
    }
    setNotes((prev) => [...prev, {id:new Date().toLocaleString(), title:text}]);
    setText("");
    setIsToggle(false);
  }

  const deleteNote = (id)=>{
    setNotes((prev)=>prev.filter((note)=>note.id!==id))
  }
  return (

    <div className='w-screen main-h-screen flex flex-col   text-white overflow-x-hidden p-8'>
      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-5xl font-bold flex  gap-2 text-purple-500 drop-shadow-amber-400'> <StickyNote size={40} className="text-orange-400"/> NOTE</h1>
        <p className='font-semibold text-gray-400'>Write your Thought and downlode Now</p>
      </div>
      <div className="flex flex-col items-center gap-2 mt-20 w-full bg-gradient-to-br from-purple-400 text-red-500 cursor-pointer hover:scale-102 " onClick={()=>setIsToggle(true)}>
    <Plus size={60}/>
     </div>
      
      {isToggle?<div className=' absolute top-1/2 border border-purple-500 h- h-1/2 w-2/7 bg-gray-900 rounded-lg  flex flex-col items-center gap-2 p-4' >
      <h1>Write Your Notes..</h1>
        <textarea name='note' id="note" 
        onChange={(e)=>setText(e.target.value)}  value={text}
        className="tex-white bg-gray-700 round-1g w-full h-full"></textarea>
        <button className="bg-purple-600 px-6 py-2 rounded-lg mt-4" onClick={appNote}>Add</button>

        <button className="bg-purple-600 px-6 py-2 rounded-lg mt-4" onClick={()=> setIsToggle(false)}>Cancel</button>
      </div>: ""}

      <div>
        {notes.length>0?(

          <div className='flex flex-wrap justify-center items-center gap-4 mt-10'>
            {notes.map((note)=>(
              <Notes id={note.id} note={note.title} key={note.id} deleteNote ={deleteNote}/>
            ) )}
          
          </div>
        ):<h1>No Notes Are Available.</h1>}
        
        <Not/>
      </div>
       </div>
       
  );
};

export default App
