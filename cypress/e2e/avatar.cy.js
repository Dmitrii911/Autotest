describe('Проверка авторизации', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/'); // Зашли на сайт
         
         cy.get(':nth-child(1) > .auth__input').type('mister.wedil@yandex.ru'); // Найти поле логин и ввести правильный логин
         cy.get('#password').type('269401demoooN'); // Найти поле пароль и ввести верный пароль
         cy.get('.auth__button').click(); // Нажал войти

         cy.get('.header__btns > :nth-child(4)').click(); // Нажал Магазин
         cy.get('.available > .shop__button').first().click(); // Нажал кнопку купить
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // срок
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('DMITRII OLEINIK'); // имя
         cy.get('.pay-btn').click(); // Нажал оплатить
         cy.get('#cardnumber').type('56456'); // код из смс
         cy.get('.payment__submit-button').click(); // Нажал Отправить

         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // Проверяю, что после авт. вижу текст

    
     })

 })
 
 
 
 