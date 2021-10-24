import '../styles/globals.css'
import "tailwindcss/dist/base.min.css";
import {store} from '../app/store'
import { Provider } from 'react-redux';


function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
  <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp


//https://dev.to/devsmranjan/styling-react-components-styled-components-twin-macro-tailwind-css-2-0-3cnk
//https://blog.logrocket.com/intro-to-twin/