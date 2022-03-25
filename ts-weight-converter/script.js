function render(type, text, id, position) {
    var elem = document.createElement(type);
    elem.innerText = text;
    elem.id = id;
    if (position) {
        position.appendChild(elem);
    }
    else
        document.body.appendChild(elem);
}
var elements = {
    input: document.querySelector('input'),
    toKgBtn: document.getElementById('kg'),
    toLbsBtn: document.getElementById('lbs'),
    resultField: document.getElementById('show-results')
};
var input = elements.input, toKgBtn = elements.toKgBtn, toLbsBtn = elements.toLbsBtn, resultField = elements.resultField;
var convertToKG = function (pounds) {
    return Math.round(pounds / 2.2);
};
var convertToLBS = function (kilos) {
    return Math.round(kilos * 2.2);
};
toKgBtn.onclick = function () {
    if (isNaN(+input.value)) {
        return alert("That is not a number!");
    }
    else if (+input.value <= 0) {
        return alert("Number can't be smaller or equal to zero!");
    }
    var result = convertToKG(+input.value);
    render('h1', "Your weight in KG is ".concat(result), 'rskg', resultField);
    var resultForKg = document.getElementById('rskg');
    resultForKg.classList.add("animate__animated", "animate__fadeInUp");
    setTimeout(function () {
        resultForKg.remove();
    }, 7000);
};
toLbsBtn.onclick = function () {
    if (isNaN(+input.value)) {
        return alert("That is not a number!");
    }
    else if (+input.value <= 0) {
        return alert("Number can't be smaller or equal to zero!");
    }
    var result = convertToLBS(+input.value);
    render('h1', "Your weight in LBS is ".concat(result), 'rslbs', resultField);
    var resultForLbs = document.getElementById('rslbs');
    resultForLbs.classList.add("animate__animated", "animate__fadeInUp");
    setTimeout(function () {
        resultForLbs.remove();
    }, 7000);
};
// DONT FORGET TO RE-COMPILE THE TYPESCRIPT CODE
