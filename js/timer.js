const timerBlock = document.querySelector(".timer__time");
const deadLine = "1 august 2022"

let interval;

const updateClock = () => {
  const date = new Date().getTime(); //количество миллисекунд с 1 января 1970 года по настоящее время
  const dateDeadline = new Date(deadLine).getTime(); //количество миллисекунд с 1 января 1970 года до 30 марта 2022
  const timeRemaining = (dateDeadline - date) / 1000; //перевели разницу в секунды
  const days = Math.floor(timeRemaining / 60 / 60 / 24); //перевели сначала в минуты, потом в часы, потом в дни
  const hours = Math.floor((timeRemaining / 60 / 60) % 24); //перевели сначала в минуты, а потом в часы и округлили до ближайшего целого числа
  const minutes = Math.floor((timeRemaining / 60) % 60); //перевели в минуты и нашли остаток от деления на часы
  const seconds = Math.floor(timeRemaining % 60); //нашли остаток оо деления на минуты

  const fDays = days < 0 ? "" : days;
  const fHours = hours < 10 ? "0" + hours : hours; // если число меньше 10, то в начало дописывается 0 и наоборот
  const fMinutes = minutes < 10 ? "0" + minutes : minutes; // если число меньше 10, то в начало дописывается 0 и наоборот
  const fSeconds = seconds < 10 ? "0" + seconds : seconds; // если число меньше 10, то в начало дописывается 0 и наоборот

  var day =''

  if (fDays == 1) {
    day = 'день'
  } else if (fDays > 1 && fDays <= 4) {
    day = 'дня'
  }else {
    day = 'дней'
  }

  timerBlock.textContent = `${fDays} ${day}   ${fHours}:${fMinutes}:${fSeconds}`; //выводим время в нужном формате

  if (timeRemaining <= 0) {
    clearInterval(interval); //останавливаем таймер, как только он дошел до 0
    timerBlock.textContent = "Акция закончилась";
  }
};

updateClock(); //обновление страницы
interval = setInterval(updateClock, 500);
