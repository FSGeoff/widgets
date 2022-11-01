import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import {options} from './arrays/Options';
import {items} from "./arrays/items";
import Translate from "./components/Translate";

export const App = () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>*/}
            {/*<Accordion items={items}/>*/}
            {/*<Search />*/}
            {/*{ showDropdown ?*/}
            {/*<Dropdown options={options}*/}
            {/*          selected={selected}*/}
            {/*          onSelectedChange={setSelected}/>*/}
            {/*    : null*/}
            {/*}*/}
            <Translate />
        </div>
    );
}

export default App;
