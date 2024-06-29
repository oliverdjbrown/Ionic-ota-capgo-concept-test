import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificationFlowPage } from './certification-flow.page';

describe('CertificationFlowPage', () => {
  let component: CertificationFlowPage;
  let fixture: ComponentFixture<CertificationFlowPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationFlowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
