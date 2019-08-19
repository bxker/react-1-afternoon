import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.solveToyProblem = this.solveToyProblem.bind(this)
    }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

   solveToyProblem(){
        let array = this.state.userInput.split(',');
        let even = [];
        let odd = [];

        for (let i = 0; i < array.length; i++){
            if ( array[i] % 2 === 0){
                even.push(parseInt(array[i], 10))
            }else {
                odd.push(parseInt(array[i], 10))
            }
        }
        this.setState({ evenArray: even, oddArray: odd })
    }
    
    render(){
        console.log(this.state)
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={this.solveToyProblem} > Split </button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}