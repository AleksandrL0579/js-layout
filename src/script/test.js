export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/arrow.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/avatar1.png',
  },
]
//=============================
// const radioContainer =
//   document.getElementById('radioButtons')

// // Создадим радиокнопки на основе данных из объекта COMMUNITY
// COMMUNITY.tabs.forEach((tab) => {
//   if (tab.type === 'radio') {
//     const radioButton = document.createElement('input')
//     radioButton.type = 'radio'
//     radioButton.name = tab.name
//     radioButton.value = tab.value
//     radioButton.id = tab.title

//     const label = document.createElement('label')
//     label.textContent = tab.title
//     label.htmlFor = tab.title

//     // Добавим радиокнопку и метку в контейнер
//     radioContainer.appendChild(radioButton)
//     radioContainer.appendChild(label)
//   }
// })
//===================================
export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('beforeend', button)
  })

  return header
}
