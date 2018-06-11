import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementryComponent } from './elementry.component';

describe('ElementryComponent', () => {
  let component: ElementryComponent;
  let fixture: ComponentFixture<ElementryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
