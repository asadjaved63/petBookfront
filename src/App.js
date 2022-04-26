import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes,Navigate,useLocation   } from 'react-router-dom'
import './scss/style.scss'
import './assets/css/theme.css'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./adminPanel/layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./frontend/login/Login'))
const Home = React.lazy(() => import('./frontend/home/index'))
const Register = React.lazy(() => import('./frontend/register/Register'))
const Page404 = React.lazy(() => import('./frontend/page404/Page404'))


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(props) {
    
    

  }

  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
        <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="*" name="Page 404" element={<Page404 />} />
            <Route path="/panel/*" name="dashbord" element={<DefaultLayout />} />
            <Route path="/" name="Home" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
