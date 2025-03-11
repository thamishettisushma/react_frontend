import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Toaster } from './components/ui/sonner.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

//toggle button if we remove remove context and themeproider jsx and change in nav bar also remove sun moon and button
import { ThemeProvider } from './components/context/ThemeProvider.jsx'

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      
<ThemeProvider >

        <App />     
</ThemeProvider>
       
        {/* <Toaster /> */}
      </PersistGate>
    </Provider>
 
  </React.StrictMode>,
)
