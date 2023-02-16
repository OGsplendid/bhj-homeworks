let chatWidgetSide = document.querySelector('.chat-widget__side');
let chatWidget = document.querySelector('.chat-widget');
let textInputElement = document.getElementById('chat-widget__input');

 chatWidgetSide.onclick = () => {
    chatWidget.classList.add('chat-widget_active');

    let timeoutInitial = setTimeout(() => {
      messages.innerHTML += `
      <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">
            Вы всё ещё здесь?
        </div>
      </div>
      `;
    }, 5000);
}

textInputElement.addEventListener('keyup', function(e) {

    // clearTimeout(timeoutInitial);
    
    // let timeout = setTimeout(() => {
    //   messages.innerHTML += `
    //   <div class="message">
    //     <div class="message__time">${time}</div>
    //     <div class="message__text">
    //         Вы всё ещё здесь?
    //     </div>
    //   </div>
    //   `;
    // }, 5000);

    let messages = document.getElementById('chat-widget__messages');

    const randomAnswerArr = [
        'До свидания', 
        'Никогда больше сюда не пишите', 
        'Для вас действует наценка 150 %', 
        'Как же вы нам надоели', 
        'Отстаньте уже от нас!', 
        'Будьте разумны, закройте наш сайт'
    ];

    // нормальный вариант или можно сделать красивее?
    let time = `${new Date().getHours()}:${new Date().getMinutes()}`;

    // мне кажется, что некоторые ответы появляются чаще остальных. Есть ли вариает лучше?
    let randomText = randomAnswerArr[Math.floor(Math.random() * randomAnswerArr.length)];

    let clientText = textInputElement.value;

    let dialogue = `
    <div class="message message_client">
      <div class="message__time">${time}</div>
      <div class="message__text">
        ${clientText}
      </div>
    </div>
    <div class="message">
      <div class="message__time">${time}</div>
      <div class="message__text">
        ${randomText}
      </div>
    </div>
    `;

  if (e.key === 'Enter') {
    messages.innerHTML += dialogue;

    // почему не получилось очищать поле ввода так: clientText = ''?
    textInputElement.value = '';
    // let lastMessage = messages.lastElementChild;
    // console.log(lastMessage);
    // let bottom = lastMessage.getBoundingClientRect().bottom;
    // console.log(bottom);
  }

  // clearTimeout(timeout);
})
