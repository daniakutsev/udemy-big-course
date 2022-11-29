import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay} from "rxjs";

export interface Todo {
  completed: boolean,
  title: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  todos: Todo[] = []
  todoTitle: string = ''
  loading = false

  constructor(private http: HttpClient) {
  }

  getTodoByLimit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe(response => {
        this.todos = response
      })
  }

  getAllTodo(): void {
    this.loading = true
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(delay(1500))
      .subscribe(response => {
        this.todos = response
        this.loading = false
      })
  }

  getTodoById(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/201')
      .subscribe(response => {
        this.todos = response
      })
  }

  ngOnInit(): void {
    this.getTodoByLimit()
  }


  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false
    }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(response => {
        console.log(response)
        this.todos.push(response)
        this.todoTitle = ''
      })

  }

  removeTodo(id?: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(response => {
        console.log(response)
        // @ts-ignore
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }
}
