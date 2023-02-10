(() => {
    let bookControls = document.querySelector('.book__controls');
    let text = document.getElementById('book');

    bookControls.onclick = function(event) {
        let target = event.target;
        if (target.tagName !== 'A') {
            return;
        }
        changeStyle(target);
        return false;
    }

    function removeActive(item) {
        if (item.classList.contains('color')) {
            let active = item.closest('div').querySelector('.color_active');
            return active.classList.remove('color_active');
        } else if (item.classList.contains('font-size')) {
            let active = item.closest('div').querySelector('.font-size_active');
            return active.classList.remove('font-size_active');
        }
    }

    function changeStyle(el) {
        if (el.classList.contains('font-size')) {
            removeActive(el);
            el.classList.add('font-size_active');
            text.classList.remove('book_fs-small', 'book_fs-big');
            if (el.classList.contains('font-size_small')) {
                text.classList.add('book_fs-small');
            } else if (el.classList.contains('font-size_big')) {
                text.classList.add('book_fs-big');
            }
        }
        if (el.classList.contains('color')) {
            removeActive(el);
            el.classList.add('color_active');
            if (el.classList.contains('text_color_black')) {
                text.classList.remove('book_color-gray', 'book_color-whitesmoke');
                text.classList.add('book_color-black');
            } else if (el.classList.contains('text_color_gray')) {
                text.classList.remove('book_color-black', 'book_color-whitesmoke');
                text.classList.add('book_color-gray');
            } else if (el.classList.contains('text_color_whitesmoke')) {
                text.classList.remove('book_color-black', 'book_color-gray');
                text.classList.add('book_color-whitesmoke');
            } else if (el.classList.contains('bg_color_black')) {
                text.classList.remove('book_bg-gray', 'book_bg-white');
                text.classList.add('book_bg-black');
            } else if (el.classList.contains('bg_color_gray')) {
                text.classList.remove('book_bg-black', 'book_bg-white');
                text.classList.add('book_bg-gray');
            } else if (el.classList.contains('bg_color_white')) {
                text.classList.remove('book_bg-black', 'book_bg-gray');
                text.classList.add('book_bg-white');
            }
        }
    }
})();
