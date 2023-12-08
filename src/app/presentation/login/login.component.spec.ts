import { LoginComponent } from './login.component';
import { render } from "@testing-library/angular";
import { AuthModuleMock } from "../../../mock/test/auth-mock.module";

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(async() => {
    const renderResult = await render(LoginComponent, {
      imports: [
        AuthModuleMock.forRoot(),
      ]
    });
    component = renderResult.fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
