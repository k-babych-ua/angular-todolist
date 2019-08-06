import { Injectable } from '@angular/core';
import { IUser } from '../models/entities/IUser';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl:string = "https://github.com/";

  constructor() { }

  public getUserInfo(username: string): Promise<IUser> {
    return fetch(`${this.baseUrl}/users/${username}`)
      .then(response => response.json())
      .then(user => { 
        return <IUser> {
          id: user.id,
          avatarUrl: user.avatar_url,
          url: user.url,
          bio: user.bio,
          email: user.email,
          location: user.location,
          name: user.name,
          publicReposAmount: user.public_repos
      }});
  }
}
