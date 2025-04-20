import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeEditor5Component } from './cke-editor5.component';

describe('CkeEditor5Component', () => {
  let component: CkeEditor5Component;
  let fixture: ComponentFixture<CkeEditor5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CkeEditor5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CkeEditor5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
