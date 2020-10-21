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
              completed: true
            },
            {
              id: 3,
              name: 'Studying',
              description: 'Homework needs to be done',
              completed: true
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
    
    createTask = (props) => {
        let completion = "";
        if(props.tasks.completed) completion = "Completed";
        else completion = "Is not completed";
        return <div className="task">
          <div className="id-div">
              <p>{props.tasks.id}</p>
          </div>
          <div className="info-div"> 
              <h1>{props.tasks.name}</h1>
              <p>{props.tasks.description}</p>
              <p className="completion">{completion}</p>
              <button onClick={()=>console.log(`Task ${props.tasks.id} completed status = ${props.tasks.completed}`)}>
                  Completion
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

