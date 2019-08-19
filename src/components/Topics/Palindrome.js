import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.palindromeCheck = this.palindromeCheck.bind(this)
    }
    handleChange(e){
        this.setState({ userInput: e.target.value });
    }

    palindromeCheck(userInput){
        let splitStr = userInput.split('')
        let reverseArr = splitStr.reverse();
        let joinArr = reverseArr.join('')

        if(userInput === joinArr){
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }


    }
    
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={() => this.palindromeCheck(this.state.userInput)}>Check if Palindrome</button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome }</span>
            </div>
        )
    }
}

