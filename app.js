const form = document.querySelector('form')
const div = document.querySelector('.header')
const h2 = document.createElement('h2')
const correctAnswers = ['B','B','A','B','A']



form.addEventListener('submit', event => {
  event.preventDefault()
  let score = 0
  
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
  ]
  
  userAnswers.forEach((answer,index) => {
    if(answer === correctAnswers[index]){
      score += 20
    }
  })

  scrollTo(0,0)

  h2.classList.add('score')
  div.insertAdjacentElement('beforeend',h2)

  let counter = 0

  const timer = setInterval(() => {
    if(counter === score){
      clearInterval(timer)
    }
    h2.innerHTML= `Você acertou <span class='porcentage'>${counter}%</span> do quiz!`
    counter++
  },10)

})
