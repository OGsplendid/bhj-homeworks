let tooltips = Array.from(document.getElementsByClassName('has-tooltip'));
let tip = document.querySelector('.tooltip');

for (let tooltip of tooltips) {
    tooltip.onclick = () => {

        if (tooltip.childNodes.length === 1) {
            tooltips.forEach(el => el.classList.remove('tooltip_active'));
            tooltip.classList.add('tooltip_active');
            tooltip.appendChild(tip);
            tip.classList.add('tooltip_active');
            tip.textContent = tooltip.title;
        } else {
            tooltip.classList.toggle('tooltip_active');
            tip.classList.toggle('tooltip_active');
        }

        return false;
    }
}
