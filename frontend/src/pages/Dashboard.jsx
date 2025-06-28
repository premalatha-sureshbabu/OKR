import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [okrs, setOkrs] = useState([]);

  useEffect(() => {
    const fetchOKRs = async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      const { data } = await axios.get('http://localhost:5000/api/okrs', {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      setOkrs(data);
    };

    fetchOKRs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My OKRs</h2>
      <Link to="/create-okr" className="bg-green-500 text-white px-4 py-2 mb-4 inline-block">Create New OKR</Link>
      <ul className="space-y-2">
        {okrs.map((okr) => (
          <li key={okr._id} className="border p-3">
            <h3 className="font-semibold">{okr.title}</h3>
            <p>{okr.description}</p>
            <p>Progress: {okr.progress}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
