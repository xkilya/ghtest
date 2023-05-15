import React from 'react'
import Game from '../Game/Game'

function Games(props) {

    const filteredGames = props.games.filter(game => (game.price > props.priceFilter))

    return ( 
        <div>
            
            <span>games filter = {props.priceFilter}</span>
            <br />
            {filteredGames.map(game => (
                    <Game key={game.id} game={game}/>
                ))
            }
        </div>
     );
}

export default Games;