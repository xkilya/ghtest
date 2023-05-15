import React, { useState } from 'react';

function Input(props) {
    const [gamesBase, setGamesBase] = useState({
        name: '',
        price: '',
        image: '',
    });
    const [name, setName] = useState('');

    const createGame = e => {
        e.preventDefault()
        const price = gamesBase.price
        props.setGames(
            (prev) => ([...prev, {id: prev.length + 1, price, name}])
        )
        console.log(gamesBase)
    }

    return ( 
        <div>
            <form>
                <input placeholder="Name" type="text" onChange={e => setName(e.target.value)} value={name} />
                <br />
                <input placeholder="Price" type="text" onChange={e => setGamesBase(prev => ({...prev, price: e.target.value}))} value={gamesBase.price} />
                <br />
                <input placeholder="Image" type="text" onChange={e => setGamesBase(prev => ({...prev, image: e.target.value}))} value={gamesBase.image} />
                <br />
                <button onClick={createGame}>Create</button>
            </form>
        </div>
     );
}

export default Input;