import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  people : object[] = [
    {email: 'Bill@gates.com', important: true, subject: 'stuff', content: 'other stuff'},
    {email: 'ada@lovelace.com', important: true, subject: 'stuff', content: 'other stuff'},
    {email: 'john@carmac.com', important: false, subject: 'stuff', content: 'other stuff'},
    {email: 'gabe@newell.com', important: false, subject: 'stuff', content: 'other stuff'},
  ]
}
