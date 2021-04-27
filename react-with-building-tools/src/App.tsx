import React from 'react';

// Styling files can be imported into script files
import {Button} from "./components/button/button";
import {CounterManagement} from './components/counter-management/counter-management';

// Only the App.tsx gets changed in an React app
function App() {
    return (
        <>
            <h1>Tutorial Showcase</h1>

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
