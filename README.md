### Описание
Простой проект-песочница для тестирования в локальной разработке клиентской части приложения на Vite + Vue 3 (TypeScript) после сборки.  

Проект запускает сервер на Nest.js который считывает клиентскую часть приложения как статику.  

Приложение позволяет разрабатывать клиентскую часть каждый раз пересобирая её при внесении изменений, тем самым работая только с собранной частью пригодной для деплоя.  

Создано в связи с тем, что после сборки приложения на Vue 3 могут возникать ошибки глубинного наследования, которые не проявляются в режиме разработки.  

### Установка
Из корня проекта `npm run initialize`  

### Запуск
Режим разработки: `npm run watch`  
Режим `production`: `npm run start:prod`  

### Сборка и ручной деплой
1. `npm run build`  
2. Создать папку которую затем разместим на сервере, например `nest-serverstatic-build`  
3. Копируем содержимое папки `build` во вновь созданную папку `nest-serverstatic-build`  
4. Скопировать в `nest-serverstatic-build` файл `package.json` из корня проекта  
5. `cd nest-serverstatic-build`  
6. Создаем внутри папки `nest-serverstatic-build` папку `build` (т.к. nest читает статику оттуда)  
7. Перемещаем папку `static` во вновб созданную папку `build` (вырезаем и вставляем)  
8. Из корня `nest-serverstatic-build` запускаем `npm install --only=prod`  
9. Из корня `nest-serverstatic-build` запускаем команду `node src\main`  


```bash
### Структура папок проекта для размещения
nest-serverstatic-build/
  package.json
  build/
    static/
      index.html        # Клиент
      ...
    client/             # Вспомогательная папка от TS
    node_modules/
    src/                # Сервер Nest.js
      main.js           # Файл запуска сервере на Nest.js
      ...
```