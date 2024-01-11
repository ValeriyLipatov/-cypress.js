describe('автотест на форму логина', function () {
   it('позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').should('be.visible');// виден текст 
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// совпадение текста 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть 
    })

 it('автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click();// нажать 'Забыли пароль'
        cy.get('#mailForgot').type('german@dolnikov2.ru'); // ввели в инпут почту
        cy.get('#restoreEmailButton').click(); // нажали 'Отправить код'
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть 
    })

 it('проверку на негативный кейс авторизации: Не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // верный логин
        cy.get('#pass').type('1234QA'); //не правильный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').should('be.visible');// виден текст 
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//  совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть 
    })

 it('проверку на негативный кейс авторизации: Не верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('valera@mail.ru'); // НЕ верный логин
        cy.get('#pass').type('iLoveqastudio1'); //правильный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').should('be.visible');// виден текст 
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//  совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть 
    })

 it('проверку на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //  верный логин
        cy.get('#pass').type('iLoveqastudio1'); //правильный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').should('be.visible');// виден текст 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//  совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть 
    })
 it('проверку на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //  верный логин
        cy.get('#pass').type('iLoveqastudio1'); //правильный пароль
        cy.get('#loginButton').click(); // нажать кнопку войти
        cy.get('#messageHeader').should('be.visible');// виден текст 
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//  совпадения текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик есть 
    })
 })