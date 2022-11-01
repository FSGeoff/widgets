import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import {languageOptions} from "../arrays/Options";
import Convert from './Convert';



const Translate = () => {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState('');

  return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter Text</label>
            <input value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
        <Dropdown
            label="Select a Language"
            selected={language}
            onSelectedChange={setLanguage}
            options={languageOptions}
        />
        <hr/>
        <h3 className={"ui header"}>Output</h3>
        <Convert text={text} language={language}/>

      </div>
  );
};

export default Translate;