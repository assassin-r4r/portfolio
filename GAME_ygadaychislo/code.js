let secret_number = Math.floor(Math.random() * 101); 
let popitka = 1



const hh = document.getElementById("hh");
const pp = document.getElementById("pp");
const form = document.querySelector("form");
const ppopitka = document.getElementById("popitk");

ppopitka.textContent = "Попытка: " + popitka;

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    let user_number = Number(document.getElementById('otvet').value);

    
    if (user_number < secret_number) {
        hh.textContent = "Моё число больше :)";
        pp.textContent = "Вы не угадали! Но ничего страшного, компьютер дал подсказку. Используй её!";
        popitka += 1;
        
    } else if (user_number > secret_number) {
        hh.textContent = "Моё число меньше :)";
        pp.textContent = "Вы не угадали! Но ничего страшного, компьютер дал подсказку. Используй её!";
        popitka += 1;
        
    } else if (user_number === secret_number) {
        hh.textContent = "ВЫ УГАДАЛИ!!! я проиграл :(";
        pp.textContent = "Абсолютная победа! Игра окончена.";
        
        
        document.getElementById('otvet').disabled = true;
    }

    if (user_number !== secret_number) {
        ppopitka.textContent = "Попытка: " + popitka;
    }
});
