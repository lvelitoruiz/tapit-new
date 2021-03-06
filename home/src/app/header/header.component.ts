import {Component, OnDestroy} from '@angular/core';
import {of} from 'rxjs';
import {environment} from '../../environments/environment';
import {UserAccount} from '../user/user-account';
import firebase from 'firebase/app';
import 'firebase/remote-config';
import remoteConfig = firebase.remoteConfig;
import {AngularFireRemoteConfig} from '@angular/fire/remote-config';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  user: UserAccount;
  marketUrl = environment.marketUrl;
  showLoginButton = false;
  showMicrogifting = false;

  constructor(
    private afs:AngularFireRemoteConfig,
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {
    this.angularFireAuth.user
    .pipe(switchMap(user => {
      return user ? this.angularFirestore.collection('user_account_tap').doc(user.uid).valueChanges() : of(null);
    }))
    .subscribe(user => {
      this.user = user;
      this.showLoginButton = !this.user;
    })
  }

  setMenu(event: any) {
    if (event.target.checked) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  loginCloseMenu() {
    document.getElementById('toggleMenu').click()
  }

  ngOnDestroy(): void {
    //this.userSubscription.unsubscribe();
  }
  
  ssoOpen():void {
    ssoApp.showApp();
  }
}
