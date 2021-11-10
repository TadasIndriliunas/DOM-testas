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

  wrapChild = element => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-12 col-sm-6 col-lg-4 col-xl-3 align-self-stretch';
    wrapper.append(element);
    return wrapper;
  }

  init = () => {
    this.state.loading = true;
    setTimeout(this.fetchToys, 2000);
    this.fetchApartment();
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3';

    this.render();
  }

  render = () => {
    const { loading, Apartment } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif" /></div>';
    } else if (Apartment.length > 0) {
      this.htmlElement.innerHTML = '';
      const children = Apartment
        .map(x => new ApartmentCardComponent(x))
        .map(x => x.htmlElement)
        .map(this.wrapChild);
        this.htmlElement.append(...children);
    } else {
      this.htmlElement.innerHTML = 'Atsiprašome, nėra elementų.';
    }
  }
}