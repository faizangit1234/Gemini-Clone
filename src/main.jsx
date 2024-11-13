import { render } from 'preact'
import './index.css'
import { App } from './app.jsx'
import ContextProvider from './context/Context.jsx'

render(
 <ContextProvider>
    <App />
 </ContextProvider>   


, document.getElementById('app')

)
