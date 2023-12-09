import { SearchBarComponent } from './search-bar.component';
import { render } from "@testing-library/angular";

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;

  beforeEach(async () => {
    const renderResult = await render(SearchBarComponent);
    component = renderResult.fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
