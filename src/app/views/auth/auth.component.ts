import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faLock, faUser, faAt, faRedo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  /**
   * Font awesome lock open icon
   */
  unlockIcon = faLock;

  /**
   * Font awesom user icon
   */
  userIcon = faUser;

  /**
   * Email '@' Icon
   */
  atIcon = faAt;

  /**
   * Refresh/redo Icon
   */
  refreshIcon = faRedo;

  /**
   * Login Form
   * @var FormGroup
   */
  loginForm : FormGroup;

  /**
   * If a request is being processed
   * @var boolean
   */
  isRequestProcessing : boolean;

  /**
   * Checks for login validity
   * @var boolean
   */
  invalidLogin : boolean;

  /**
   * Current page title
   * @var string
   */
  title = '3roth App | Login';

  constructor(
    private pageTitle : Title,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute,
    private authService : AuthService
  ) { 
    this.isRequestProcessing = false;
    this.invalidLogin = false;

    this.pageTitle.setTitle(this.title)
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(8)]),
      remember : new FormControl('')
    })
  }

  /**
   * Login the user with needed credentials
   * @param None
   */
  doLogin(){
    this.isRequestProcessing = true;
    
    let email = this.loginForm.get('email').value;
    let password = this.loginForm.get('password').value;
    let remember = (this.loginForm.get('remember').value == 1 ? true : false);
    
    const credentials = {
      'email' : email,
      'password' : password,
      'remember' : remember
    };
    
    this.authService.login(credentials)
      .subscribe((response) => {
        if(response){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/admin/dashboard'])
        } 
      }, (error) => {
        this.invalidLogin = true;
        this.isRequestProcessing = false;
      })
  }

}
