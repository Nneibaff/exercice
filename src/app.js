import { LoginPage } from './features/login.page/login.page';

export class MyApp {
  constructor(htmlElement) {
    this.htmlElement = htmlElement;
    this.start();
  }

  start() {
    new LoginPage(this.htmlElement);
  }
}
