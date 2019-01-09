import { Component, OnInit } from '@angular/core';
import { LinkedinService } from '../linkedin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  users: Object; 

  constructor(private data: LinkedinService) { 

  }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users)
    })
  }



}






















