import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('user'); 

    navigate('/');
  }, [navigate]);

  return (
    <div className="bg-white flex justify-center items-center min-h-screen">
      <h2 className="text-2xl font-bold">Logging out...</h2>
    </div>
  );
}

export default Logout;
