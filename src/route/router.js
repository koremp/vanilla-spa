import Home from '../pages/home.html?raw';
import About from '../pages/about.html?raw';
import List from '../pages/list.html?raw';
import Search from '../pages/search.html?raw';

const routes = {
  '/': Home,
  '/about': About,
  '/list': List,
  '/search': Search
}


function initialRoutes (el) {
  renderHTML(el, getHashRoute())

  window.addEventListener('hashchange', () => {
    return renderHTML(el, getHashRoute())
  })  
}

function getHashRoute () {
  let route = '/'

  Object.keys(routes).forEach(hashRoute => {
    if (window.location.hash.replace('#', '') === hashRoute.replace('/', '')) {
      route = routes[hashRoute]
    }
  })

  return route
}

// set hash history
function hashRouterPush (el) {
  renderHTML(el, getHashRoute())
}

// render
function renderHTML (el, route) {
  el.innerHTML = route;
}

export {
  initialRoutes,
  hashRouterPush
}