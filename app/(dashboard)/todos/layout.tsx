import NewTodoForm from '@/components/NewTodoForm';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <h1>Dashboard</h1>
      <NewTodoForm />
      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;
