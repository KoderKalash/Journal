import React from 'react'
import { useState, useEffect } from 'react'

const MyJournal = () => {
    const [entry, setEntry] = useState('');
    const [header, setHeader] = useState('My Journal');
    const [editing, setEditing] = useState(false);


    useEffect(() => {
        const stored = localStorage.getItem('Journal-Entries');
        if (stored) {
            setEntry(stored);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('Journal-Entries', entry);
    }, [entry]);


    return (
        <div className='p-6 max-w-4xl mx-auto mt-10'>
            {editing ? (
                <input
                    type="text"
                    value={header}
                    onChange={(e) => setHeader(e.target.value)}
                    onBlur={() => setEditing(false)}
                    autoFocus
                    className="text-2xl font-bold text-center text-[var(--secondary-color)] border-b-2 border-[var(--secondary-color)] bg-transparent outline-none"
                />
            ) :

                (<h1 onClick={() => setEditing(true)} className='text-2xl font-bold text-center mb-4 text-[var(--secondary-color)]'>
                    {header}
                </h1>)}

            <textarea
                className="w-full h-[800px] p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                name="text"
                id="notes"
                placeholder='Write Your thoughts...'
                value={entry}
                onChange={(e) => setEntry(e.target.value)}></textarea>
        </div>
    )
}

export default MyJournal
