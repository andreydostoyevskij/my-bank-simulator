import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetBankComponent } from './internet-bank.component';

describe('InternetBankComponent', () => {
  let component: InternetBankComponent;
  let fixture: ComponentFixture<InternetBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetBankComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternetBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
