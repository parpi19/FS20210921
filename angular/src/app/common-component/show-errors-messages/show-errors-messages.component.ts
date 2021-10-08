import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-errors-messages',
  templateUrl: './show-errors-messages.component.html',
  styleUrls: ['./show-errors-messages.component.scss']
})
export class ShowErrorsMessagesComponent implements OnInit {

  @Input() message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
