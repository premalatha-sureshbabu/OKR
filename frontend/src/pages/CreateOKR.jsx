import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateOKR() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    await axios.post('http://localhost:5000/api/okrs', {
      title,
      description,
      dueDate,
    }, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 space-y-4">
      <h2 className="text-2xl font-bold text-center">Create OKR</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full" required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full" required />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="border p-2 w-full" required />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 w-full">Create</button>
    </form>
  );
}
