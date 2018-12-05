import { Component, OnInit } from '@angular/core';
import { TodoItemService } from '../../service/todo-item.service';;

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
