import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditcardFlowPage } from './creditcard-flow.page';

describe('CreditcardFlowPage', () => {
  let component: CreditcardFlowPage;
  let fixture: ComponentFixture<CreditcardFlowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardFlowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
