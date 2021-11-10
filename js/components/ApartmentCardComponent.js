class ApartmentCardComponent {
  static usdToEuro = 0.86;

  constructor(props) {
    this.props = props;
    this.init();
  }

  convertCurrency = ({amount, currency}) => {
    if (currency === '$'){ 
      return amount * ApartmentCardComponent.usdToEuro;
    }
    else{
      return amount
    }
  }

  init = () => {
    const {id, type, owner, roomCount, squares, address, price, imgSrc} = this.props;
    const {fullname, email, phone} = owner;
    const {city, country, street, number} = address;
    const {amount, currency} = price;

    this.htmlElement = document.createElement('article');
    this.htmlElement.className = 'card shadow p-3 col-xl-12';
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}"  height="300px" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${type}</h5>
      <h5 class="card-title">Rooms: ${roomCount}</h5>
      <h5 class="card-title">Squares: ${squares}m2.</h5>
      <h5 class="card-title">${city},${street} ${number},${country} </h5>
      <p class="card-title">Owner: ${fullname}</p>
      <p class="card-title">E-mail: ${email}</p>
      <p class="card-title">Phone: ${phone}</p>
      <div>
        <span>Price:
        ${this.convertCurrency(price)}€</span>
      </div>
    </div>`;
  }
}