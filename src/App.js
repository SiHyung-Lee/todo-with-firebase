import React, {Component} from 'react';
import TaskAdd from "./TaskAdd";
import TaskDisplay from "./TaskDisplay";

import {firestore} from './firebase';

class App extends Component {
    state = {
        tasks: [],
        task: ''
    };

    componentDidMount() {
        firestore.collection('tasks').get()
            .then(docs => {
                docs.forEach(doc => {
                    console.log(doc.data().todo + ' : ' + doc.id);
                });
            });
    }

    onClickHandler = (e) => {
        e.preventDefault();
        const task = {todo: this.state.task};
        const tasks = [...this.state.tasks, task];
        this.setState({
            tasks,
            task: ''
        });
    };

    onChangeHandler = (e) => {
        this.setState({
            task: e.target.value
        });
    };

    deleteHandler = (idx) => {
        const tasks = this.state.tasks.filter(
            (task, i) => i !== idx
        );
        this.setState({
           tasks
        });
    };

    render() {
        return (
            <div className="container">
                <TaskAdd
                    value={this.state.task}
                    changeHandler={this.onChangeHandler}
                    clickHandler={this.onClickHandler}
                />
                <div>
                    <TaskDisplay
                        tasks={this.state.tasks}
                        deleteHandler={this.deleteHandler}
                    />
                </div>
            </div>
        );
    }
}

export default App;
