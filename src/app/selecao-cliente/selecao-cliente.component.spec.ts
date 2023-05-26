import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoClienteComponent } from './selecao-cliente.component';

describe('SelecaoClienteComponent', () => {
  let component: SelecaoClienteComponent;
  let fixture: ComponentFixture<SelecaoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
