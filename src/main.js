import { initialRoutes, hashRouterPush } from './route/router'

import './css/style.scss'

const app = document.getElementById('app')

initialRoutes(app)

window.onload = () => {
  const hashLinker = document.querySelectorAll('li.nav-item')

  hashLinker.forEach(el => {
    el.addEventListener('click', (evt) => {
      hashRouterPush(app)
    })
  })
}
