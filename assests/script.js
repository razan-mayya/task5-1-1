
var st = "";
function output(v) {
    st += v;
    let output = document.querySelector('#output');
    output.value = st;
    // localStorage.setItem('fullstring', JSON.stringify(screen.value));
}
function cal() {

    let numbers = st.match(/\d+/g); // الأرقام
    let operator = st.match(/[\+\-\*\/]/)[0]; // العملية الحسابية

    let n1 = parseInt(numbers[0]);
    let n2 = parseInt(numbers[1]);
    let op = operator;
    switch (op) {
        case '+':
            var screen = document.querySelector('#output');
            screen.value = n1 + n2;
            break;
        case '-':
            var screen = document.querySelector('#output');
            screen.value = n1 - n2;
            break;
        case '*':
            var screen = document.querySelector('#output');
            screen.value = n1 * n2;
            break;
        case '/':
            var screen = document.querySelector('#output');
            screen.value = n1 / n2;
            break;

        default:
            break;
    }
}
function del() {
    var screen = document.querySelector('#output');
    screen.value = st.slice(0, -1);
}
function delall() {
    var screen = document.querySelector('#output');
    screen.value = st.slice(0, -st.lenght);
}
