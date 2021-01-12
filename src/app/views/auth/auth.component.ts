import { Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faLockOpen, faUser, faAt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  /**
   * Font awesome lock open icon
   */
  unlockIcon = faLockOpen;

  /**
   * Font awesom user icon
   */
  userIcon = faUser;

  /**
   * Email '@' Icon
   */
  atIcon = faAt;

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
    private authService : AuthService
  ) { 
    this.isRequestProcessing = false;
    this.invalidLogin = false;

    this.pageTitle.setTitle(this.title)
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
      remember : new FormControl('')
    })
  }

  /**
   * Login the user with needed credentials
   * @param None
   */
  doLogin(){
    this.isRequestProcessing = true;

    this.authService.login(this.loginForm.value)
      .subscribe(result => {
        if(result)
          this.router.navigate(['/admin/dashboard']);
        else{
          this.isRequestProcessing = false;
          this.invalidLogin = true;
        }
      })
  }

}
