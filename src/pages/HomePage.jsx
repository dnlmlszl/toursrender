import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <div className="outlet-container ">
        <Outlet />
      </div>
    </main>
  );
};

export default HomePage;
