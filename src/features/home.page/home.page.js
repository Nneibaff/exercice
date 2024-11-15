export class HomePage {
  //constructeur
  constructor(htmlElement, EmailUser) {
    this.htmlElement = htmlElement;
    this.EmailUser = EmailUser;
    this.buildHTML();
    console.log(this.EmailUser);
  }

  buildHTML() {
    this.htmlElement.innerHTML = `<h1>Bienvenue ${this.EmailUser.EmailUser} </h1>`;
  }
}
