import React, { useContext } from 'react';
import MyContext from '../components/MyContext';
import styles from '../Game/Game.module.css';

function Game(props) {

    const status = useContext(MyContext);

    console.log(status);

    return (
        <div className={styles.game}>
            <div className={styles.image}>
                <img src={props.game.image} alt="" />
            </div>
            <span>{props.game.id} </span>
            <h2>{props.game.name}</h2>
            <br />
            price: ${props.game.price}
            <br />
            status: {status}
        </div>
    )
}

export default Game;