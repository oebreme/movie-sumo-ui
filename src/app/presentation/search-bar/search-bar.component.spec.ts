import { SearchBarComponent } from './search-bar.component';
import { render } from "@testing-library/angular";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { SharedModule } from "../../shared/shared.module";

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;

  beforeEach(async () => {
    const renderResult = await render(SearchBarComponent, {
      imports: [
        SharedModule,
        HttpClientTestingModule
      ]
    });
    component = renderResult.fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
