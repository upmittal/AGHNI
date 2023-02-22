import { ComponentFixture, TestBed } from '@angular/core/testing';

import { confirmationComponent } from './confirmation.component';

describe('ConfirmaitionComponent', () => {
  let component: confirmationComponent;
  let fixture: ComponentFixture<confirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ confirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(confirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
