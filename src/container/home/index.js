import {
  createElement,
  createHeader,
} from '../../script/test.js'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const COMMUNITY = {
  tabs: [
    {
      title: 'База знань',
      type: 'radio',
      name: 'radioGroup',
      value: 'option1',
      active: true,
    },
    {
      title: 'Інформація',
      type: 'radio',
      name: 'radioGroup',
      value: 'option2',
      active: false,
    },
  ],

  img: {
    src: '/img/com.png',
  },
  info: {
    title: 'Що таке база знань?',
    text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
  },
  button: "Перейти до ком'юніті у Телеграм",
}

const createCommunity = () => {
  const community = createElement('main', 'community')

  const communityTab = createElement('div', 'tab')

  COMMUNITY.tabs.forEach((value) => {
    const button = createElement(
      'button',
      value.active
        ? 'button tab-button active'
        : 'button tab-button',
      value.title,
    )
    communityTab.append(button)
  })

  community.append(communityTab)

  const communityMain = createElement('div', 'main')

  const img = createElement('img')
  img.src = COMMUNITY.img.src

  communityMain.append(img)

  const communityInfo = createElement('section', 'info')

  const communityInfoTitle = createElement(
    'h2',
    'info--title',
    COMMUNITY.info.title,
  )

  const communityInfoText = createElement(
    'p',
    'info--text',
    COMMUNITY.info.text,
  )

  communityInfo.append(
    communityInfoTitle,
    communityInfoText,
  )

  communityMain.append(communityInfo)

  const communityButton = createElement(
    'button',
    'button com__button',
    COMMUNITY.button,
  )

  communityMain.append(communityButton)

  community.append(communityMain)

  return community
}

const community = createCommunity()
page.append(community)
