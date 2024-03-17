let words = [
    "Моисей",
    "Иисус",
    "Давид",
    "Голиаф",
    "Ной",
    "Арка",
    "Рождество",
    "Пасха",
    "Сила",
    "Мир",
    "Вифлеем",
    "Иерусалим",
    "Иордан",
    "Крещение",
    "Ученик",
    "Апостол",
    "Павел",
    "Петр",
    "Иоанн",
    "Римляне",
    "Коринфяне",
    "Евреи",
    "Творение",
    "Рай",
    "Заповедь",
    "Грех",
    "Прощение",
    "Спасение",
    "Вера",
    "Надежда",
    "Любовь",
    "Чудо",
    "Притча",
    "Молитва",
    "Пост",
    "Царь",
    "Пророк",
    "Египет",
    "Пустыня",
    "Обетования",
    "Земля",
    "Манна",
    "Воскресение",
    "Ангел",
    "Диавол",
    "Сатана",
    "Чертог",
    "Скиния",
    "Жертва",
    "Псалом",
    "Притчи",
    "Екклесиаст",
    "Песнь",
    "Исход",
    "Левит",
    "Числа",
    "Второзаконие",
    "Иисус Навин",
    "Судьи",
    "Руфь",
    "Самуил",
    "Царства",
    "Паралипоменон",
    "Ездра",
    "Неемия",
    "Есфирь",
    "Иов",
    "Исаия",
    "Иеремия",
    "Плач",
    "Иезекииль",
    "Даниил",
    "Осия",
    "Иоиль",
    "Амос",
    "Авдий",
    "Иона",
    "Михей",
    "Наум",
    "Аввакум",
    "Софония",
    "Аггей",
    "Захария",
    "Малахия",
    "Матфей",
    "Марк",
    "Лука",
    "Иоанн",
    "Деяния",
    "Иаков",
    "Петра",
    "Иоанна",
    "Иуда",
    "Откровение",
    "Авраам",
    "Исаак",
    "Иаков",
    "Иосиф",
    "Фараон",
    "Соломон",
    "Вавилон",
    "Иерихон",
    "Содом",
    "Гоморра",
    "Самсон",
    "Далила",
    "Рувим",
    "Симеон",
    "Левий",
    "Иуда",
    "Иосиф",
    "Вениамин",
    "Дан",
    "Гад",
    "Ефрем",
    "Каин",
    "Авель",
    "Сиф",
    "Енох",
    "Мафусаил",
    "Ламех",
    "Хам",
    "Ур",
    "Халдеи",
    "Мория",
    "Измаил",
    "Лот",
    "Агарь",
    "Сарра",
    "Ревекка",
    "Лия",
    "Рахиль",
    "Валаам",
    "Иовав",
    "Авессалом",
    "Гад",
    "Иезавель",
    "Ахав",
    "Елисей",
    "Илия",
    "Миха",
    "Нафан",
    "Сион",
    "Ханаан",
    "Мелхиседек",
    "Сихем",
    "Вефиль",
    "Хеврон",
    "Мадиам",
    "Синай",
    "Хорив",
    "Галилея",
    "Капернаум",
    "Назарет",
    "Самария",
    "Вифания",
    "Гефсимания",
    "Голгофа",
    "Пилат",
    "Ирод",
    "Захея",
    "Лазарь",
    "Марфа",
    "Мария",
    "Никодим",
    "Симон",
    "Филипп",
    "Барфоломей",
    "Матфия",
    "Андрей",
    "Иуда Искариот",
    "Кифа",
    "Каиафа",
    "Анна",
    "Закхей",
    "Магдалина",
    "Иезекииль",
    "Мардохей",
    "Навуходоносор",
    "Филистимлянин",
    "Гедеон",
    "Зеведей",
    "Ионафан",
    "Левиты",
    "Мелхиор",
    "Николай",
    "Рувим",
    "Савл",
    "Аарон",
    "Варнава",
    "Гавриил",
    "Иродиада",
    "Захария",
    "Корнилий",
    "Лидия",
    "Мирра",
    "Никанор",
    "Онисим",
    "Прискилла",
    "Римон",
    "Стефан",
    "Тимофей",
    "Мелхиседек",
    "Соломон",
    "Василиса",
    "Ананий",
    "Саул",
    "Кедрон",
    "Ахаз",
    "Вифлеем",
    "Гаваон",
    "Клеопа",
    "Лот",
    "Мария",
    "башня",
    "небеса",
    "слуга",
    "теща",
    "дух",
    "душа",
    "ангел",
    "апостол",
    "архангел",
    "фарисей",
    "садукей",
    "жених",
    "меха",
    "дщерь",
    "пастырь",
    "жатва",
    "прокаженный",
    "овца",
    "пастух",
    "посох",
    "жезл",
    "мудрец",
    "волхв",
    "учитель",
    "крест",
    "праведник",
    "судья",
    "суд",
    "колено",
    "сосед",
    "синедрион",
    "призрак",
    "первосвященник",
    "претория",
    "жребий",
    "газа",
    "эфиоплянин",
    "дамаск",
    "кипр",
    "крит",
    "прах",
    "пепел",
    "камень",
    "масло",
    "вино",
    "хлеб",
    "вода",
    "мед",
    "хромой",
    "слепой",
    "глухой",
    "немой",
    "бес",
    "виночерпий",
    "хлебодар",
    "сосуд",
    "кувшин",
    "меновщик",
    "плоть",
    "кровь",
    "кость",
    "мозг",
    "сердце",
    "печень",
    "почка",
    "меч",
    "копье",
    "Лук",
    "стрела",
    "щит",
    "доспех",
    "доска",
    "тетива",
    "мессионер",
    "царедворец",
    "тевиреада",
    "невежда",
    "мессия",
    "семя",
    "плод",
    "дерево",
    "корень",
    "ветвь",
    "лист",
    "цветок",
    "плод",
    "зерно",
    "колосья",
    "плеть",
    "кнут",
    "веревка",
    "цепь",
    "кандалы",
    "камень",
    "гора",
    "холм",
    "долина",
    "река",
    "море",
    "озеро",
    "ручей",
    "водопад",
    "пустыня",
    "лес",
    "деревня",
    "город",
    "стена",
    "ворота",
    "дом",
    "лоза",
    "виноградник",
    "огород",
    "поле",
    "пашня",
    "лисица",
    "волк",
    "ладан",
    "мирра",
    "кедр",
    "кипарис",
    "пальма",
    "ива",
    "полотенце",
    "пелена",
    "плащ",
    "мантия",
    "туника",
    "Заповедь",
    "Грех",
    "престол",
    "трон",
    "корона",
    "скипетр",
    "жезл",
    "раб",
    "сын",
    "дочь",
    "брат",
    "решетка",
    "хирам",
    "молот",
    "наковальня",
    "кузнец",
    "печь",
    "локоть",
    "палец",
    "устав",
    "закон",
    "мудрость",
    "знание",
    "ступени",
    "купцы",
    "военочальник",
    "вдова",
    "сирота",
    "палач",
    "Ваал",
    "Астарта",
    "иго",
    "старец",
    "младенец",
    "пепел",
    "жертвенник",
    "жертва",
    "курение",
    "сокровищница",
    "казна",
    "сокровище",
    "клад",
    "монета",
    "бытие",
    "вопль",
    "владыка",
    "ночь",
    "день",
    "заря",
    "закат",
    "полдень",
    "полночь",
    "вечер",
    "утро",
    "вирсавия",
    "отрок",
    "клятва",
    "союз",
    "договор",
    "печать",
    "дрова",
    "костер",
    "берег",
    "поле",
    "Родина",
    "первородство",
    "зверолов",
    "нимрод",
    "сестра",
    "колодезь",
    "Мир",
    "потомство",
    "Софония",
    "сновидец",
    "холм",
    "горе",
    "памятник",
    "поцелуй",
    "Стан",
    "сноп",
    "темница",
    "терновник",
    "плод",
    "тесто",
    "дрожжи",
    "знамение",
    "коготь",
    "дракон",
    "змей",
    "сад",
    "луна",
    "звезды",
    "очи",
    "гроздь",
    "бабка",
    "жезл",
    "поклон",
    "дрова",
    "Спасение",
    "позор",
    "стыд",
    "срам",
    "нагота",
    "глобус",
    "сова",
    "курица",
    "зуб",
    "сатрап",
    "евнух",
    "кузнец",
    "пастух",
    "адидас",
    "руководитель",
    "рукав",
    "милость ",
    "милоть",
    "коса",
    "бровь",
    "язык",
    "губа",
    "кит",
    "ниневия",
    "империя",
    "царство",
    "государство",
    "вулкан",
    "благовестие",
    "евангелие",
    "проповедь",
    "бабушка",
    "простынь",
    "раслабленный",
    "слепой",
    "композитор",
    "музыкант",
    "певец",
    "кощей",
    "лепешка",
    "булочка",
    "ложе",
    "тишина",
    "шум",
    "поток",
    "плешивый ",
    "кожа",
    "жертва",
    "верблюд",
    "осел",
    "ремень",
    "азия",
    "европа",
    "кошка",
    "собака",
    "лошадь",
    "корова",
    "овца",
    "коза",
    "свинья",
    "курица",
    "утка",
    "гусь",
    "яблоко",
    "банан",
    "апельсин",
    "мандарин",
    "груша",
    "вишня",
    "клубника",
    "малина",
    "ежевика",
    "черника",
    "роза",
    "тюльпан",
    "ромашка",
    "подсолнух",
    "лилия",
    "гладиолус",
    "пион",
    "хризантема",
    "ирис",
    "нарцисс",
    "морковь",
    "картофель",
    "огурец",
    "помидор",
    "капуста",
    "лук",
    "чеснок",
    "баклажан",
    "перец",
    "тыква",
    "волк",
    "лиса",
    "медведь",
    "заяц",
    "белка",
    "еж",
    "выдра",
    "лось",
    "кабан",
    "олень",
    "шоколад",
    "печенье",
    "торт",
    "пирожное",
    "мороженое",
    "кекс",
    "варенье",
    "пудинг",
    "йогурт",
    "кефир",
    "береза",
    "дуб",
    "сосна",
    "ель",
    "лиственница",
    "тополь",
    "клен",
    "ясень",
    "ива",
    "граб",
    "рыба",
    "креветка",
    "кальмар",
    "мидия",
    "устрица",
    "лобстер",
    "краб",
    "окунь",
    "щука",
    "карп",
    "ручка",
    "карандаш",
    "линейка",
    "тетрадь",
    "альбом",
    "маркер",
    "степлер",
    "скрепка",
    "клей",
    "ножницы",
    "корректор",
    "ластик",
    "блокнот",
    "папка",
    "файл",
    "закладка",
    "клейкая лента",
    "бумага",
    "обложка",
    "циркуль",
    "конверт",
    "открытка",
    "дырокол",
    "гуашь",
    "акварель",
    "кисть",
    "палитра",
    "масляная краска",
    "фломастер",
    "цветная бумага",
    "мел",
    "грифель",
    "пенал",
    "портфель",
    "резинка",
    "штемпель",
    "печать",
    "этикетки",
    "индекс",
    "картон",
    "угольник",
    "транспортир",
    "миллиметровка",
    "чертежный инструмент",
    "лупа",
    "магнит",
    "зажим",
    "планшет",
    "нотная тетрадь",
    "глобус",
    "математика",
    "русский язык",
    "литература",
    "история",
    "география",
    "биология",
    "физика",
    "химия",
    "иностранный язык",
    "физическая культура",
    "информатика",
    "обществознание",
    "технология",
    "музыка",
    "изобразительное искусство",
    "окружающий мир",
    "астрономия",
    "экология",
    "молоток",
    "отвертка",
    "пила",
    "гаечный ключ",
    "дрель",
    "шуруповерт",
    "ножовка по металлу",
    "плоскогубцы",
    "тиски",
    "рулетка",
    "фортепиано",
    "гитара",
    "скрипка",
    "виолончель",
    "контрабас",
    "флейта",
    "кларнет",
    "саксофон",
    "труба",
    "тромбон",
    "барабан",
    "баян",
    "аккордеон",
    "губная гармоника",
    "арфа",
    "балалайка",
    "домра",
    "гусли",
    "вибрафон",
    "цимбалы"
];
// Исходный список слов
let unusedWords = [...words]; // Слова, доступные для игры
let temporaryNoWords = []; // Временный массив для слов, отклоненных кнопкой "Нет"
let teams = []; // Данные команд
let currentTeamIndex = 0; // Индекс текущей команды
let currentPlayerIndex = 0; // Индекс текущего игрока в команде
let timePerRound; // Время на раунд в секундах
let timerInterval; // Для управления таймером

document.getElementById('start-game').addEventListener('click', initializeGame);


function initializeGame() {
    const numTeams = parseInt(document.getElementById('num-teams').value, 10);
    const numMembers = parseInt(document.getElementById('num-members').value, 10);
    timePerRound = parseInt(document.getElementById('time-per-round').value, 10);

    teams = Array.from({ length: numTeams }, () => ({
        players: Array.from({ length: numMembers }, () => ({ score: 0 }))
    }));

    currentTeamIndex = 0;
    currentPlayerIndex = 0;
    unusedWords = [...words];
    shuffleArray(unusedWords); // Перемешивание слов в начале игры

    switchToGameArea();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function switchToGameArea() {
    document.getElementById('game-setup').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    showPrepareNextTeam();
}

function showPrepareNextTeam() {
    document.getElementById('prepare-team').style.display = 'block';
    document.getElementById('prepare-team-button').textContent = `Приготовиться команде ${currentTeamIndex + 1}`;
    document.getElementById('prepare-team-button').onclick = () => {
        // Скрытие кнопки приготовления команды и показ кнопки приготовления первого игрока
        document.getElementById('prepare-team').style.display = 'none';
        showPrepareNextPlayer();
    };
}

function showPrepareNextPlayer() {
    document.getElementById('prepare-player').style.display = 'block';
    let buttonText = currentPlayerIndex === 0 ?
        `Первый участник команды ${currentTeamIndex + 1}, приготовьтесь` :
        `Приготовиться участнику ${currentPlayerIndex + 1} команды ${currentTeamIndex + 1}`;
    document.getElementById('prepare-player-button').textContent = buttonText;
    document.getElementById('prepare-player-button').onclick = startRoundForCurrentPlayer;
}

function showPreparationTimer(callback) {
    let prepTime = 3; // Время подготовки в секундах
    const prepTimer = document.getElementById('prep-timer'); // Получаем новый элемент таймера подготовки
    prepTimer.textContent = prepTime; // Показываем начальное время на таймере
    prepTimer.style.display = 'block'; // Делаем таймер видимым

    let prepInterval = setInterval(() => {
        prepTime -= 1;
        prepTimer.textContent = prepTime;

        if (prepTime <= 0) {
            clearInterval(prepInterval);
            prepTimer.style.display = 'none'; // Скрываем таймер подготовки после окончания отсчета
            callback(); // Вызываем callback-функцию для продолжения игры
        }
    }, 1000);
}




function startRoundForCurrentPlayer() {
    document.getElementById('prepare-player').style.display = 'none';

    // Запуск таймера подготовки перед началом раунда
    showPreparationTimer(() => {
        document.getElementById('play-area').style.display = 'block';

        if (timerInterval) {
            clearInterval(timerInterval); // Остановка предыдущего таймера, если он был
        }

        let timeRemaining = timePerRound;
        updateTimerDisplay(timeRemaining); // Первоначальное обновление таймера перед его стартом
        document.getElementById('timer-display').style.display = 'block'; // Убедимся, что таймер раунда виден

        timerInterval = setInterval(() => {
            timeRemaining -= 1;
            updateTimerDisplay(timeRemaining);

            if (timeRemaining <= 0) {
                clearInterval(timerInterval); // Очистка таймера, когда время вышло
                timerInterval = null;
                finishRoundForCurrentPlayer(); // Переход к следующему игроку или выводу результатов
            }
        }, 1000);

        showNextWord(); // Показ первого слова для текущего игрока
    });
}



function updateTimerDisplay(time) {
    const timerDisplay = document.getElementById('timer-display');
    timerDisplay.textContent = `${time}`;

    // Изменение цвета от зеленого к красному
    const greenToRedRatio = time <= 5 ? 1 : (timePerRound - time) / (timePerRound - 5);
    const red = Math.min(255, Math.floor(255 * greenToRedRatio));
    const green = Math.max(0, 255 - Math.floor(255 * greenToRedRatio));
    timerDisplay.style.color = `rgb(${red}, ${green}, 0)`;

    // Увеличение размера текста на последних 10 секундах
    if (time <= 15) {
        const scaleFactor = 1 + (15 - time) * 0.15; // Увеличиваем на 5% каждую секунду
        timerDisplay.style.transform = `scale(${scaleFactor})`;
    } else {
        timerDisplay.style.transform = 'scale(1)'; // Возвращаем обычный размер, если больше 10 секунд
    }
}

function showNextWord() {
    if (unusedWords.length === 0 && temporaryNoWords.length === 0) {
        // Если и основной, и временный массивы слов пусты, перезагружаем основной из исходного списка
        unusedWords = [...words];
        shuffleArray(unusedWords); // Перемешиваем слова для нового раунда
    } else if (unusedWords.length === 0) {
        // Если основной массив пуст, но в временном есть слова, переносим их обратно и перемешиваем
        unusedWords = [...temporaryNoWords];
        temporaryNoWords = []; // Очищаем временный массив
        shuffleArray(unusedWords);
    }

    const wordIndex = Math.floor(Math.random() * unusedWords.length);
    const word = unusedWords.splice(wordIndex, 1)[0];
    document.getElementById('word-display').textContent = word;

    window.answer = (response) => {
        if (response === 'yes') {
            teams[currentTeamIndex].players[currentPlayerIndex].score += 1;
        } else {
            temporaryNoWords.push(word); // Возвращаем слово в массив, если ответ "нет"
        }

        // Показываем следующее слово, только если таймер не остановлен
        if (timerInterval) {
            showNextWord();
        }
    };
}


function finishRoundForCurrentPlayer() {
    // Добавим сюда возможность начать новую игру
    document.getElementById('play-area').style.display = 'none';
    currentPlayerIndex += 1;

    if (currentPlayerIndex >= teams[currentTeamIndex].players.length) {
        currentPlayerIndex = 0;
        currentTeamIndex += 1;

        if (currentTeamIndex >= teams.length) {
            displayResults();
            return;
        }
        showPrepareNextTeam();
    } else {
        showPrepareNextPlayer();
    }
}

function displayResults() {
    // Кнопка для новой игры
    document.getElementById('game-area').style.display = 'none';
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';
    scoreboard.style.display = 'block';

    teams.forEach((team, index) => {
        const teamScore = team.players.reduce((acc, player) => acc + player.score, 0);
        const teamDiv = document.createElement('div');
        teamDiv.textContent = `Команда ${index + 1}: ${teamScore} очков`;
        scoreboard.appendChild(teamDiv);
    });

    const restartButton = document.createElement('button');
    restartButton.textContent = 'Начать новую игру';
    restartButton.onclick = resetGame;
    scoreboard.appendChild(restartButton);
}

function resetGame() {
    document.getElementById('game-setup').style.display = 'block';
    document.getElementById('scoreboard').style.display = 'none';
    document.getElementById('num-teams').value = '';
    document.getElementById('num-members').value = '';
    document.getElementById('time-per-round').value = '';
}


// Начало игры
document.getElementById('start-game').addEventListener('click', initializeGame);