import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videolink = '../../../assets/vid1.mp4';
  constructor(public userService: UserService) {}

  ngOnInit(): void {}
}
