import React from 'react';

// Styling files can be imported into script files
import './App.css';
import {Button} from "./components/button/button";
import {CounterManagement} from './components/counter-management/counter-management';

// Only the App.tsx gets changed in an React app
function App() {
    return (
        <>
            <h1>Tutorial Showcase</h1>
            <p>These components are based on the "Master Class: React + Typescript 2021 Web Development"
                from Udemy by "Rysher Magbanua"
            </p>
            {/* Comments in JSX must be written in curly braces */}

            <h2>Props</h2>
            {/* button can be type primary or default */}
            <Button type={'primary'}>Primary</Button>
            <Button type={'default'}>Default</Button>

            <h2>State</h2>
            <CounterManagement ownerName={'Peter Müller'}/>
        </>
    );
}

export default App;
