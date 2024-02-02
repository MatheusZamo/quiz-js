const form = document.querySelector('form')
const div = document.querySelector('.header')
const h2 = document.createElement('h2')
const correctAnswers = ['B','B','A','B','A']

const handleSubmit = event => {
  event.preventDefault()
  h2.classList.add('score')
  div.insertAdjacentElement('beforeend',h2)
  let score = 0
  let counter = 0

  let userAnswers = [
    form.inputQuestion1,
    form.inputQuestion2,
    form.inputQuestion3,
    form.inputQuestion4,
    form.inputQuestion5,
  ]
  
  const addScore = (answer,index) => {
    if(answer.value === correctAnswers[index]){
      score += 20
    }
  }

  const addBackground = color => h2.style.background = color
 
  const funcInterval = () => {
    if(counter === score){
      clearInterval(timer)
    }

    if(counter >= 80){
      addBackground('rgb(120, 241, 120)')
    } else if(counter < 80 && counter >= 40){
      addBackground('rgb(236, 236, 87)')
    } else {
      addBackground('rgb(243, 79, 79)')
    }
    
    h2.innerHTML= `Você acertou <span class='porcentage'>${counter}%</span> do quiz!`
    counter++
  }
  
  userAnswers.forEach(addScore)
  scrollTo(0,0)
  const timer = setInterval(funcInterval,30)

  for(let i = 0;i < userAnswers.length;i++){
    for(let x = 0;x < userAnswers[i].length;x++){
      userAnswers[i][x].checked = false
    }
  }
}

form.addEventListener('submit', handleSubmit)
