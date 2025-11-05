import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Todo {
  id: string;
  title: string;
  description?: string;
}

interface TodosContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
}

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
};

interface TodosProviderProps {
  children: ReactNode;
}

export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      title: "NodeJs Requirements",
      description: "Learn Nest JS and Graph Ql with Mongoose",
    },
  ]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: title.trim(),
      description: undefined,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

