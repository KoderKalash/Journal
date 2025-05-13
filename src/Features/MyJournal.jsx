import React from 'react'
import { useState, useEffect } from 'react'
import Featurebar from '../Components/Featurebar';

const MyJournal = () => {
    const [entry, setEntry] = useState('');
    const [header, setHeader] = useState('My Journal');
    const [editing, setEditing] = useState(false);


    useEffect(() => {
        const stored = localStorage.getItem('Journal-Entries');
        const headerStored = localStorage.getItem('Journal-Header');
        if (stored) {
            setEntry(stored);
        }
        if (headerStored) {
            setHeader(headerStored);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('Journal-Entries', entry);

    }, [entry]);

    useEffect(() => {
        localStorage.setItem('Journal-Header', header);
    }, [header]);


    return (
        <div className='min-h-screen'>
            <Featurebar />
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
                    className="w-full h-[550px] p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none mb-4"
                    name="text"
                    id="notes"
                    placeholder='Write Your thoughts...'
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}></textarea>

                <div className='flex items-center justify-center gap-4'>
                   
                    {/* Doesn't work */}

                    <button className='text-[var(--primary-color)] text-sm font-semibold px-4 py-2 rounded-md shadow-sm bg-[var(--secondary-color)] hover:opacity-90 transition duration-200' >New Page</button>

                    {/* Works */}

                    <button className='text-sm font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-[var(--shadow-color)] transition duration-200' onClick={() => setEntry('')}>Clear Page</button>
                </div>
            </div>
        </div>
    )
}

export default MyJournal
