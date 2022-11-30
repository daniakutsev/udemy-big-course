import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "./todos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  todos: Todo[] = []

  todoTitle: string = ''
  loading = false

  constructor(private todosService: TodosService) {
  }

  // @ts-ignore
  getTodoByLimit() {
    this.todosService.getTodoByLimit()
      .subscribe(response => {
        this.todos = response
      })
  }

  getAllTodo(): void {
    this.loading = true
    this.todosService.getAllTodo()
      .subscribe(response => {
        this.todos = response
        this.loading = false
      })
  }


  ngOnInit(): void {
    this.getTodoByLimit()
  }


  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      completed: false
    })
      .subscribe(response => {
        console.log(response)
        this.todos.push(response)
        this.todoTitle = ''
      })

  }

  removeTodo(id?: number) {
    this.todosService.removeTodo(id)
      .subscribe(response => {
        console.log(response)
        // @ts-ignore
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
        // @ts-ignore
        this.todos.find(t => t.id === todo.id).completed=true
      })
  }
}
