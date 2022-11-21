import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosActionComponent } from './nos-action.component';

describe('NosActionComponent', () => {
  let component: NosActionComponent;
  let fixture: ComponentFixture<NosActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
