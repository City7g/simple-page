document.querySelectorAll('.questions__item').forEach((i, index) => {
  i.addEventListener('click', () => {
    document.querySelectorAll('.questions__item').forEach((item) => {
      item.classList.remove('active')
    })
    document.querySelectorAll('.questions__item')[index].classList.toggle('active')
  })
})