import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  addTodoForm!: FormGroup;
  todos: any[] = [
    {
      id: uuidv4(),
      label: 'Complete skills Assessment',
      done: false,
      priority: 4
    }
  ]

  constructor(
    private fb : FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  addTodo() {
    let form = this.addTodoForm.value;
    let newTodo = {
      id: uuidv4(),
      label: form.label,
      priority: form.priority,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todoId: string) {
    this.todos = this.todos.filter(t => t.id != todoId);
  }

  completeTodo(todoId: string) {
    this.todos.map(todo => {
      todo.id == todoId ?
      todo.done = true :
      null;
    })
  }

  private createForm() {
    this.addTodoForm = this.fb.group({
      label: '',
      priority: ''
    });
  }
}
