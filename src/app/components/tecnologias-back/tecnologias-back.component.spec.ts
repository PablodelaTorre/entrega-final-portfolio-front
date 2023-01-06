import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasBackComponent } from './tecnologias-back.component';

describe('TecnologiasBackComponent', () => {
  let component: TecnologiasBackComponent;
  let fixture: ComponentFixture<TecnologiasBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiasBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
