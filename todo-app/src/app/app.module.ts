import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemListComponent } from './components/todo-item-list/todo-item-list.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    TodoItemListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
