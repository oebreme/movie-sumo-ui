import { LibraryComponent } from './library.component';
import { render } from "@testing-library/angular";

describe('LibraryComponent', () => {
  let component: LibraryComponent;

  beforeEach(async() => {
    const renderResult = await render(LibraryComponent);
    component = renderResult.fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
