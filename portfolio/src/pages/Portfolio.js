import React from 'react';
import PortfolioItems from '../components/PortfolioItems';
import Turnup from '../assets/turnup.png';//imported pics from all the project
import PasswordG from '../assets/pass.png';
import Porfolio1 from '../assets/portfolio.png';
import Quiz from '../assets/quiz.png';
import Spiral from '../assets/spiral.jpg';
import Workday from '../assets/workday.png';
import SQL from '../assets/sql.png';
import Rag from '../assets/rag.png';
import Gamesrus from '../assets/gamesrus.png';
//using portfolioitems to render the name and url of the projects
import '../styles/Portfolio.css';
export default function myPortfolio() {
  return (
    <div className='portfolio'>
      <div className='portfolioList'>
      <PortfolioItems name="Chat-with-MySql" image={SQL} url="https://github.com/siddz415/Chat-with-MySql-Openai" /> 
      <PortfolioItems name="Langchain-RAG" image={Rag} url="https://github.com/siddz415/Langchain-RAG" /> 
      <PortfolioItems name="GamesRUS" image={Gamesrus} url="https://github.com/siddz415/GamesRUS" /> 
        <PortfolioItems name="Turn Up" image={Turnup} url="https://github.com/siddz415/Turn-Up" /> 
        <PortfolioItems name="Password Generator" image={PasswordG} url="https://github.com/siddz415/Password-generator" />
        <PortfolioItems name="HTML/CSS Portfolio" image={Porfolio1} url="https://github.com/siddz415/My-personal-portfolio" />
        <PortfolioItems name="Code Quiz" image={Quiz} url="https://github.com/siddz415/Code-Quiz" />
        <PortfolioItems name="Spiral" image={Spiral} url="https://spiraltravel.herokuapp.com/"/>
        <PortfolioItems name="Work Day Schedular" image={Workday} url="https://github.com/siddz415/Work-Day-Scheduler"/>

      </div>
    </div>
  );
}
