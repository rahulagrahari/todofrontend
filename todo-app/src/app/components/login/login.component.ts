import { Component, OnInit } from '@angular/core';
import {TodoItemService} from '../../service/todo-item.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: TodoItemService) { }

  ngOnInit() {
  }

  loginUser($event){

  	event.preventDefault()
  	const target = event.target
  	const credentials = {
  		username:target.querySelector('#UserName').value,
  		password:target.querySelector('#Password').value 
  	}
  	console.log(credentials);
	this.auth.getUserDetails(credentials, 'login');
  }

}
