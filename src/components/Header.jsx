import React, { useState } from 'react'

const Header = ({notes,setNotes}) => {

  const [title,setTitle] = useState();
  const [des,setDes] = useState();

  function AddNote(){
     const newNotes= {
      id:Date.now(),
      title,
      des
     }

     const updatedNote = [...notes,newNotes]
     setNotes(updatedNote);
     localStorage.setItem("Notes-app",JSON.stringify(updatedNote))

     setTitle("");
     setDes("");
  }



  return (
    <div className='d-flex justify-content-between  bg-danger p-2'>
      <h5 className='text-light'>NotesAPP</h5>
      <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">AddNote</button>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Notes-APP</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" onChange={(e)=>setTitle(e.target.value)}/>
                <label for="floatingInput">Title</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} onChange={(e)=>setDes(e.target.value)}></textarea>
                <label for="floatingTextarea2">Note</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={AddNote}>Add notes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
