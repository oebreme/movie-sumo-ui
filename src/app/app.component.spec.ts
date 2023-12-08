import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { render } from "@testing-library/angular";

describe('AppComponent', () => {
  beforeEach(async() => {
    await render(AppComponent);
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  test(`should have as title 'movie-sumo-ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('movie-sumo-ui');
  });
});
