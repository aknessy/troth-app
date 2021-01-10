import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
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
   * Current page title
   * @var string
   */
  title = '3roth App | Login';

  constructor(
    private pageTitle : Title,
    private fb : FormBuilder
  ) { 
    this.isRequestProcessing = false;
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

  }

}
