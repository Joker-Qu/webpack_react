import React from 'react'
import ReactDom from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './App.jsx'


const render = (Component) => {
  ReactDom.hydrate(<AppContainer> <Component/> </AppContainer>, document.getElementById('root')) // eslint-disable-line
}
render(App)
if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default
    render(NextApp)
  })
}
