import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";



const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className='flex flex-col justify-center items-center bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition'>
      <div className='text-2xl mb-3'>{icon}</div>
      <h1 className='text-xl font-semibold mb-2'>{title}</h1>
      <p className='text-[var(--paragraph-color)'>{desc}</p>
    </div>
  )
}

const TempCard = ({ icon, title, desc }) => {
  return (
    <div className='flex flex-col justify-center items-center bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition'>
      <div className='text-2xl mb-3'>{icon}</div>
      <h1 className='text-xl font-semibold mb-2'>{title}</h1>
      <p className='text-[var(--paragraph-color)'>{desc}</p>
    </div>
  )
}

const Landing = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  return (
    <div className='min-h-screen flex flex-col'>
      <section className='flex flex-col justify-center items-center px-4 py-12 border-[var(--shadow-color)]'>
        <h1 className='font-bold text-4xl md:text-6xl text-[var(--secondary-color)] mb-4'>For you and your thoughts</h1>
        <p className='font-semibold text-lg md:text-xl text-[var(--paragraph-color)]max-w-2xl mb-8'>Capture your thoughts, organize your goals, and build better habits — one entry at a time.</p>

        <div className='flex gap-2'>
          <Link className='bg-[var(--secondary-color)] text-[var(--primary-color)] text-sm font-semibold px-4 py-4 rounded-md shadow-sm hover:opacity-90 transition cursor-pointer'><button onClick={() => {
            loginWithRedirect();
          }}>Get Started</button></Link>
          {/* <Link to="/login" className='bg-[var(--primary-color)] text-[var(--secondary-color)] text-sm font-semibold px-4 py-4 rounded-md shadow-sm hover:bg-[var(--shadow-color)] transition cursor-pointer'><button>Login</button></Link> */}
        </div>
      </section>

      <section className='flex flex-col justify-center items-center px-4 py-12 bg-[var(--shadow-color)] border-[var(--shadow-color)]'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='font-bold text-2xl md:text-4xl text-[var(--secondary-color)] mb-4'>Your Journal is..</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <FeatureCard
              icon="🔐"
              title="Private & Secure"
              desc="Your entries are only visible to you. Everything is securely stored."
            />
            <FeatureCard
              icon="🧘"
              title="Simple & Clean"
              desc="Focus on writing, not on clutter. A distraction-free journaling experience."
            />
            <FeatureCard
              icon="📈"
              title="Productive & Efficient"
              desc="Track your habits, reflect on your goals, and keep improving daily."
            />
          </div>
        </div>
      </section>


      <section className='flex flex-col justify-center items-center px-4 py-12 border-b-1 border-[var(--shadow-color)]'>
        <div className='max-w-5xl mx-auto px-6'>
          <h2 className='font-bold text-2xl md:text-4xl text-[var(--secondary-color)] mb-4'>Try our templates.</h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <Link to="/MyJournal"><TempCard
              icon="🗒️"
              title="My Journal"
              desc="A place for you and all your ideas in one place." /></Link>

            <Link to="/ToDo"><TempCard
              icon="✔️"
              title="To-do"
              desc="Stay on top of your tasks and never miss a deadline."
            /></Link>

            <Link to="/habit"><TempCard
              icon="🎌"
              title="Habit Tracker"
              desc="Track your progress and improve your habits."
            /></Link>

            <Link to="/roadmap"><TempCard
              icon="🛣️"
              title="Roadmap"
              desc="Plan your future ahead of time and stay on track."
            /></Link>

            <Link to="/calendar"><TempCard
              icon="📅"
              title="Calendar"
              desc="Track your dates and events in one place."
            /></Link>

            <Link to="/flashcard"><TempCard
              icon="🎴"
              title="Flashcards"
              desc="Learn and memorize new things with ease."
            /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
