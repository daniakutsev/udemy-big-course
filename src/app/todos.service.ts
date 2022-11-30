import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";

export interface Todo {
  completed: boolean,
  title: string,
  id?: number
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    // @ts-ignore
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
  }

  getTodoByLimit(): Observable<Todo[]> {
    // @ts-ignore
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
  }

  getAllTodo(): Observable<Todo[]> {
    // @ts-ignore
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(delay(1500))
  }

  removeTodo(id?: number): Observable<void> {
    // @ts-ignore
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true})
  }
}
