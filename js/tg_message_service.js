
    // ВАРИАНТ БЕЗ ИСПОЛЬЗОВАНИЯ СЕРВЕРА ДЛЯ ОБРАБОТКИ СООБЩЕНИЙ

    const TOKEN = "7518521452:AAGQvr3b5Q3fcOqHbmHMOVJkT9dsPLm0msQ";
    const CHAT_ID = "-1002318470204";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    // const URI_SERVER = 'http://localhost:3000/telegram-message';   //Раскоментировать если используем сервер


    document.getElementById('tg-form').addEventListener('submit', function(e) {
        e.preventDefault();
        let text = document.querySelector('#msg');
        const elementPopup = document.getElementById('alertPop-up');

        let content  = document.getElementById('alertContent');
        

       let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Отправитель:</b> ${this.name.value}\n`;
        message += `<b>Телефон:</b> ${this.phone.value}\n`;
        message += `<b>Сообщение:</b> ${text.value}\n`;


        if (this.name.value === '' || this.phone.value === '' || text.value === '') {
            content.innerHTML = `<h1>Все поля должны быть заполнены!</h1>`;
            elementPopup.style.borderColor = "red";
            elementPopup.show();
            
            setTimeout(() => {
                elementPopup.close();
                elementPopup.style.borderColor = "";
            }, 2000);
        } else {
            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            })
            .then((res) => {

                    this.name.value = "";
                    this.phone.value = "";
                    text.value = "";

                    content.innerHTML = `<h1>Сообщение отправлено!</h1>`;
                    elementPopup.show()

                setTimeout(() => {
                    elementPopup.close();
                }, 2000);
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() => {})
        }
        
    })


     // ВАРИАНТ С ИСПОЛЬЗОВАНИЕМ СЕРВЕРА


    // document.getElementById('tg-form').addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     let text = document.querySelector('#msg');
    //     const elementPopup = document.getElementById('alertPop-up');

    //     let content  = document.getElementById('alertContent');

    //     axios.post(URI_SERVER, {

    //         name: this.name.value,
    //         phone: this.phone.value,
    //         message: text.value
    //         })
    //         .then((res) => {
    //             console.log(res);

    //             if(res.statusText === 'No Content') {
    //                 content.innerHTML = `<h1>Все поля должны быть заполнены!</h1>`;
    //                 elementPopup.style.borderColor = "red";
    //                 elementPopup.show();
                    
    //                 setTimeout(() => {
    //                     elementPopup.close();
    //                     elementPopup.style.borderColor = "";
    //                 }, 2000);
    //             } else {

    //                 this.name.value = "";
    //                 this.phone.value = "";
    //                 text.value = "";

    //                 content.innerHTML = `<h1>Сообщение отправлено!</h1>`;
    //                 elementPopup.show();
                    
    //                 setTimeout(() => {
    //                     elementPopup.close();
    //                 }, 2000);
    //             }
                
    //         })
    //         .catch((err) => {
    //             console.warn(err);
    //         })
    //         .finally(() => {})

    // })