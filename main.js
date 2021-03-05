let currentItem = 0

document.querySelectorAll('.questions__item').forEach((i, index) => {
  i.addEventListener('click', () => {
    document.querySelectorAll('.questions__item').forEach((item, itemIndex) => {
      if (itemIndex !== index) {
        item.classList.remove('active')
      }
    })
    if (document.querySelectorAll('.questions__item')[index].classList.contains('active')) {
      document.querySelectorAll('.questions__item')[index].classList.remove('active')
    } else {
      if(currentItem !== index) {
        setTimeout(() => {
          document.querySelectorAll('.questions__item')[index].classList.add('active')
        }, 400);
        console.log(currentItem)
      } else {
        document.querySelectorAll('.questions__item')[index].classList.add('active')
      }
    }
    currentItem = index
  })
})