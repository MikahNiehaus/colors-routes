import React from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

function Home()
{

  const history = useHistory();
     
  const data = [
    { 
      value: 1,
      label: "red"
       
    },
    {
      value: 2,
      label:  "blue"
    },
    {
      value: 3,
      label: "yellow"
    },
    {
      value: 4,
      label: "green"
    },
   
  ];


  function openRoute (opt) {
    console.log(opt.label, opt.value)
    history.push(`/${opt.label}`);
   }
 
 
    return (
        <div className="App">
         
        <div className="app">
     <div className="container">
       <Select options={data}  onChange={opt => openRoute(opt)} />
     </div>
   </div>
     </div>
      );
}

export default Home;