export class Contact {
  constructor(
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public _id?: string
  ) {}

  setId?() {
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this._id = text;
    console.log(this._id, 'setid');
  }
}
