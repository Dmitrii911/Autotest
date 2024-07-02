describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопк ивосст. пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Найти поле логин и ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Найти поле пароль и ввести верный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден для пользователя
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
         
 
     })

     it('Неверный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопк ивосст. пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Найти поле логин и ввести правильный логин
         cy.get('#pass').type('iLoveqastudio2'); // Найти поле пароль и ввести неверный пароль
         cy.get('#loginButton').click(); // Нажал войти
         
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден для пользователя
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
         
     })

     it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопк ивосст. пароль

        cy.get('#mail').type('german@dolnikos.ru'); // Найти поле логин и ввести неправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })

    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопк ивосст. пароль

        cy.get('#mail').type('germandolnikos.ru'); // Найти поле логин и ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })

    it('Логика восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопк ивосст. пароль

        cy.get('#forgotEmailButton').click(); // Нажал Забыли пароль?
        cy.get('#mailForgot').type('german@dolnikov.ru');// Найти поле логин и ввести логин 
        cy.get('#restoreEmailButton').click(); // Нажал отправить код
        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        
    })

    it('Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопк ивосст. пароль

        cy.get('#mail').type('German@dOlnikov.ru'); // Найти поле логин и ввести логин c заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Найти поле пароль и ввести верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Есть текст и он виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
        

    })
 })
 
 
 
 