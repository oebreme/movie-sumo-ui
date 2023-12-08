import { AppComponent } from './app.component';
import { render } from "@testing-library/angular";

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async() => {
    const renderResult = await render(AppComponent);
    component = renderResult.fixture.componentInstance;
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
