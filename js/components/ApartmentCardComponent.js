class ApartmentCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init = () => {
    this.htmlElement = document.createElement('article');
    this.htmlElement.className = 'card shadow p-3 col-sm-8';
    this.htmlElement.innerHTML = `Aš esu būstas`;
  }
}