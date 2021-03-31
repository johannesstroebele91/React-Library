import React from 'react';

// Styling files can be imported into script files
import './App.css';
import {Button} from "./components/button/button";

// Only the App.tsx gets changed in an React app
function App() {
    return (
        <>
            <h1>Headline</h1>
            {/* Comments in JSX must be written in curly braces */}
            {/* button can be type primary or default */}
            <Button type={'primary'}>Primary</Button>
            <Button type={'default'}>Default</Button>
        </>
    );
}

export default App;
