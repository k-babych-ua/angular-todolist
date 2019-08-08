import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { IUser } from 'src/app/models/entities/IUser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user: IUser;

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {
    this.getAboutData();
  }

  public getAboutData(): void {
    this.githubService.getUserInfo("k-babich95")
      .then(user => {
        console.log(user);
        this.user = user;
      });
  }
}
