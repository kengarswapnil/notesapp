import React from 'react'
import { Link } from 'react-router-dom'

const NotesApp = ({ notes }) => {
  return (
    <div>

      {notes?.map((n, i) => (
        <div class="card m-3 bg-warning" key={i} style={{width:"18rem"}}>
          <div class="card-header">
          {i+1}. {n.title}
          </div>
          <div class="card-body">
            <figure>
              <blockquote class="blockquote">
                <p>{n.des}</p>
              </blockquote>
              {/* <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption> */}
            </figure>

          </div>
          <Link to={`/notesDetails/${n.id}`} className='btn btn-primary m-2'>Details</Link>
        </div>
      ))}

    </div>
  )
}

export default NotesApp
