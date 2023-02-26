let tooltips = Array.from(document.getElementsByClassName('has-tooltip'));
let tip = document.querySelector('.tooltip');

for (let tooltip of tooltips) {
    tooltip.onclick = () => {

        if (tooltip.childNodes.length === 1) {
            tooltip.insertAdjacentElement('afterEnd', tip);
            tip.classList.add('tooltip_active');
            tip.textContent = tooltip.title;
            tip.style.top = tooltip.getBoundingClientRect().top + 20 + `px`;
            tip.style.left = tooltip.getBoundingClientRect().left + `px`;
        } else {
            tooltip.classList.toggle('tooltip_active');
            tip.classList.toggle('tooltip_active');
        }
        return false;
    }
}
window.onscroll = () => {
    tip.classList.remove('tooltip_active');
}
