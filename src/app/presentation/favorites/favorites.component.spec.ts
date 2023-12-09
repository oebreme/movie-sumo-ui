import { FavoritesComponent } from './favorites.component';
import { render } from "@testing-library/angular";

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;

  beforeEach(async() => {
    const renderResult = await render(FavoritesComponent);
    component = renderResult.fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
