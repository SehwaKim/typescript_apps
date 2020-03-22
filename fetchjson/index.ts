import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const json = axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(id,finished,title);
});



const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  id: ${id} 
  title: ${title} 
  finished: ${completed}
  `);
}