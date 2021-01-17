import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  /**
   * Page title
   * @var string
   */
  pageTitle = '3roth App | Dashboard';

  constructor(
    private title : Title
  ) { 
    this.title.setTitle(this.pageTitle)
  }

  ngOnInit(): void {
  }

}
