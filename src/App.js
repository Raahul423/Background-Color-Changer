
import { useState } from 'react';

function App() {
  let [color,setColor]=useState("olive");


  return (
    <div className='main' style={{backgroundColor:color}}>
      <div className='function'>
        <div className='btncover'>
          <div className='btn'>
            <button className='bttn' style={{backgroundColor:'Red'}} onClick={()=>setColor("red")}>RED</button>
            <button className='bttn'onClick={()=>setColor("yellow")} style={{backgroundColor:'yellow'}}>YELLOW</button>
            <button className='bttn'onClick={()=>setColor("green")} style={{backgroundColor:'green'}}>GREEN</button>
            <button className='bttn'onClick={()=>setColor("gray")} style={{backgroundColor:'gray'}}>GRAY</button>
            <button className='bttn'onClick={()=>setColor("brown")} style={{backgroundColor:'brown'}}>BROWN</button>
            <button className='bttn'onClick={()=>setColor("blue")} style={{backgroundColor:'blue'}}>BLUE</button>
            <button className='bttn'onClick={()=>setColor("purple")} style={{backgroundColor:'purple'}}>PURPLE</button>
            <button className='bttn'onClick={()=>setColor("white")} style={{backgroundColor:'white'}}>WHITE</button>
            <button className='bttn' onClick={()=>setColor("orange")} style={{backgroundColor:'orange'}}>ORANGE</button>
           
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
