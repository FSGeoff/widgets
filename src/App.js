import React from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
            {/*<Accordion items={items}/>*/}
            <Search />
        </div>
    );
}

export default App;
