import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLibrayComponent } from './shared-libray.component';

describe('SharedLibrayComponent', () => {
  let component: SharedLibrayComponent;
  let fixture: ComponentFixture<SharedLibrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLibrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLibrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
