import { footerController } from './controllers/partials/footerController.ts'
import { headerController } from './controllers/partials/headerController.ts'
import { render } from './utils/dom.ts'
import { createFragment } from './views/components/atoms/index.ts'
import './style.css'
import { navController } from './controllers/partials/navController.ts'
import { initRouter } from './router/router.ts'
import { mainController } from './controllers/partials/mainController.ts'

const initApp = async (): Promise<void> => {
  const fragment = createFragment()
  fragment.append(headerController.render())
  fragment.append(await navController.render())
  fragment.append(mainController.render())
  fragment.append(footerController.render())
  render('app', fragment, true)
  initRouter()
}

initApp()