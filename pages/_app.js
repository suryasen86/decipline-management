import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { wrapper, store } from "../store";
import { ToastContainer } from 'react-toastify';

import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer/>
      </Provider>
    </>
  );
}
export default MyApp
