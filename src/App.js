import './App.css';
import Head from './components/Head.js';
import Body from './components/Body.js';
import { Provider } from 'react-redux';
import store from './utils/store.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer.js';
import WatchPage from './components/WatchPage.js';
import Demo from './components/Demo.js';


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />
      },
      {
        path: "demo",
        element: <Demo />
      }
    ]
  },
])
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
