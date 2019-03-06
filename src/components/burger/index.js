let gamb = document.getElementById('gamb');
let navigation = document.getElementById('navigation');


gamb.addEventListener('click', function() {
if (navigation.classList.contains('header__navigation--active')) {
    navigation.classList.remove('header__navigation--active');
    gamb.classList.remove('gamb__btn--active')
}
else {
    navigation.classList.add('header__navigation--active');
    gamb.classList.add('gamb__btn--active')
}
});