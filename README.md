Демонстрация: https://kniferrr.github.io/Microsite-for-SmartTV/

Описание проекта

Этот репозиторий содержит упрощенную демонстрационную версию микросайта для SmartTV, созданную в рамках тестового задания для Junior Frontend Developer. Микросайт представляет собой набор экранов, включая промо-видео с баннером, экран ввода номера с экранной клавиатурой и финальный информационный экран. Экраны вёрстки, навигацию и механизм ввода номера реализованы с использованием React.

Инструкции по установке и запуску

Чтобы установить и запустить этот проект, выполните следующие шаги:

Склонируйте репозиторий с помощью следующей команды:

git clone https://github.com/Kniferrr/Microsite-for-SmartTV

Перейдите в директорию проекта:

cd Microsite-for-SmartTV

Установите зависимости с помощью npm или yarn:

npm install

Запустите проект:

npm start

Проект будет доступен по адресу http://localhost:3000 в вашем браузере.

Технологии и библиотеки

Проект создан с использованием React.

Для управления состоянием и навигацией может использоваться TypeScript.

Дополнительные сторонние библиотеки могут быть использованы по необходимости.


Навигация в микросайте осуществляется с использованием следующих клавиш:

Стрелки для перемещения между кнопками, включая кнопки "закрыть" и "подтвердить".

Цифры и BACKSPACE для быстрого ввода номера.

ENTER для выбора активной кнопки.

Бонусные задания

Переход из экрана с видео и баннером должен приостанавливать видео. Переход обратно должен продолжать воспроизведение.

Добавить валидацию номера с использованием открытого сервиса, например, numverify.com.

На экране с микросайтом добавить таймер закрытия по бездействию, что интерактив закрывается, если пользователь ничего не делает в течение 10 секунд. Происходит переход на экран промо-видео с баннером.
