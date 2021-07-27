import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasEditorComponent } from './tareas-editor.component';

describe('TareasEditorComponent', () => {
  let component: TareasEditorComponent;
  let fixture: ComponentFixture<TareasEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
