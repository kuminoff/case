const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const body = {}; //собрали данные с формы

    formData.append("form", form.classList.value);

    formData.forEach((value, field) => {
      body[field] = value;
    });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      //использовали метод fetch (для работы с серверными запросами)
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        //ответ
        if (response.ok) {
          //если ответ пришел
          return response.json(); //мы преобзазуем ответ в необходимый нам формат
        } else {
          throw new Error(response.status); //если ответ ложный, то выкидываем ошибку с нашим статусом
        }
      })

      .then((data) => {
        //ждет отработки первого метода then
        alert("Данные отправлены успешно");
      })

      .catch((error) => {
        alert("Ошибка " + error.message);
      })

      .finally(() => {
        form.reset(); //чистка формы
      });
  });
});
