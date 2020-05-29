import {Injectable} from '@angular/core';
import {from} from 'rxjs';
import {auth} from 'firebase';
import {mergeMap, switchMap} from 'rxjs/operators';
import {UserDAO} from '../user-dao.service';
import {AuthService} from './user-authentication-service/auth.service';
import {UserAccount} from '../../models/user-account.model';
import FacebookAuthProvider = auth.FacebookAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  private facebookAuthProvider: FacebookAuthProvider;

  constructor(private userDAO: UserDAO, private authenticationService: AuthService) {
    this.facebookAuthProvider = new FacebookAuthProvider();
    this.facebookAuthProvider.addScope('user_birthday');
  }

  login() {
    return from(auth().signInWithPopup(this.facebookAuthProvider))
      .pipe(mergeMap((facebookResponse) => {
        const userData = this.parseUserData(facebookResponse);
        return this.userDAO.checkUser(userData);
      }))
      .pipe(switchMap(() => {
        return this.userDAO.get(auth().currentUser.uid);
      }))
      .pipe(switchMap((user: UserAccount) => {
        return this.authenticationService.setCurrentUser(user);
      }));
  }

  private parseUserData(facebookResponse) {
    return {
      email: facebookResponse.additionalUserInfo.profile.email,
      firstName: facebookResponse.additionalUserInfo.profile.first_name,
      lastName: facebookResponse.additionalUserInfo.profile.last_name,
      birthDate: (new Date(facebookResponse.additionalUserInfo.profile.birthday)).toISOString()
    };
  }
}
