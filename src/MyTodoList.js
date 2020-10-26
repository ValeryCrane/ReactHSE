import React from 'react';
import './MyTodoList.css';

class MyTodoList extends React.Component{
    state = {
        tasks: [
            {
              id: 1,
              name: 'Shopping',
              description: 'Buy a toothpaste',
              completed: false
            },
            {
              id: 2,
              name: 'Workout',
              description: 'Do one pushup',
              completed: false
            },
            {
              id: 3,
              name: 'Studying',
              description: 'Homework needs to be done',
              completed: false
            },
            {
              id: 4,
              name: 'Degustation',
              description: 'Try new toothpaste',
              completed: false
            },
            {
              id: 5,
              name: 'Best friend',
              description: 'Buy a cat',
              completed: false
            }
            ]
    };
    
    copyState = () => {
        let arr = [];
        for(let obj of this.state.tasks){
            arr.push({
                id: obj.id,
                name: obj.name,
                description: obj.description,
                completed: obj.completed
            });
        }
        return{
            tasks: arr
        }
    }
    
    markAsCompleted = (props) => {
        let newState = this.copyState();
        for(let obj of newState.tasks){
            if(obj.id == props){
                obj.completed ^= true;
            }
        }
        this.setState(newState);
    }
    
    completedTask = {
        textDecoration: "line-through",
        color: "gray"
    }
    
    grayColor = {
        color: "gray",
        borderColor: "gray"
    }
    
    
    createTask = (props) => {
        let completion = "";
        let idAndButtonStyle = {};
        let taskStyle = {};
        if(props.tasks.completed){
            completion = "de-complete";
            idAndButtonStyle = this.grayColor;
            taskStyle = this.completedTask;
        }
        else{
            completion = "complete";
        }
        return <div className="task">
          <div className="id-div">
              <p style={idAndButtonStyle}>{props.tasks.id}</p>
          </div>
          <div className="info-div"> 
              <h1 style={taskStyle}>{props.tasks.name}</h1>
              <p style={taskStyle}>{props.tasks.description}</p>
                <button onClick={()=>this.markAsCompleted(props.tasks.id)} style={idAndButtonStyle}>
                    {completion}
              </button>
          </div>
          <hr/>
        </div>
    }
    
    render(){
        return <div>
          {
            this.state.tasks.map(task =>{
              return <this.createTask tasks={task} key={task.id} />
            })
          }
        </div>
    }
}

export default MyTodoList;

