import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';
import { MoveModel } from '../models/move.model';
import { User } from '../models/user.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private KEY = 'user';
  private _user: User;
  private _user$ = new BehaviorSubject<User>(
    this.UtilsService.load(this.KEY) || null
  );
  public user$ = this._user$.asObservable();

  constructor(private UtilsService: UtilsService) {}

  public singup(name: string): void {
    let user = this.UtilsService.load(this.KEY);
    if (!user) {
      let newUser = new User();
      newUser.name = name;
      this.UtilsService.store(this.KEY, newUser);
      this._user = newUser;
    }
    this._user$.next(this._user);
  }

  getUser() {
    return this.user$;
  }

  public addMove(contact: Contact, amount: number): void {
    let newMove = new MoveModel(
      this.UtilsService.setId(),
      contact.name,
      Date.now(),
      amount
    );
    const editUser = { ...this._user$.value };
    console.log(editUser);

    editUser.coins -= amount;
    editUser.moves.unshift(newMove);
    this.UtilsService.store(this.KEY, editUser);
    this._user$.next(editUser);
  }
}
