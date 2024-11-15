export class UserData {
  constructor(data) {
    this.EmailUser = data;
    this.validate();
  }

  validate() {
    if (!this.EmailUser) {
      throw new Error('userName is required');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.EmailUser)) {
      throw new Error("Sasie de l'email incorrecte");
    }
  }
}
