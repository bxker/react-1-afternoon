import React, {Component} from 'react';

export default class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.numberOneChange = this.numberOneChange.bind(this)
        this.numberTwoChange = this.numberTwoChange.bind(this)
        this.addStuff = this.addStuff.bind(this)
    }
    
    numberOneChange(e){
        this.setState({number1: parseInt(e.target.value, 10)})
    }

    numberTwoChange(e){
        this.setState({number2: parseInt(e.target.value, 10)})
    }

    addStuff(number1, number2){
        this.setState({sum: number1 + number2})
    }

    render(){
        return(
        <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" onChange={this.numberOneChange}></input>
            <input className="inputLine" onChange={this.numberTwoChange}></input>
            <button className="confirmationButton" onClick={ () => this.addStuff(this.state.number1, this.state.number2)}>Add</button>
            <span className="resultsBox"> Sum: {this.state.sum} </span>
        </div>
        )
    }
}
