import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocMapComponent } from './poc-map.component';

describe('PocMapComponent', () => {
  let component: PocMapComponent;
  let fixture: ComponentFixture<PocMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
