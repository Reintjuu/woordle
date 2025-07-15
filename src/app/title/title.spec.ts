import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from './title';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Title', () => {
  let component: Title;
  let fixture: ComponentFixture<Title>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Title],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Title);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Woordle'`, () => {
    expect(component.title).toEqual('Woordle');
  });
});
