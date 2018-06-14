import React, { Component } from 'react';
import Player from './Player';
import './App.css';

class App extends Component {
    state = {
        playersList: [
            {
                name: 'ivan',
                position: 'GK',
                team: 'Lokomotiv',
                number: 1
            },
            {
                name: 'slavozavur',
                position: 'Vodonoska',
                team: 'Up',
                number: 99
            }
        ],
        playersPositions: [
            'GK', 'Vodonoska', 'Napadatel'
        ],
        teams: [
            'Up', 'Lokomotiv', 'Levski'
        ],
        newPlayer: {
            name: '',
            position: '',
            team: ''
        }
    };

    changeNewPlayerName = (event) => {
        let name = event.target.value;
        let newPlayerCopy = { ...this.state.newPlayer};
        newPlayerCopy.name = name;

        this.setState({
            newPlayer: newPlayerCopy
        })
    };

    changeNewPlayerPosition = (event) => {
        let position = event.target.value;
        let newPlayerCopy = { ...this.state.newPlayer};
        newPlayerCopy.position = position;

        this.setState({
            newPlayer: newPlayerCopy
        })
    };

    changeNewPlayerTeam = (event) => {
        let team = event.target.value;
        let newPlayerCopy = { ...this.state.newPlayer};
        newPlayerCopy.team = team;

        this.setState({
            newPlayer: newPlayerCopy
        })
    };

    addNewPlayer = () => {
        console.log(this.state.newPlayer);
        this.setState({
            playersList: [
                this.state.newPlayer,
                ...this.state.playersList
            ]
        })
    };

    render() {
        return (
            <div className="App">
                {
                    this.state.playersList.map((player) => (
                        <Player name={player.name} position={player.position} team={player.team} key={player.number} />
                    ))
                }
                <form className="player-form">
                    <input value={this.state.newPlayer.name} type="text" onChange={(event) => this.changeNewPlayerName(event)}/>
                    <select value={this.state.newPlayer.position} onChange={(event) => {this.changeNewPlayerPosition(event)}}>
                        <option value="" selected> </option>
                        {
                            this.state.playersPositions.map((position) => (
                                <option value={position}>{position}</option>
                            ))
                        }
                    </select>
                    <select value={this.state.newPlayer.team} onChange={(event) => {this.changeNewPlayerTeam(event)}}>
                        <option value="" selected> </option>
                        {
                            this.state.teams.map((team) => (
                                <option value={team}>{team}</option>
                            ))
                        }
                    </select>
                    <button type="button" onClick={this.addNewPlayer}>Add</button>
                </form>
            </div>
        );
    }
}

export default App;
