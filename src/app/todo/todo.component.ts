import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  busy = {
    isAdding: false
  };

  todoId!: string;

  constructor(
    private fb : FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  addTodo() {
    this.busy.isAdding = true;
    let form = this.addTodoForm.value;
    let newTodo = {
      id: uuidv4(),
      label: form.label,
      priority: form.priority,
      done: false
    };
    this.todos.push(newTodo);
    this.busy.isAdding = false;
    this.addTodoForm.reset();
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
    let form = {
      label: ['', [Validators.required]],
      priority: ['', [Validators.required]]
    };
    this.addTodoForm = this.fb.group(form);
  }
}
