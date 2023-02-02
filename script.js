window.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body');




    const navButtonChange = document.querySelector('.nav__button_change');
    const navChangeTextRU = navButtonChange.querySelector('.nav__change_text-RU');
    const navChangeTextEN = navButtonChange.querySelector('.nav__change_text-EN');
    
    const navButtonLogin = document.querySelector('.nav__button_login');
    const modalLoginWindow = document.querySelector('.modal__login');
    const modalLoginCloseBtn = document.querySelector('.modal__login_closebtn');

    const navButtonRegistr = document.querySelector('.nav__button_registr');
    const modalRegistrWindow = document.querySelector('.modal__register');
    const modalRegisterCloseBtn = document.querySelector('.modal__register_closebtn')









   
    function changeLang() {

        

        navButtonChange.addEventListener('click', () => {
           
            if(!navChangeTextRU.classList.contains('hide-text')){
                navChangeTextEN.classList.remove('hide-text');
                navChangeTextRU.classList.add('hide-text')
            }
            else{
                navChangeTextEN.classList.add('hide-text');
                navChangeTextRU.classList.remove('hide-text')
            }
        } );
        
    }   

    

    function showModalLogin() {
        modalLoginWindow.classList.add('show');
        modalLoginWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    function closeModalLogin(){
        modalLoginWindow.classList.add('hide');
        modalLoginWindow.classList.remove('show');
        document.body.style.overflow = '';
    }

    function showModalRegister() {
        modalRegistrWindow.classList.add('show');
        modalRegistrWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
    function closeModalRegister(){
        modalRegistrWindow.classList.add('hide');
        modalRegistrWindow.classList.remove('show');
        document.body.style.overflow = '';
    }

    

    function loginBtnTouch(){
        navButtonLogin.addEventListener('click', () => {
            if(modalLoginWindow.classList.contains('hide')){
               showModalLogin();
            }
            else{
                closeModalLogin();
            }
        } );
    }
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modalLoginWindow.classList.contains('show')){
            closeModalLogin();
        }
    });
    
    modalLoginCloseBtn.addEventListener('click', () => {
        closeModalLogin();
    } );
    
    function registerBtnTouch(){
        navButtonRegistr.addEventListener('click', () => {
            if(modalRegistrWindow.classList.contains('hide')){
                showModalRegister();
            }
            else{
                closeModalRegister();
            }
        } );
    }
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modalRegistrWindow.classList.contains('show')){
            closeModalRegister();
        }
    });
    
    modalRegisterCloseBtn.addEventListener('click', () => {
        closeModalRegister();
    } );

    //class for card

    class Card {
        constructor(src,title,link,parentSelector, icon){
            this.src = src;
            this.title = title;
            this.link = link;
            this.parent = document.querySelector(parentSelector);
            this.icon = icon;
        }

        createCard(){
            const card = document.createElement('div');
            card.innerHTML = `
            <div class ="offer__card">
                <img src="${this.src}" alt="" class = "offer__card_img">
                <h3 class ="offer__card_title">${this.title}</h3>
                <div class = "offer__card_box">
                    <a href="" class = "offer__card_link">${this.link}</a>
                    <div class = "offer__card_icon"></div>
                </div>
            </div>
            `;
            this.parent.append(card);
        }

        deletecard(){

        }
    }
    new Card(
        'img/card__img1.png',
        'Здоровье',
        'Офферы',
        '.offer__cards',
        'img/offer__card_arrow.png',
    ).createCard();
    new Card(
        'img/card__img2.png',
        'Для автомобиля',
        'Офферы',
        '.offer__cards',
        'img/offer__card_arrow.png',
    ).createCard();
    new Card(
        'img/card__img3.png',
        'Все для дома',
        'Офферы',
        '.offer__cards',
        'img/offer__card_arrow.png',
    ).createCard();
    new Card(
        'img/card__img4.png',
        'Красота',
        'Офферы',
        '.offer__cards',
        'img/offer__card_arrow.png',
    ).createCard();


    class QuestionCard{
        constructor(src, text, parentSelector){
            this.src = src;
            this.text= text;
            this.parent = document.querySelector(parentSelector);
        }
        
        createCard(){
            const questionCard = document.createElement('div');
            questionCard.innerHTML = `
            <div class = "question__card">
                <img src="${this.src}" alt="" class="qustion__card_img">
                <p class = "question__card_text">${this.text}</p>
            </div>
            `;
            this.parent.append(questionCard)
        }
    }

    new QuestionCard(
        "img/question1.png",
        "Персональный менеджер",
        ".question__cards"
    ).createCard();
    new QuestionCard(
        "img/question2.png",
        "Профессиональная служба поддержки 24/7",
        ".question__cards"
    ).createCard();
    new QuestionCard(
        "img/question3.png",
        "Продвинутая аналитика",
        ".question__cards"
    ).createCard();
    new QuestionCard(
        "img/question4.png",
        "Профессиональная служба поддержки 24/7",
        ".question__cards"
    ).createCard();

    
    

    loginBtnTouch();
    registerBtnTouch();
    changeLang();
    
    
} );