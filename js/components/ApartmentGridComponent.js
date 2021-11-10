class ApartmentGridComponent {
  constructor() {
    this.state = {
      Apartment: [],
      loading: false
    };
    this.init();
  }
  
  init = () => {
    this.htmlElement = document.createElement('div');
    this.htmlElement.innerHTML = "test";
  }
}