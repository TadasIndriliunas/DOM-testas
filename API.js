const baseURL = 'http://localhost:3000';

class API {
  static fetchApartment = (success, failure) => {
    fetch(`${baseURL}/Apartment`)
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }

  static deleteApartment = (id, success, failure) => {
    fetch(`${baseURL}/Apartment/${id}`, { method: 'DELETE' })
      .then(success)
      .catch(failure)
  }
}

// const rodytiKlaidą = (klaida) => console.error('Klaida:', klaida)

// console.log('Siunčiami pradiniai duomenys...');
// API.fetchApartment(
//   (duomenys) => {
//     console.log('Gauti pradiniai duomenys', duomenys);
//     console.log('trinamas Elementas su id \'1\'...');
//     API.deleteApartment(
//       '2',
//       (duomenys) => {
//         console.log('Sėkimgai ištrinta', duomenys);
//         console.log('Siunčiami atnaujinti duomenys...');
//         API.fetchApartment(
//           (duomenys) => console.log('Gauti Atnaujinti duomenys', duomenys),
//           rodytiKlaidą
//         )
//       },
//       rodytiKlaidą
//     )
//   },
//   rodytiKlaidą
// )

