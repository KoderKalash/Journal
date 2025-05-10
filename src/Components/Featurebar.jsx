import React from 'react'

const FeatureCard = ({ icon, title }) => {
    return (
        <div className='flex flex-col justify-center items-center bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition'>
            <div className='text-2xl mb-3'>{icon}</div>
            <h1 className='text-xl font-semibold mb-2'>{title}</h1>
        </div>
    )
}

const Featurebar = () => {
    return (
        <div className='flex flex-col items-center justify-center shadow-md'>
            <div className='text-3xl font-bold text-black mb-6'>
                <FeatureCard
                    icon="🏠"
                    title="Home"/>
                    
                <FeatureCard
                    icon="🗒️"
                    title="My Journal"
                />

                <FeatureCard
                    icon="✔️"
                    title="To-do"
                />

                <FeatureCard
                    icon="🎌"
                    title="Habit Tracker"
                />

                <FeatureCard
                    icon="🛣️"
                    title="Roadmap"
                />

                <FeatureCard
                    icon="📅"
                    title="Calendar"
                />

                <FeatureCard
                    icon="🎴"
                    title="Flashcards"
                />

            </div>
        </div>
    )
}

export default Featurebar
