import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  /**
   * Indicates that the route module is still being lazy loaded using a css spinner
   * or some other animation.
   * @var Boolean
   */
    moduleLoading : Boolean;

  /**
   * Form Group
   */
  options: FormGroup;
  
  constructor(
    private router : Router,
    private fb : FormBuilder
  ) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
   }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.moduleLoading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.moduleLoading = false;
      }
    });
  }

}
