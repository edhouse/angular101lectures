import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicformComponent } from './basicform.component';

describe('BasicformComponent', () => {
  let component: BasicformComponent;
  let fixture: ComponentFixture<BasicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
