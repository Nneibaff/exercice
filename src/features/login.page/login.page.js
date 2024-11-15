import { UserData } from '../../models/user.data/user.data';
import { HomePage } from '../home.page/home.page';

export class LoginPage {
  //constructeur
  constructor(htmlElement) {
    this.htmlElement = htmlElement;
    this.buildHTML();
    this.InitEvents();
  } //methode pour construire le html
  buildHTML() {
    this.htmlElement.innerHTML = `<input type="text" id="name" />
                                  <button id="login">Login</button>`;
  } //methode pour initialiser les evenements
  InitEvents() {
    this.htmlElement.querySelector('button').addEventListener('click', () => {
      const EmailUser = this.htmlElement.querySelector('input').value;
      const EmailValid = new UserData(EmailUser);
      new HomePage(this.htmlElement, EmailValid);
    });
  }
}
