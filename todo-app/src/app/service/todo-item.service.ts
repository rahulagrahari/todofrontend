import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

	baseUrl = '/api/todo/';

  constructor(private http: HttpClient) { }

  getUserDetails(credentials, type){
    console.log(JSON.stringify(credentials))
  	return this.http.post('login', (credentials))
    .subscribe(
  		data=>{
  			console.log(data)
  		}
  		)

  }
}

