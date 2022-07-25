import { Component, OnInit, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Meetup } from 'src/app/core/models/Meetup';

@Component({
  selector: 'app-card-meetup',
  templateUrl: './card-meetup.component.html',
  styleUrls: ['./card-meetup.component.css'],
})
export class CardMeetupComponent implements OnInit {
  @Input() meetup: Meetup;

  constructor() {}

  ngOnInit() {}
}
