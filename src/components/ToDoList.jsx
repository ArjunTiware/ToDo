import React from 'react';
import TodoItem from './ToDoItem';

function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;