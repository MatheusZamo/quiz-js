const form = document.querySelector('form')
const div = document.querySelector('.header')
const h2 = document.createElement('h2')
const correctAnswers = ['B','B','A','B','A']

let score = 0

const getUserAnswers = () => {
  let userAnswers = []

  correctAnswers.forEach((_,index) => {
    const userAnswer = form[`inputQuestion${index + 1}`]
    userAnswers.push(userAnswer)
  })

  return userAnswers
}

const calculateUserScore = (userAnswers) => {
  score = 0

  userAnswers.forEach((answer,index) => {
    const isUserAnswerCorrect = answer.value === correctAnswers[index]
    if(isUserAnswerCorrect){
      score += 20
    }
  })
}

const showFinalScore = () => {
  h2.classList.add('score')
  div.insertAdjacentElement('beforeend',h2)
  scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  })
}
const animateFinalScore = () => {
  let counter = 0

  const addBackground = color => h2.style.background = color
  
  const timer = setInterval(() => {
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
    ++counter
  },30)
}

const clearForm = (userAnswers) => {
  for(let i = 0;i < userAnswers.length;i++){
    for(let x = 0;x < userAnswers[i].length;x++){
      userAnswers[i][x].checked = false
    }
  }
}

const handleSubmit = event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()
  
  calculateUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()
  clearForm(userAnswers)
}

form.addEventListener('submit', handleSubmit)
