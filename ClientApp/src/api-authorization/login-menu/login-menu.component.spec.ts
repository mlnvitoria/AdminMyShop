import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMenuComponent } from './login-menu.component';
import { MatListItem } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

describe('LoginMenuComponent', () => {
  let component: LoginMenuComponent;
  let fixture: ComponentFixture<LoginMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginMenuComponent],
      imports: [
        MatListItem,
        MatMenuModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
