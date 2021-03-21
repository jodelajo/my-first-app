import React from 'react';
import './App.css';
import {RiHome2Line, RiRefreshLine, RiArrowLeftLine, RiMenuFill} from "react-icons/ri";
import {FaHotel} from "react-icons/fa";
import wadden from "./assets/plattegrond/wadden_roze.png";
import noordoost from "./assets/plattegrond/noordoost_roze.png";
import noordwest from "./assets/plattegrond/noordwest_roze.png";
import zuidwest from "./assets/plattegrond/zuidwest_roze.png";
import zuidoost from "./assets/plattegrond/zuidoost_roze.png";


function App() {
    return (
        <>
            <section>
                <nav>
                    <RiMenuFill className="icon-bar"/>
                    <h1>It beste plakje fan Fryslân</h1>
                </nav>
                <h2>Zoek het dorpscafé met het mooiste weer</h2>
                <FaHotel className="icon-cafe"/>
                <main>
                    <img src={wadden} id="wadden" alt="wadden"/>
                    <img src={noordwest} id="noordwest" alt="noordwest" href="#"/>
                    <img src={noordoost} id="noordoost" alt="noordoost"/>
                    <img src={zuidwest} id="zuidwest" alt="zuidwest"/>
                    <img src={zuidoost} id="zuidoost" alt="zuidoost"/>
                </main>
                <div id="hot-cold">
                    <button type="button" id="cold">Sign in</button>
                    <button type="button" id="hot">Log in</button>
                </div>
            </section>
            <footer>
                <p className="icon"><RiArrowLeftLine/></p>
                <p className="icon"><RiHome2Line/></p>
                <p className="icon"><RiRefreshLine/></p>

            </footer>
        </>
    );
}

export default App;
