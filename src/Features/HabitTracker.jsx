import React from 'react'
import { useState, useEffect } from 'react'

const HabitTracker = () => {
    const [habitName, setHabitName] = useState("");
    const [duration, setDuration] = useState("");
    const [days, setDays] = useState([]);
    const [submitted, setsubmitted] = useState(false);

    const handleSubmit = () => {
        const numDays = parseInt(duration);
        if (!habitName || isNaN(numDays) || numDays < 1 || numDays > 365) return;

        setDays(new Array(numDays).fill(false));
        setsubmitted(true);
    }

    const toggleDay = (index) => {
        const updated = [...days];
        updated[index] = !updated[index];
        setDays(updated)
    }

    useEffect(() => {
        const savedHabit = JSON.parse(localStorage.getItem("habitData"));
        if (savedHabit) {
            setHabitName(savedHabit.habitName);
            setDuration(savedHabit.duration);
            setDays(savedHabit.days);
            setsubmitted(true);
        }
    }, []);

    useEffect(() => {
        if (submitted) {
            localStorage.setItem(
                "habitData",
                JSON.stringify({ habitName, duration, days })
            );
        }
    }, [habitName, duration, days, submitted]);


    const resetTracker = () => {
        localStorage.removeItem("habitData");
        setHabitName("");
        setDuration("");
        setDays([]);
        setsubmitted(false);
    };

    return (
        <div className="m-5 mx-auto p-6 max-w-3xl border rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Habit Tracker</h1>

            {!submitted ? (
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Habit Goal (e.g., Exercise)"
                        value={habitName}
                        onChange={(e) => setHabitName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="number"
                        placeholder="Duration (e.g., 30)"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:opacity-90"
                    >
                        Start Tracking
                    </button>
                </div>
            ) : (
                <div>
                    <h2 className="text-lg font-semibold mb-2">
                        {habitName} - {duration} Day Challenge
                    </h2>
                    <div className="grid grid-cols-7 gap-3">
                        {days.map((checked, index) => (
                            <div
                                key={index}
                                className={`w-10 h-10 flex items-center justify-center border rounded-md cursor-pointer transition ${checked ? "bg-green-500 text-white" : "bg-gray-100"
                                    }`}
                                onClick={() => toggleDay(index)}
                            >
                                {index + 1}
                            </div>
                        ))}
                        <button onClick={resetTracker}  className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:opacity-90">Reset Habit</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HabitTracker
