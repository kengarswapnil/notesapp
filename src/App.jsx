
import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import NotesApp from './components/NotesApp';
import NotesDetails from './components/NotesDetails';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([])

  function FetchData(){
    const localData = JSON.parse(localStorage.getItem("Notes-app"));
    if(localData){
      setNotes(localData);
    }else{
       localStorage.setItem("Notes-app",JSON.stringify([]));
    }
  }

  useEffect(()=>{
   FetchData();
  },[])

  return (
    <BrowserRouter>

    <Header notes={notes} setNotes={setNotes}/>
      <Routes>
        <Route path='/' element={<NotesApp notes={notes} setNotes={setNotes}/>}></Route>
        <Route path='/notesDetails/:id' element={<NotesDetails notes={notes} setNotes={setNotes}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
