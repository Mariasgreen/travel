/* eslint-disable max-len */
const form = document.querySelector('.reservation__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

 
  const date = form.querySelector('select[name = "dates"]').value;
  const people = form.querySelector('select[name = "people"]').value;
  const name = form.querySelector('#reservation__name').value;
  const phone = form.querySelector('#reservation__phone').value;


    let data = {
      name: name,
      phone: phone,
      date: date,
      people: people
    };
 

  xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);

  xhr.onload = function() {
    if ((xhr.status >= 200 && xhr.status < 300)) {
      form.innerHTML = '<p>Ваше бронирование успешно отправлено. Мы свяжемся с Вами в скором времени!</p>';
    } else {
      form.innerHTML = '<p>Что-то пошло не так. Пожалуйста, повторите попытку позже.</p>';
    }
  };

  xhr.send(JSON.stringify(data));
});





const formFooter = document.querySelector('.footer__form');


formFooter.addEventListener('submit', e => {
  e.preventDefault();

  const email = document.querySelector('.footer__input').value;

  const request = new XMLHttpRequest();
  request.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);

  request.onload = function() {
    if ((request.status >= 200 && request.status < 300)) {
      formFooter.innerHTML = '<h2>Ваша заявка успешно отправлена</h2>&nbsp;<p>Наши менеджеры свяжутся с вами в течении 3-х рабочих дней</p>';
    } else {
      formFooter.innerHTML = '<p>Что-то пошло не так. Пожалуйста, повторите попытку позже.</p>';
    }
  };


  request.send(email);
});
