import React from 'react'

const Note = ({ id, text, editHandler, deleteHandeler }) => {
  return (
    <div className="note bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="notebody text-gray-800">{text}</div>
      <div className="notefooter mt-4 flex justify-between">
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => deleteHandeler(id)}
        >
          Delete
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => editHandler(id, text)}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default Note
