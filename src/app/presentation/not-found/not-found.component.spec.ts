import { NotFoundComponent } from './not-found.component';
import { render } from "@testing-library/angular";

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;

  beforeEach(async() => {
    const renderResult = await render(NotFoundComponent);
    component = renderResult.fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
