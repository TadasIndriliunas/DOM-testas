class ApartmentGridComponent {
  constructor() {
    this.state = {
      Apartment: [],
      loading: false
    };
    this.init();
  }

  saveApartment = Apartment => {
    this.state = { Apartment, loading: false };

    this.render();
  }

  showError = msg => alert(msg);

  fetchApartment = () => API.fetchApartment(this.saveApartment, this.showError);

  init = () => {
    this.state.loading = true;
    this.fetchApartment();
    this.htmlElement = document.createElement('div');

    this.render();
  }

  render = () => {
    const { loading, Apartment } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = 'Siunčiama...';
    } else if (Apartment.length > 0) {
      this.htmlElement.innerHTML = 'Parsiųsta!';
    } else {
      this.htmlElement.innerHTML = 'Atsiprašome, nėra elementų.';
    }
  }
}