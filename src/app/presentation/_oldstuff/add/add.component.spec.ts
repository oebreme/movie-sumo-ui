import { AddComponent } from './add.component';
import { render } from "@testing-library/angular";
import { HttpClientModule } from "@angular/common/http";

describe('AddComponent', () => {
  let component: AddComponent;

  beforeEach(async () => {
    const renderResult = await render(AddComponent, {
      imports: [
        HttpClientModule
      ]
    });
    component = renderResult.fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
