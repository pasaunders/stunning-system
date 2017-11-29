import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  people : object[]

  constructor() { }

  ngOnInit() {
    this.people = [
      {'email': 'Bill@gates.com', 'important': true, 'subject': 'stuff', 'content': 'other stuff'},
      {'email': 'ada@lovelace.com', 'important': true, 'subject': 'stuff', 'content': 'other stuff'},
      {'email': 'john@carmac.com', 'important': false, 'subject': 'stuff', 'content': 'other stuff'},
      {'email': 'gabe@newell.com', 'important': false, 'subject': 'stuff', 'content': 'other stuff'},
    ]
  }

}
