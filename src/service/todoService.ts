/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";
import { TodoModel } from "models/redux-models";

export default {
  async getAllTodos() {
    var response = await Api().get("todos");
    return response.data;
  },

  async getParticularTodo(todo_id:number){
    var response = await Api().get("todo");
    return response.data.filter((todo:TodoModel)=>todo.id === todo_id)
  }
};
