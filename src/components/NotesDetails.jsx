
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const NotesDetails = ({ notes, setNotes }) => {


    const [title,setTitle] = useState();
    const [des,setDes] = useState();
  
  const { id } = useParams();
  const note = notes.find((n) => n.id === Number(id));

  const navigate = useNavigate();

  function Delete(id) {
    const NoteDelete = notes.filter((n) => n.id !== id);
    setNotes(NoteDelete)
    localStorage.setItem("Notes-app", JSON.stringify(NoteDelete))
    navigate("/")
  }


  function update(id) {
    const updated = notes.map((n, i) => n.id === id ? { ...n, title:title,des:des } : n)
    setNotes(updated);
    localStorage.setItem("Notes-app", JSON.stringify(updated))
  }


  useEffect(()=>{
    if(note){
      setTitle(note.title)
      setDes(note.des)
    }
  },[note])
  return (
    <div>
      <div class="card m-3 bg-warning" style={{ width: "18rem" }}>
        <div class="card-header">
          {note?.title}
        </div>
        <div class="card-body">
          <figure>
            <blockquote class="blockquote">
              <p>{note?.des}</p>
            </blockquote>
            {/* <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption> */}
          </figure>
          <button className='btn btn-danger m-2' onClick={() => Delete(note.id)}>Delete</button>
          <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal2">Update</button>
        </div>

        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Notes-APP</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="floatingInput" value={title} onChange={(e) => setTitle(e.target.value)} />
                  <label for="floatingInput">Title</label>
                </div>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={des} style={{ height: "100px" }} onChange={(e) => setDes(e.target.value)}></textarea>
                  <label for="floatingTextarea2">Note</label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={() => update(note.id)}>Update notes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotesDetails
