import React, { Component } from 'react'
import Table from '../Components/Table'
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0,
            department: "",
            id: 0,
            tasks: [],
            tmp: {},
            toUpdate: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = function (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    // handleNameChange=function(e){
    //     console.log(e.target.value)
    //     this.setState({ name: e.target.value })
    // }
    // handleAgeChange=function(e){
    //     this.setState({ age: e.target.value })
    // }
    // handleDepartmentChange=(e)=>{
    //     console.log("department:",e.target.value);
    //     this.setState({department:e.target.value})
    // }
    handelSubmit = () => {
        const { name, age, department, tasks, id } = this.state;
        let tmp_task = { name, age, department, id: Number(id)+ 1 };
        this.setState({ tasks: [...tasks, tmp_task], name: "", age: '', department: "", id: Number(id) + 1 }, () => {
            console.log("new Staet:", this.state)
        });

    }

    handleEdit = (record) => {
        console.log("2");
        console.log("record:",record)
        const { name, age, department } = record;
        this.setState({ name, age, department, toUpdate: true, tmp: record });
    }
    handleUpdate = () => {

        const { tasks, tmp ,name,age,department} = this.state;
        let previousTask = [...tasks];
        let task = previousTask.find((task) => task.id === tmp.id);
        const index=previousTask.indexOf(task);
        console.log("task:",task,index);
        previousTask[index]={...task,name,age,department};
        console.log("new Tasks:",previousTask);
        this.setState({tasks:previousTask})

    }

    handleDelete = (record) => {
        let previous= [ ...this.state.tasks ];
        let task = previous.find(task => task.id === record.id);
        const index=previous.indexOf(task);
        previous.splice(index,1);
        this.setState({tasks:previous})
    }
    render() {
        const { name, age, department, tasks, toUpdate } = this.state;
        return (
            <div>
                <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange} /> <br />

                <input type="number" placeholder="Age" value={age} name="age" onChange={this.handleChange} /> <br />

                <input type="text" value={department} placeholder="Department" name="department" onChange={this.handleChange} /> <br />


                {toUpdate ? <button onClick={this.handleUpdate}>Update</button> : <button onClick={this.handelSubmit}>Submit</button>}

            { tasks.length >0 && <Table 
                                   tasks={this.state.tasks}
                                   onEdit={this.handleEdit}
                                   onDelete={this.handleDelete}
                                   />}
      
            </div>
        )
    }
}
