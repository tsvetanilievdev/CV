let uri =
  'https://estilo-booking-default-rtdb.europe-west1.firebasedatabase.app/manager.json';

let form = document.getElementById('book-hours');

let serviceSelect = document.getElementById('service');
let hoursSelect = document.getElementById('hours');

let wrapperDivForm = document.getElementById('wrapper-form');

async function display(uri) {
  let response = await fetch(uri);
  let result = await response.json();

  if (result !== null) {
    Object.keys(result)
      .map((x) => result[x].hour)
      .forEach((hour) => {
        Array.from(hoursSelect.querySelectorAll('option'))
          .find((x) => x.textContent === hour)
          .remove();
      });
  }
}
display(uri)

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let selectedService = serviceSelect.selectedOptions[0].textContent;
  let selectedHours = hoursSelect.selectedOptions[0].textContent;

  async function post() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let number = document.getElementById('number');

    let h3Error = document.getElementById('err-input');
    if (
      firstName.value.trim() === '' ||
      lastName.value.trim() === '' ||
      number.value.trim() === ''
    ) {
      h3Error.style.display = '';
      return;
    }else{
        h3Error.style.display = 'none';
    }

    await fetch(uri, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hour: selectedHours,
        service: selectedService,
        name: `${firstName.value} ${lastName.value}`,
        telephone: number.value,
      }),
    });
    firstName.value = '';
    lastName.value = '';
    number.value = '';

    let selected = hoursSelect.value;
    hoursSelect.querySelector(`option[value=${selected}]`).remove();
  }
  post();
});
