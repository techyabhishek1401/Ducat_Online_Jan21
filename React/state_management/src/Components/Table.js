// import React, { Component } from 'react'

// export default class Table extends Component {

//     handleEdit=(task)=>{
//         console.log("task:",task);
//         console.log("1");
//         this.props.onEdit(task);
//     }
//     handleDelete=(task)=>{
//         this.props.onDelete(task)
//     }
//     render() {
//         console.log("tasks inside the Tbale:",this.props);
//         const {tasks}=this.props;
//         return (
//             <table border='2'>
//             <thead>
//                 <tr>
//                     <th>SNO.</th>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Department</th>
//                     <th>Edit</th>
//                     <th>Delete</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {tasks.map((task, index) => {

//                     return <tr key={`tr-${index}`}>
//                         <td>{index + 1}</td>
//                         <td>{task.name}</td>
//                         <td>{task.age}</td>
//                         <td>{task.department}</td>
//                         <td><button onClick={this.handleEdit.bind(this,task)}>Edit</button></td>
//                         <td><button onClick={this.handleDelete.bind(this, task)}>Delete</button></td>
//                     </tr>
//                 })}
//             </tbody>
//         </table>
//         )
//     }
// }

import React from 'react'

export default function Table({tasks,onEdit,onDelete}) {


    const handleEdit=(task)=>{
                console.log("task:",task);
                console.log("1");
                onEdit(task);
            }
     const handleDelete=(task)=>{
                onDelete(task)
            }
    return (
        <table border='2'>
             <thead>
                 <tr>                    
                      <th>SNO.</th>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Department</th>
                     <th>Edit</th>
                     <th>Delete</th>
                 </tr>
             </thead>
             <tbody>
                 {tasks.map((task, index) => {

                     return <tr key={`tr-${index}`}>
                         <td>{index + 1}</td>
                         <td>{task.name}</td>
                         <td>{task.age}</td>
                         <td>{task.department}</td>
                       <td><button onClick={handleEdit.bind(this,task)}>Edit</button></td>
                         <td><button onClick={handleDelete.bind(this, task)}>Delete</button></td>
                     </tr>
                 })}
            </tbody>
         </table>
    )
}
