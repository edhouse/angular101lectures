import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleformComponent } from './simpleform.component';

describe('SimpleformComponent', () => {
  let component: SimpleformComponent;
  let fixture: ComponentFixture<SimpleformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
