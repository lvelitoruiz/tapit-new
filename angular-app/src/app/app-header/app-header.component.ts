import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserAccount} from '../user/user-account.model';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';
import {environment} from '../../environments/environment';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {take} from 'rxjs/operators';
import firebase from 'firebase/app';
import 'firebase/remote-config';
import remoteConfig = firebase.remoteConfig;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  user: UserAccount;
  marketUrl = environment.marketUrl;
  showLoginButton = false;
  showMicrogifting = true;
  private userSubscription: Subscription;

  constructor(
    private userAuthenticationService: AuthService, 
    private route: ActivatedRoute, private router: Router
  ) { }

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

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.userAuthenticationService.getCurrentUser().pipe(take(1))
          .subscribe(user => {
            this.showLoginButton = !user && event.url !== '/auth/login';
          })
      }
    })

    this.userSubscription = this.userAuthenticationService.getCurrentUser()
      .subscribe(user => {
        this.user = user;
        this.showLoginButton = !user
      });

    remoteConfig().settings = {
      minimumFetchIntervalMillis: 900000,
      fetchTimeoutMillis: 60000
    };

    remoteConfig().defaultConfig = {
      microgifting_enabled: false
    };

    remoteConfig().fetchAndActivate().then(res => {
      this.showMicrogifting = remoteConfig().getBoolean('microgifting_enabled');
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
