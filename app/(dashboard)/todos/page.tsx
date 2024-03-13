import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await getData();
  console.log(todos);
  return (
    <div>
      todos page
      <div>todos list:</div>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
