import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarLeftComponent } from './sidebar-left.component';

describe('SidebarComponent', () => {
  let component: SidebarLeftComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
