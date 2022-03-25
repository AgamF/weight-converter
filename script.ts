function render(
  type: string,
  text: string | null,
  id?: string,
  position?: any
) {
  const elem = document.createElement(type);
  elem.innerText = text;
  elem.id = id;
  if (position) {
    position.appendChild(elem);
  } else document.body.appendChild(elem);
}

const elements = {
  input: document.querySelector('input')! as HTMLInputElement,
  toKgBtn: document.getElementById('kg')! as HTMLButtonElement,
  toLbsBtn: document.getElementById('lbs')! as HTMLButtonElement,
  resultField: document.getElementById('show-results')! as HTMLDivElement
};

const { input, toKgBtn, toLbsBtn, resultField } = elements;

const convertToKG = (pounds: number) => {
  return Math.round(pounds / 2.2);
}

const convertToLBS = (kilos: number) => {
  return Math.round(kilos * 2.2);
}

toKgBtn.onclick = () => {
  if (isNaN(+input.value)) {
    return alert("That is not a number!");
  } else if (+input.value <= 0) {
    return alert("Number can't be smaller or equal to zero!");
  }
  const result = convertToKG(+input.value);
  render('h1', `Your weight in KG is ${result}`, 'rskg', resultField);
  const resultForKg = document.getElementById('rskg');
  resultForKg.classList.add("animate__animated", "animate__fadeInUp");
  setTimeout(() => {
    resultForKg.remove();
  }, 7000);
}

toLbsBtn.onclick = () => {
  if (isNaN(+input.value)) {
    return alert("That is not a number!");
  } else if (+input.value <= 0) {
    return alert("Number can't be smaller or equal to zero!");
  }
  const result = convertToLBS(+input.value);
  render('h1', `Your weight in LBS is ${result}`, 'rslbs', resultField);
  const resultForLbs = document.getElementById('rslbs');
  resultForLbs.classList.add("animate__animated", "animate__fadeInUp");
  setTimeout(() => {
    resultForLbs.remove();
  }, 7000);
}