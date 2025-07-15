import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Keyboard } from './keyboard';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Keyboard', () => {
  let component: Keyboard;
  let fixture: ComponentFixture<Keyboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keyboard],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Keyboard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
