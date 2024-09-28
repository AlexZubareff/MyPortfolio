


function showPopup(){

    const element = document.getElementById('alertPop-up');
    element.show();
  }

function closePopup(){
    const element = document.getElementById('alertPop-up');
    element.close();
  }
    
    const TOKEN = "7518521452:AAGQvr3b5Q3fcOqHbmHMOVJkT9dsPLm0msQ";
    const CHAT_ID = "-1002318470204";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    document.getElementById('tg-form').addEventListener('submit', function(e) {
        e.preventDefault();
        let text = document.querySelector('#msg');

        let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Отправитель:</b> ${this.name.value}\n`;
        message += `<b>Телефон:</b> ${this.phone.value}\n`;
        message += `<b>Сообщение:</b> ${text.value}\n`;



        console.log(message)


        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            this.name.value = "";
            this.phone.value = "";
            text.value = "";

            showPopup();
            setTimeout(() => {
                closePopup();
            }, 2000);
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {})
    })

