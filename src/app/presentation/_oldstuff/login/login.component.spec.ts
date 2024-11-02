import { LoginComponent } from './login.component';
import { render } from "@testing-library/angular";

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(async () => {
    const renderResult = await render(LoginComponent, {
      imports: []
    });
    component = renderResult.fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
