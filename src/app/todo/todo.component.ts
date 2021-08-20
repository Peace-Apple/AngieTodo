import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  addTodoForm!: FormGroup;
  todos = [
    {
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
      label: form.label,
      priority: form.priority,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo: any) {
    this.todos = this.todos.filter(t => t.label != todo.label);
  }

  private createForm() {
    this.addTodoForm = this.fb.group({
      label: '',
      priority: ''
    });
  }
}
