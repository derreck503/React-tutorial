import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
    constructor(props) {
        super(props); // Needed when you declare a contructor
        console.log('[Persons.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] Inside componentWillRecieveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                position = {index}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
};

export default Persons;