

let btn = document.getElementById('clickMe');
let i = 0;

btn.addEventListener(
    'click', () => {
        i = i + 1;
        document.getElementById('clickMe').innerHTML = 'Click me: ' + i;
        console.log(i);
    }
);