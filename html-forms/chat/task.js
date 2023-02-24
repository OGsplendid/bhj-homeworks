let chatWidgetSide = document.querySelector('.chat-widget__side');
let chatWidget = document.querySelector('.chat-widget');
let textInputElement = document.getElementById('chat-widget__input');
let messages = document.getElementById('chat-widget__messages');
let time = new Date().toLocaleTimeString();
const randomAnswerArr = [
        'До свидания', 
        'Никогда больше сюда не пишите', 
        'Для вас действует наценка 150 %', 
        'Как же вы нам надоели', 
        'Отстаньте уже от нас!', 
        'Будьте разумны, закройте наш сайт'
];
let timeoutId;

 chatWidgetSide.onclick = () => {
    chatWidget.classList.add('chat-widget_active');
    timeoutId = setTimeout(() => {
      messages.innerHTML += `
      <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">
            Are you here?
        </div>
      </div>
      `;
    }, 5000);
}

textInputElement.addEventListener('keypress', function(e) {

  clearTimeout(timeoutId);

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

  // правильная ли проверка? Ведь под неё подходит и '   '
  if (clientText && e.key === 'Enter') {
      messages.innerHTML += dialogue;
      messages.scrollIntoView(false);

    // почему не получилось очищать поле ввода так: clientText = ''?
    textInputElement.value = '';
  }
})
