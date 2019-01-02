import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBasedFormComponent } from './model-based-form.component';

describe('ModelBasedFormComponent', () => {
  let component: ModelBasedFormComponent;
  let fixture: ComponentFixture<ModelBasedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBasedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBasedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
