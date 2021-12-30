import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

const items = [
  {
    title: "What is React?",
    content: "React is a front end framework" 
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers" 
  },
  {
    title: "How do you use React?",
    content: "You use React by creating componets" 
  }
];

const options = [
  {
    label: "The color Red",
    valuew: "red"
  },
  {
    label: "The color Green",
    valuew: "green"
  },
  {
    label: "A shade of blue",
    valuew: "blue"
  }
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return(
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a Color"
          selected={selected}
          onSelectedChanged={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
  )
}

export default App;