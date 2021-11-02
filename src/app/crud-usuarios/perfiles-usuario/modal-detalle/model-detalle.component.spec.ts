import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDetalleComponent } from './model-detalle.component';

describe('ModelDetalleComponent', () => {
  let component: ModelDetalleComponent;
  let fixture: ComponentFixture<ModelDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
