import { Component } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  displayAll: boolean = false;

  constructor() { }

  model = new Model();

  message: string = "Merhaba";

 

  addItem(value: string) {
    if(value != "") {
      this.model.items.push({description: value, action: false});
    } else {
      alert("You should add something!");
    }
  }

  getName() {
      return this.model.name;
  }

  getItems() {
    if(this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  displayCount() {
    return this.model.items.filter(i => i.action).length;
  }
}
