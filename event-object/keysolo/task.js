class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector('.timer');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {

    if (this.wordElement.textContent.length > 0) {
      this.timer.textContent = this.wordElement.textContent.length;

      // нет, не до конца работает интервал (пишу после отправки дз на проверку). После первого правильно введённого слова, он останавливается...
      function counter() {
        this.timer.textContent--;
        if (this.timer.textContent < 0) {
          this.fail();
          this.setNewWord();
          this.timer.textContent = this.wordElement.textContent.length;
        } else if (this.setNewWord && this.winsElement !== 0) { // какое здесь прописать условие? Наверное, нужно прописать, что число в this.winsElement увеличивается на 1?
            this.timer.textContent = this.wordElement.textContent.length;
        }
      }

      let boundCounter = counter.bind(this);
      setInterval(boundCounter, 1000);
    }

    function onKey(e) {

      // здесь код для обычного уровня сложности:

      // if (e.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
      //   this.success();
      // } else {
      //   this.fail();
      // }

      //здесь я написал код для повышенного уровня сложности #3:

      let inputChar = `Key${this.currentSymbol.textContent.toUpperCase()}`;

      // здесь была попытка сделать это другим образом, но коды не совпадают
      // if (e.key.toLowerCase().charCodeAt(0)) === this.currentSymbol.textContent.toLowerCase().charCodeAt(0) {
      //   this.success();
      // } else {
      //   this.fail();
      // }

      if (e.code === inputChar) {
        this.success();
      } else {
        this.fail();
      }

      // Повышенный уровень сложности #1. Здесь в if должно быть некое условие 
      // (setNewWord??), что когда появляется новое слово, - нужно исполнить скрипт
    };

    let boundOnKey = onKey.bind(this);
    document.addEventListener('keydown', boundOnKey);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
