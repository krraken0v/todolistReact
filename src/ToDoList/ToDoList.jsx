import { useState } from "react"
import styles from "./ToDoList.module.sass"


function ToDoList(){
    const [task,addTask] = useState([]);
    const [newTask,addInput] = useState("");
   
    function handleInputChange(event){
        addInput(event.target.value);
    }
    function handleTask(){
        if(newTask.trim()!==""){
            addTask(a=>[...a,newTask]);
            addInput("");
        }
        
    }
    function deleteItem(index){
        const updateTasks = task.filter((_,i)=>i!==index);
        addTask(updateTasks)
    }
    function moveUp(index){
        if(index>0){
            const updatedTasks = [...task];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            addTask(updatedTasks);
        }

    }
    function moveDown(index){
        if(index<task.length-1){
            const updatedTasks = [...task];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            addTask(updatedTasks);
        }

    }

    return(<div className={styles.container}>
        <h1>To-Do App</h1>
        <div>
        <input type="text" value={newTask} placeholder="Add your task" onChange={handleInputChange}/>
        <button onClick={handleTask}>Add</button>
        </div>
        <ul>
            {task.map((item,index)=><li key ={index}>
                <span className="text">{item}</span>
                <button className={styles.buttonDelete} onClick={()=>deleteItem(index)}>Delete</button>
                <button className="move-button" onClick={()=>moveUp(index)}>☝️</button>
                <button className="move-botton-down" onClick={()=>moveDown(index)}>👇</button> </li>)}
    
        </ul>
    </div>
    )
}
export default ToDoList