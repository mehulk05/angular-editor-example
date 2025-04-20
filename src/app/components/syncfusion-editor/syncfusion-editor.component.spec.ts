import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfusionEditorComponent } from './syncfusion-editor.component';

describe('SyncfusionEditorComponent', () => {
  let component: SyncfusionEditorComponent;
  let fixture: ComponentFixture<SyncfusionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SyncfusionEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncfusionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
