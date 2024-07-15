import React from 'react'

const Createnote = ({ inputText, setInputText, saveHandeler }) => {
    const char = 100;
    const charLeft = char - inputText.length;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <textarea
                className="w-full p-2 border border-gray-300 rounded mb-2"
                cols={10}
                rows={5}
                placeholder="Type...."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                maxLength={100}
            >
            </textarea>

            <div className="flex justify-between items-center">
                <span className="text-gray-600">{charLeft} left</span>  
                <button 
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={saveHandeler}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Createnote
