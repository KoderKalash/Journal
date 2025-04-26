import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'

const Signup = () => {

    return (
        <div>
            <div>
                <h2>Journal</h2>
                <p>Capture.Build.Organise</p>
            </div>

            <div>
                <h1>Capture Your Thoughts</h1>
                <p>Sign Up with an Open account</p>
                <div>
                    <Link to="/"><button>Apple</button></Link>
                    <Link to="/"><button>Google</button></Link>
                    <Link to="/"><button>X</button></Link>
                </div>
            </div>

            <div><h4>or</h4></div>

            <div>
               <form action="">
                /////////
               </form>
            </div>
        </div>
    )
}

export default Signup
