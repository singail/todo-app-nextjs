import Todo from './Todo';

const TodoList = ({ todos }) => {
  console.log('list:', todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
