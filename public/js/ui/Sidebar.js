class Sidebar {
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  // не получилось тоглить через запятую несколько классов, хотя с add и remove получалось
  static initToggleButton() {
    document.querySelector('.sidebar-toggle').onclick = () => {
      document.body.classList.toggle('sidebar-collapse');
      document.body.classList.toggle('sidebar-open');
    }
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регистрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector('.menu-item_register').onclick = () => {
      App.getModal('register').open();
    }
    document.querySelector('.menu-item_login').onclick = () => {
      App.getModal('login').open();
    }
    document.querySelector('.menu-item_logout').onclick = () => {
      User.logout();
    }
  }
}