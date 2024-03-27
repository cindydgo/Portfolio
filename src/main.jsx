import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom'
import routes from '~react-pages'
import './index.css'

console.log(import.meta.env.DEV);

const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ? '/' : '/Portfolio/' })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

/*import React from 'react'

export { Link }

function Link({ href, children }) {
  if (!href.startsWith('/')) throw new Error('Link href should start with /')
  href = import.meta.env.BASE_URL + href
  href = normalize(href)
  return <a href={href}>{children}</a>
}
function normalize(url) {
  return '/' + url.split('/').filter(Boolean).join('/') */