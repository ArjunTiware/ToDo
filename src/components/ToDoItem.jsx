import React, { useState } from 'react';

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="flex-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span
          className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
        >
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`px-3 py-1 rounded ${
            todo.completed
              ? 'bg-yellow-500 hover:bg-yellow-600'
              : 'bg-green-500 hover:bg-green-600'
          } text-white`}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
        <button
          onClick={handleEdit}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;