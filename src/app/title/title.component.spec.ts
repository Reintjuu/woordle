import {TestBed} from '@angular/core/testing';
import {TitleComponent} from "./title.component";

describe('TitleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TitleComponent
      ],
    }).compileComponents();
  });

  it('should create title', () => {
    const fixture = TestBed.createComponent(TitleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Woordle'`, () => {
    const fixture = TestBed.createComponent(TitleComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Woordle');
  });
});
