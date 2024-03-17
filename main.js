<
script >
    document.addEventListener('DOMContentLoaded', function() {



        document.querySelectorAll('.main__slider').forEach(sliderContainer => {
            sliderContainer.classList.add('swiper');
            const swiperWrapper = document.createElement('div');
            swiperWrapper.classList.add('swiper-wrapper');
            const columns = sliderContainer.querySelectorAll('.kt-row-column-wrap .wp-block-kadence-column');
            columns.forEach(column => {
                const swiperSlide = column.cloneNode(true);
                swiperSlide.classList.add('swiper-slide');
                swiperWrapper.appendChild(swiperSlide);
            });
            sliderContainer.innerHTML = '';
            sliderContainer.appendChild(swiperWrapper);
            const swiperButtonPrev = document.createElement('div');
            swiperButtonPrev.classList.add('swiper-button-prev');
            const swiperButtonNext = document.createElement('div');
            swiperButtonNext.classList.add('swiper-button-next');
            sliderContainer.appendChild(swiperButtonPrev);
            sliderContainer.appendChild(swiperButtonNext);
            new Swiper(sliderContainer, {
                slidesPerView: 4,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerGroup: 4, // Переключение по 4 слайда за раз
            });
        });
    }); <
/script> <
script >
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM полностью загружен и разобран');

        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }); <
/script>

<
script >
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.kadence-column892_90ec3a-39').style.display = 'none';
        document.querySelector('.kadence-column892_e71ddb-67').style.display = 'none';
        setTimeout(function() {
            document.querySelector('.kadence-column892_e71ddb-67').style.display = 'flex';
            document.querySelector('.kadence-column892_e71ddb-67').addEventListener('click', function() {
                this.style.display = 'none';
                document.querySelector('.kadence-column892_90ec3a-39').style.display = 'flex';
            });
            document.querySelector('.kt-svg-icons892_3d9b16-42').addEventListener('click', function() {
                document.querySelector('.kadence-column892_e71ddb-67').style.display = 'flex';
                document.querySelector('.kadence-column892_90ec3a-39').style.display = 'none';
            });
        }, 10000);
    }); <
/script>

<
script >
    document.addEventListener('DOMContentLoaded', function() {
        const triggersToTargets = {
            'splide03-slide01': 'kt-target-modal907_4475d6-e5',
            'splide03-slide02': 'kt-target-modal907_46687c-90',
            'splide03-slide03': 'kt-target-modal907_ad95b1-dc',
            'splide03-slide04': 'kt-target-modal907_e1473a-f8',
            'splide03-slide05': 'kt-target-modal907_44dd73-97',
            'splide03-slide06': 'kt-target-modal907_9ad216-7f',
            'splide03-slide07': 'kt-target-modal907_090638-b0',
            'splide03-slide08': 'kt-target-modal907_b56d1f-3d',
            'splide03-slide09': 'kt-target-modal907_cb249e-98',
            'splide03-slide10': 'kt-target-modal907_9ac50f-16',
            'splide03-slide11': 'kt-target-modal907_2f7984-a1',
            'splide03-slide12': 'kt-target-modal907_7693e6-24',
            'splide03-slide13': 'kt-target-modal907_f4de96-65',
            'splide03-slide14': 'kt-target-modal907_cc8d1b-16',
            'splide03-slide15': 'kt-target-modal907_51ad78-6a',
            'splide03-slide16': 'kt-target-modal907_354cc6-7a',
            'splide03-slide17': 'kt-target-modal907_533e83-de',
            'splide03-slide18': 'kt-target-modal907_6a4dcd-f2',
            'splide03-slide19': 'kt-target-modal907_35f610-a4',
            'splide03-slide20': 'kt-target-modal907_0dab9f-3e',
            'splide03-slide21': 'kt-target-modal907_ff67e4-a9',
            'splide03-slide22': 'kt-target-modal907_53a505-6c',
            'splide03-slide23': 'kt-target-modal907_539733-fb',
            'splide03-slide24': 'kt-target-modal907_2041d5-00',
            'splide03-slide25': 'kt-target-modal907_81b5f9-86',
            'splide03-slide26': 'kt-target-modal907_c6724b-05',
            'splide03-slide27': 'kt-target-modal907_26a9db-c1',
            'splide03-slide28': 'kt-target-modal907_db84af-3f',
            'splide03-slide29': 'kt-target-modal907_e1b10e-c1',
            'splide03-slide30': 'kt-target-modal907_d5c62f-5d',
        };

        document.body.addEventListener('mousedown', function(e) {
            // Проверяем, является ли элемент, по которому был совершен клик, одним из триггеров
            const trigger = e.target.closest('[id^="splide03-slide"]');
            if (trigger) {
                console.log('Клик по элементу-триггеру:', trigger.id);
                const targetId = triggersToTargets[trigger.id];
                if (targetId) {
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        console.log('Добавление класса is-open к:', targetId);
                        targetElement.classList.add('is-open');
                    }
                }
                e.preventDefault(); // Опционально, для предотвращения стандартного поведения
            }

            // Проверяем, является ли элемент, по которому был совершен клик, кнопкой закрытия
            const closeButtons = document.querySelectorAll('.kt-modal-close');

            // Добавление обработчика события 'click' для каждой найденной кнопки
            closeButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    // Поиск ближайшего родительского элемента с классом 'is-open'
                    const openBlock = button.closest('.is-open');

                    // Удаление класса 'is-open', если такой блок найден
                    if (openBlock) {
                        openBlock.classList.remove('is-open');
                    }
                });
            });
        }, true); // true для использования фазы перехвата

        // Ваш дополнительный код и логика здесь
    }); <
/script>

<
script >
    document.addEventListener('DOMContentLoaded', function() {
        var menuItems = document.querySelectorAll('#widget-drawer .menu-item a');

        function toggleMenu() {
            var drawer = document.getElementById('widget-drawer');
            if (drawer.classList.contains('active')) {
                drawer.classList.remove('active');
                drawer.classList.remove('show-drawer');
            }
        }

        menuItems.forEach(function(item) {
            item.addEventListener('click', toggleMenu);
        });
    }); <
/script>

<
script >
    jQuery(document).ready(function($) {
        // Функция для проверки наличия cookie
        function getCookie(name) {
            var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
            if (match) return match[2];
            else return null;
        }

        // Функция для установки cookie
        function setCookie(name, value, days) {
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
        }

        // Функция для отображения блока с сообщением
        function showMessage(childName) {
            var messageBlock = `<div class="dialog__item dialog__item-u dialog__item--u">Круто, какое красивое имя, ${childName}!</div>`;
            // Вставляем блок с сообщением в родительский блок формы с задержкой 1 секунда
            setTimeout(function() {
                $('#saveChildForm').parent().append(messageBlock);
            }, 1000);
        }

        // Проверяем, сохранено ли уже имя в cookie, и обновляем форму и отображаем сообщение
        var savedName = getCookie('childName');
        if (savedName) {
            $('#saveChildForm').html(`${decodeURIComponent(savedName)}!`);
            showMessage(decodeURIComponent(savedName)); // Отображаем блок с сообщением сразу
        }

        $('#saveChildForm').submit(function(e) {
            e.preventDefault();
            var childName = $('#childName').val();
            // Сохраняем имя в cookie
            setCookie('childName', encodeURIComponent(childName), 1); // Устанавливаем cookie на 1 день
            $.ajax({
                type: "POST",
                url: ajaxurl,
                data: {
                    action: "save_child_name",
                    child_name: childName
                },
                success: function(response) {
                    if (response.success) {
                        $('#childrenSavedCounter').text(response.data);
                        $('#saveChildForm').html(childName + "!");
                        showMessage(childName); // Отображаем блок с сообщением после успешного сохранения
                    }
                }
            });
        });

        // Функция для обновления счётчика
        function updateCounter() {
            $.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    'action': 'get_current_count',
                },
                success: function(response) {
                    if (response.success) {
                        $('#childrenSavedCounter').text(response.data);
                    }
                }
            });
        }

        updateCounter(); // Загрузить текущее значение счётчика при инициализации страницы
        setInterval(updateCounter, 30000); // Обновляем счётчик каждые 30 секунд
    }); <
/script> <
script >
    document.addEventListener("DOMContentLoaded", function() {
        const elements = document.querySelectorAll('.kt-tab-title');

        elements.forEach(element => {
            // Получаем цвет фона элемента в формате HEX
            let bgColor = getComputedStyle(element).backgroundColor;
            // Конвертируем RGB в HEX, если нужно
            let hexColor = rgbToHex(bgColor);
            // Преобразуем HEX-цвет фона в темнее на определенный процент
            let darkerHexColor = darkenHexColor(hexColor, 30); // Затемняем на 30%

            // Применяем box-shadow с полученным темным цветом
            element.style.boxShadow = `0px 3px 0px 0px ${darkerHexColor}`;
        });
    });

function darkenHexColor(hex, percent) {
    // Удаляем #, если есть
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = parseInt(r * (100 - percent) / 100);
    g = parseInt(g * (100 - percent) / 100);
    b = parseInt(b * (100 - percent) / 100);

    r = (r < 255) ? r : 255;
    g = (g < 255) ? g : 255;
    b = (b < 255) ? b : 255;

    let rr = (r.toString(16).length == 1) ? "0" + r.toString(16) : r.toString(16);
    let gg = (g.toString(16).length == 1) ? "0" + g.toString(16) : g.toString(16);
    let bb = (b.toString(16).length == 1) ? "0" + b.toString(16) : b.toString(16);

    return `#${rr}${gg}${bb}`;
}

function rgbToHex(rgb) {
    // Проверяем, является ли входной цвет уже HEX
    if (rgb.startsWith('#')) return rgb;
    // Конвертируем RGB(A) в HEX
    let [r, g, b] = rgb.match(/\d+/g).map(Number);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

<
/script>

<
script >
    document.addEventListener('DOMContentLoaded', function() {
        // Функция для инициализации функционала
        function initialize() {
            const lists = document.querySelectorAll('.kt-tabs-title-list');

            lists.forEach(list => {
                const selectTitle = document.createElement('div');
                selectTitle.className = 'select-title';
                selectTitle.textContent = 'Выберите опцию';
                list.before(selectTitle);

                // Скрываем все li сразу
                list.querySelectorAll('li').forEach(item => {
                    item.style.display = 'none';
                });

                selectTitle.addEventListener('click', function() {
                    // Переключаем отображение списка при каждом клике
                    const isListVisible = list.querySelector('li').style.display === 'block';
                    list.querySelectorAll('li').forEach(item => {
                        item.style.display = isListVisible ? 'none' : 'block';
                    });
                });

                list.querySelectorAll('li').forEach(item => {
                    item.addEventListener('click', function(e) {
                        selectTitle.textContent = this.querySelector('.kt-title-text').textContent;
                        // Скрываем элементы после выбора
                        list.querySelectorAll('li').forEach(innerItem => {
                            innerItem.style.display = 'none';
                        });
                        e.stopPropagation(); // Останавливаем всплытие, чтобы клик по li не вызывал клик по selectTitle
                    });
                });

                // Добавим обработчик для клика вне списка, чтобы скрыть его
                document.addEventListener('click', function(e) {
                    if (!list.contains(e.target) && !selectTitle.contains(e.target)) {
                        list.querySelectorAll('li').forEach(item => {
                            item.style.display = 'none';
                        });
                    }
                });
            });
        }

        // Проверяем, соответствует ли текущая ширина экрана условию 1200px или меньше
        const mediaQuery = window.matchMedia('(max-width: 1200px)');

        if (mediaQuery.matches) { // Если условие истинно, выполняем инициализацию
            initialize();
        }

        // Добавляем слушатель на изменение размера окна
        mediaQuery.addListener(function(e) {
            if (e.matches) {
                // Если ширина становится 1200px или меньше, инициализируем функционал
                initialize();
            }
        });
    });


<
/script> <
script >
    document.querySelectorAll('.kt-tabs-title-list').forEach(tabList => {
        const items = tabList.querySelectorAll('.kt-title-item');
        const itemCount = items.length;
        const widthPerItem = (1200 / itemCount) - 15;

        items.forEach(item => {
            item.setAttribute('style', `width: ${widthPerItem}px !important;`);
        });
    });


<
/script>

<
script >
    document.addEventListener('DOMContentLoaded', function() {
        function calculateAndLogDistance() {
            const topElement = document.body; // Используем body как верхнюю точку отсчета
            const targetElement = document.querySelector('#body_drag_2019');

            if (targetElement) {
                // Прибавляем 300 к вычисленному расстоянию, а затем вычитаем 200
                const distance = targetElement.getBoundingClientRect().top - topElement.getBoundingClientRect().top + 100;
                console.log('Итоговое расстояние от #body_drag_2019 до верхней части сайта с учетом корректировки:', distance);

                // Сохраняем полученное значение в переменную CSS с названием --distance-to-top
                document.documentElement.style.setProperty('--distance-to-top', `${distance}px`);
            } else {
                console.log('Элемент #body_drag_2019 не найден.');
            }
        }

        calculateAndLogDistance();
        window.addEventListener('resize', calculateAndLogDistance);
    });

<
/script>

<
script >
    document.addEventListener('DOMContentLoaded', function() {
        const styleElement = document.createElement('style');
        document.head.appendChild(styleElement);

        const updatePowerTipStyle = () => {
            // Проверка ширины экрана перед выполнением изменений
            if (!window.matchMedia('(max-width: 1200px)').matches) {
                styleElement.textContent = '';
                return;
            }

            const tab815dbb89 = document.querySelector('.kt-inner-tab_815dbb-89');
            const tab65b1f8bb = document.querySelector('.kt-inner-tab_65b1f8-bb');
            let cssText = '';

            if (getComputedStyle(tab815dbb89).display === 'block') {
                cssText = '#powerTip { inset: var(--distance-to-top) auto auto !important; }';
            } else if (getComputedStyle(tab65b1f8bb).display === 'block') {
                cssText = '#powerTip { inset: var(--distance-to-top) 150px auto !important; }';
            }

            styleElement.textContent = cssText;
        };

        // Настройка MutationObserver для наблюдения за изменениями атрибутов
        const observer = new MutationObserver(updatePowerTipStyle);
        const config = { attributes: true, attributeFilter: ['style', 'class'] };

        const tab815dbb89 = document.querySelector('.kt-inner-tab_815dbb-89');
        const tab65b1f8bb = document.querySelector('.kt-inner-tab_65b1f8-bb');

        // Проверка, чтобы начать наблюдение, только если ширина экрана меньше 1200px
        if (window.matchMedia('(max-width: 1200px)').matches) {
            if (tab815dbb89) observer.observe(tab815dbb89, config);
            if (tab65b1f8bb) observer.observe(tab65b1f8bb, config);
        }

        // Инициализация стилей при загрузке
        updatePowerTipStyle();

        // Отслеживание изменений ширины экрана
        window.addEventListener('resize', () => {
            updatePowerTipStyle();
            // Перезапуск наблюдения при изменении условия ширины экрана
            if (window.matchMedia('(max-width: 1200px)').matches) {
                if (tab815dbb89) observer.observe(tab815dbb89, config);
                if (tab65b1f8bb) observer.observe(tab65b1f8bb, config);
            } else {
                observer.disconnect();
            }
        });
    });

<
/script>