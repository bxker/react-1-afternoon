import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {   
                name: 'Jimmy Joe',
                title: 'Hack0r',
                age: 12,
                },
                {
                name: 'Jeremy Schrader',
                age: 24,
                hairColor: 'brown'
                },
                {
                name: 'Carly Armstrong',
                title: 'CEO',
                }
            ],
            userInput: '',
            filteredArray: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.filterResults = this.filterResults.bind(this)
    }

    handleChange(e) {
        this.setState({ userInput: e.target.value });
    }
    

    filterResults(prop){
        let array = [];
        let ufArray = this.state.unFilteredArray;

        for(let i = 0; i < ufArray.length; i++){
            if(ufArray[i].hasOwnProperty(prop)){
                array.push(ufArray[i])
            }
        }
        this.setState({filteredArray: array})
    }
    
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={ () => this.filterResults(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
            </div>
        )
    }
}