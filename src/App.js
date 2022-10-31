import React from 'react';
import Accordion from "./components/Accordion";

const items = [
    {
        title: 'What is React?',
        content: 'A front-end Javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'Because its dope!'
    },
    {
        title: 'How do you use React?',
        content: 'Let\'s find out now'
    }
];


export const App = () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}

export default App;
