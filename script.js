const menu = document.querySelector('.menu')
const cancel = document.querySelector('.cancel')
firstSection = document.querySelector('.first-section')
secondSection = document.querySelector('.second-section')
thirdSection = document.querySelector('.third-section')
menu.addEventListener('click',() => {
  secondSection.style.display = 'none'
  firstSection.style.display = 'block'
  thirdSection.style.display = 'block'
})
cancel.addEventListener('click',() =>{
  secondSection.style.display = 'block'
  firstSection.style.display = 'none'
  thirdSection.style.display = 'block'
})
