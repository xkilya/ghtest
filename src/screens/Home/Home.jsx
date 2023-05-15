import React from 'react';
import { useState } from 'react';
import '../../assets/styles.css';
import {games as gamesData} from '../Game/games.data';
import Flter from '../UI/Filter';
import Games from '../UI/Games';
import Input from '../UI/Input'
import MyContext from '../components/MyContext';

function Home(props) {

    const [priceFilter, setpriceFilter] = useState(0);

    const [games, setGames] = useState(gamesData);

    function handleIncrement() {
        setpriceFilter(priceFilter + 10)
        console.log("+")
    }
    
    function handleDecrement() {
        setpriceFilter(priceFilter - 10)
        console.log("-")
    }    

    const status = "available";

    return(
        <div>
            <h1>Games</h1>
            <br />
            <Input setGames={setGames} />
            <br />
            <span>home filter = {priceFilter}</span>
            <MyContext.Provider value={status}>
                <Games priceFilter={priceFilter} games={games} />
            </MyContext.Provider>
            <Flter priceFilter={priceFilter} increment={handleIncrement} decrement={handleDecrement}/>
        </div>
    )
}

export default Home