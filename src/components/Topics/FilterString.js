import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: ['hello', 'this', 'is', 'react'],
            userInput: '',
            filteredArray: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.filterNames = this.filterNames.bind(this)
    }
    
    handleChange(e){
        this.setState({ userInput: e.target.value });
    }

    filterNames(userInput){
        let newArr = [];
        let array = this.state.unFilteredArray;
        

        for (let i = 0; i < array.length; i++){
            if(array[i].includes(userInput)){
                newArr.push(array[i]);
            }
        }
        this.setState({ filteredArray: newArr})
    }

    render() {
        return (
        <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Names: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
            <input className="inputLine" onChange={this.handleChange}></input>
            <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
        </div>
        )
    }
}
