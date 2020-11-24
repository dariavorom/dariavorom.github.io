
//Развернуть фото при нажатии на кнопку
let btn = document.querySelectorAll(".btn");
let img = document.querySelectorAll(".content_img");
let content_item = document.querySelectorAll(".content_item");
let color = "#7cf1f1";
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
        img[i].classList.toggle("show");
        content_item[i].style.background = color;
    }
}
//Запросы
let URL = 'https://jsonplaceholder.typicode.com/comments';
let xhr = new XMLHttpRequest();
function rq() {
    xhr.open('GET', URL);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.response);
            console.log(data[0].name)
            data.forEach(item => {
                let info = document.createElement('div');
                info.classList.add('form');
                info.innerHTML = `
            <div class="name"><span class="text"> Название комментария:</span> ${item.name}</div>
            <span class="mail"><span class="text">Email отправителя:</span> ${item.email}</div>
            <div class="body"><span class="text">Содержимое:</span> ${item.body}</div>`;
                document.querySelector('.ajax').appendChild(info);
            });
        }
    }
    xhr.send();
}
let btnAJAX = document.querySelector(".btn_ajax");
btnAJAX.onclick = rq;

//Действия с кнопками
document.querySelector('.btn_add').onclick = () => {
    document.querySelector('.add').innerHTML += `<p>Добавлен текст</p>`;
}
document.querySelector('.btn_del').onclick = () => {
    let del = document.querySelector('.del')
    if (del.textContent) {
        del.textContent = null;
    } else {
        del.textContent = 'Какое-то содержимое';
    }
}
document.querySelector('.btn_size').onclick = () => {
    document.querySelector('.size').style.fontSize = '40px';
}
document.querySelector('.btn_color').onclick = () => {
    document.querySelector('.color').style.color = 'blue';
    document.querySelector('.color').style.background = 'yellow';
}

