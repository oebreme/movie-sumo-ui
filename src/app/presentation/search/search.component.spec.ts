import { SearchComponent } from './search.component';
import { render } from "@testing-library/angular";

describe('SearchComponent', () => {
  let component: SearchComponent;

  beforeEach(async() => {
    const renderResult = await render(SearchComponent);
    component = renderResult.fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
