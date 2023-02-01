const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('.register-button');
const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
const theDay = document.querySelector('.days')

function addId(x) {
    x.setAttribute('id', today)
}

function blockDivs(){
    const days = document.querySelectorAll('.day')
    days.forEach(day => { day.style.pointerEvents = "none" })
}

function unlockLastDiv(){
theDay.lastChild.style.pointerEvents= ""
}

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {

  blockDivs()
  
    dayExists = nlwSetup.dayExists(today)
    
    if (dayExists) {
        alert("this day is already registered ⛔")
       
    }
        nlwSetup.addDay(today)
        addId(theDay.lastElementChild)
        unlockLastDiv()
}
//blocked previous days, but stil unblocked after refresh

function save() {

localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};

nlwSetup.setData(data);
nlwSetup.load(JSON.parse(localStorage.getItem('NLWSetup@habits')));

