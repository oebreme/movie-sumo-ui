import { ListComponent } from './list.component';
import { render } from "@testing-library/angular";

describe('ListComponent', () => {
  let component: ListComponent;

  beforeEach(async() => {
    const renderResult = await render(ListComponent);
    component = renderResult.fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
