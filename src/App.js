import logo from './logo.svg';
import './App.css';
// import Children from './children';
import React from "react";

const App = () => {
  const handleClick = (e) => {
    e.target.src = "/img/cha3el.png"; 
    
  };

  return (
    <table border="1" cellPadding="5" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <img
              src="/img/tafi.png"
              alt="1"
              onClick={handleClick} style={{width:"60px"}}
            />
          </td>
          <td>
            <img
              src="/img/tafi.png"   alt="2"
              onClick={handleClick} style={{width:"60px"}}
            />
          </td>
          <td>
            <img
              src= "/img/tafi.png"
              alt="3"
              onClick={handleClick} style={{width:"60px"}}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/img/tafi.png"
              alt="4"
              onClick={handleClick} style={{width:"60px"}}
            />
          </td>
          <td>
            <img
              src="/img/tafi.png"
              alt="5"
              onClick={handleClick} style={{width:"60px"}}
            />
          </td>
          <td>
            <img
              src="/img/tafi.png"
              alt="6"
              onClick={handleClick} style={{width:"60px"}}
            />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/img/tafi.png "
              alt="7"
              onClick={handleClick} style={{width:"60px"}}
            />
          </td>
          <td>
            <img
              src="/img/tafi.png"
              alt="8"
              onClick={handleClick} style={{width:"60px"}}
            />
          </td>
          <td>
            <img
              src="/img/tafi.png"
              alt="9"
              onClick={handleClick} style={{width:"60px"}}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default App;
