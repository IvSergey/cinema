const fashion = document.querySelector('#fashion');
const cinema = document.querySelector('#cinema');
const tv = document.querySelector('#tv');
const fashion_list = document.querySelector('#fashion-list');
const cinema_list = document.querySelector('#cinema-list');
const tv_list = document.querySelector('#tv-list');
// const desc = document.querySelector('#desc');

fashion.addEventListener('click', () => {
    if (cinema_list.classList.contains('active') || tv_list.classList.contains('active')) {
        cinema_list.classList.remove('active');
        tv_list.classList.remove('active');
        fashion_list.classList.add('active');
        fashion.classList.add('active');
        cinema.classList.remove('active');
        tv.classList.remove('active');
    }
})

cinema.addEventListener('click', () => {
    if (fashion_list.classList.contains('active') || tv_list.classList.contains('active')) {
        fashion_list.classList.remove('active');
        tv_list.classList.remove('active');
        cinema_list.classList.add('active');
        cinema.classList.add('active');
        fashion.classList.remove('active');
        tv.classList.remove('active');
    }
})

tv.addEventListener('click', () => {
    if (cinema_list.classList.contains('active') || fashion_list.classList.contains('active')) {
        cinema_list.classList.remove('active');
        fashion_list.classList.remove('active');
        tv_list.classList.add('active');
        tv.classList.add('active');
        fashion.classList.remove('active');
        cinema.classList.remove('active');
    }
})

