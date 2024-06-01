import { HomeComponent } from './home.component';
import { render } from "@testing-library/angular";

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(async() => {
    const renderResult = await render(HomeComponent);
    component = renderResult.fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
