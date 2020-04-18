import React, { Component } from "react";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinput: "",
      taskArray: [
        {
          item:'',
          initial:true,
        }
      ],
      
    };
  }
  handleChange = (e) => {
    this.setState({
      userinput: e.target.value,
    });
  };
  add = (f) => {
    this.setState({
      taskArray: [...this.state.taskArray, {item:this.state.userinput,initial:false}],
      userinput: '',
      
    });
  };

  delete = (element) => {
    this.setState({
      taskArray: this.state.taskArray.filter((e) => e !== element),
    });
  };

    check = () => {
      this.setState({
        taskArray:this.state.taskArray.map(e=>{
          var aux=Object.assign({},e);
          aux.initial=false ? aux.initial=true : aux.initial=false;
        })    
      });
    };
  render() {
    return (
      <div className="todo">
        <div className="item-add">
          <input
            type="text"
            className="input-group m-2"
            placeholder="enter new Task"
            onChange={this.handleChange}
            value={this.state.userinput}
          />
          <button className="btn btn-primary " onClick={this.add}>
            Add Task
          </button>
        </div>
        <div className="added-list">
          {this.state.taskArray.map((el) => (
            <div className="task">
              <div
                className={
                  !el.initial ? "task-content" : "task-content text-deco"
                }
              >
                {el.item}
              </div>
              <button
                className="btn btn-danger m-2"
                onClick={() => this.delete(el)}
              >
                {" "}
                Delete{" "}
              </button>
              <button
                className="btn btn-warning m-2"
                onClick={() => this.check(el)}
              >
                {" "}
                {!el.initial ? "Complete" : "Undo"}{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
