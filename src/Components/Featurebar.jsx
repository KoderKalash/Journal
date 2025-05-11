import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Home,
  NotebookText,
  CheckSquare,
  CalendarCheck,
  Map,
  Calendar,
  Book,
  ArrowBigRightDash,
  ArrowBigLeftDash,
} from 'lucide-react';

const menuItems = [
  { icon: <Home className="w-5 h-5" />, label: 'Home' },
  { icon: <NotebookText className="w-5 h-5" />, label: 'My Journal' },
  { icon: <CheckSquare className="w-5 h-5" />, label: 'To-do' },
  { icon: <CalendarCheck className="w-5 h-5" />, label: 'Habit Tracker' },
  { icon: <Map className="w-5 h-5" />, label: 'Roadmap' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Calendar' },
  { icon: <Book className="w-5 h-5" />, label: 'Flashcards' },
];

const Featurebar = () => {
  const { user, isAuthenticated } = useAuth0();
  const [isOpen, setOpen] = useState(true);

  return (
    <div className={`hidden md:flex fixed top-5 left-5 ${isOpen ?'w-60 h-[60vh]' : 'w-14 h-[8vh]'} bg-[var(--secondary-color)] text-[var(--primary-color)] flex-col rounded-xl p-4 shadow-xl transition-all duration-300`}>
      <div className="flex justify-end">
        <button onClick={() => setOpen(!isOpen)} className='cursor-pointer'>
          {isOpen ? <ArrowBigLeftDash /> : <ArrowBigRightDash />}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="text-lg font-bold px-2 pt-2">
            Hi{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {isAuthenticated && user?.name ? user.name : 'User'}!
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a2a2a] rounded-lg cursor-pointer transition duration-200"
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Featurebar;
