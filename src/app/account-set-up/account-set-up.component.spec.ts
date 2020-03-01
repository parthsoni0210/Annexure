import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSetUpComponent } from './account-set-up.component';

describe('AccountSetUpComponent', () => {
  let component: AccountSetUpComponent;
  let fixture: ComponentFixture<AccountSetUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSetUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
