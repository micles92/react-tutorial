import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value'
    }

    switchNameHandler = () => {
        //DONT DO THIS, REACT CANT RECONIZE THIS AND WON'T PICK UP ANY ACTION ->  this.state.persons[0].name = 'Maxsimus';
        this.setState({
            persons: [
                {name: 'Maximilian', age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ]
        })
    }


    render() {
        return (
            <div className="App">
                <h1>Hi, Im a react app</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Racing</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
