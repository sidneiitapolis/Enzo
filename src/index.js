import {createRoot} from 'react-dom/client'
import App from'./App'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

createRoot(document.querySelector('#root')).render(<App/>)