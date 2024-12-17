import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "./page2.css"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "green",
  }));

const Page2 = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const [isExpanded3, setIsExpanded3] = useState(false);

  const handleToggle3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  return (
    <>
    <Box sx={{ display:'flex', flexDirection: 'column', justifyContent:'space-evenly',flexGrow: 1 }}>
      <Item sx={{color: 'black', m: '25px',mr: '20%', ml: '20%'}}>
        <h1>The Olympic Games: A Celebration of Global Unity, Athleticism, and Tradition</h1>
        <span id="intro">
          Text
        </span>
        <button onClick={handleToggle} id="myBtn">
          {isExpanded ? "Read less" : "..."}
        </button>
        {isExpanded && (
        <span>
          <hr id="titlehr"/>
          <h2>A Brief History of the Olympic Games</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>The Modern Olympic Movement</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>The Olympic Spirit: Unity and Peace</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>The Olympics as a Showcase of Excellence and Inspiration</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Challenges and Controversies</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Conclusion</h2>
          <hr className="normalhr"/>
          Text
        </span>
        
        )}
      </Item>

      
      <Item sx={{color: 'black', mb: '20px', mr: '20%', ml: '20%'}}>
      <h1>De Antika Olympiska Spelen – Ursprung och Traditioner</h1>
        <span id="intro">
        Text
        </span>
        <button onClick={handleToggle2} id="myBtn">
          {isExpanded2 ? "Read less" : "..."}
        </button>
        {isExpanded2 && (
        <span>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Baron Pierre de Coubertin och de Moderna Olympiska Spelen
          </h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Den Första Kvinnan att Delta – Hélène de Pourtalès</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Jesse Owens - En Historisk Seger i Nazityskland</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Nadia Comăneci – Den Första Perfekta Tioren</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Miracle on Ice – USA
          Ishockeylag Slår Sovjetunionen 1980</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>När Michael Phelps Skrev Historia i Peking 2008</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Simone Biles och Frågan om Mental Hälsa</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Den Första Digitala och Publikfria OS – Tokyo 2021</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Sammanfattning</h2>
          <hr className="normalhr"/>
          Text
        </span>
        
        )}
      </Item>
      <Item sx={{color: 'black', mb: '20px', mr: '20%', ml: '20%'}}>
      <h1>The Olympic Games: A Celebration of Global Unity, Athleticism, and Tradition</h1>
        <span id="intro">
        Text
        </span>
        <button onClick={handleToggle3} id="myBtn">
          {isExpanded3 ? "Read less" : "..."}
        </button>
        {isExpanded3 && (
        <span>
          <hr id="titlehr"/>
          <h2>A Brief History of the Olympic Games</h2>
          <hr className="normalhr"/>
          Text 
          <hr className="normalhr"/>
          <h2>The Modern Olympic Movement</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>The Olympic Spirit: Unity and Peace</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>The Olympics as a Showcase of Excellence and Inspiration</h2>
          <hr className="normalhr"/>
          Text
          <hr className="normalhr"/>
          <h2>Challenges and Controversies</h2>
          <hr className="normalhr"/>
          Text          
          <hr className="normalhr"/>
          <h2>Conclusion</h2>
          <hr className="normalhr"/>
          Text
        </span>
        
        )}
      </Item>
      </Box>
    </>
  );
};

export default Page2;
