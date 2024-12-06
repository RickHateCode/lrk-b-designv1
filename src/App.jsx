import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation"
// import './App.css'

import AboutPage from "./pages/about"
import ServicePage from "./pages/service"
import HomePage from './pages/home'
import ContactPage from "./pages/contact"



 


function  App() {

  const navigation = [
    { name: 'Acceuil', href: '/',component: HomePage},
    { name: 'Nos services',href: '/service', component: ServicePage},
    { name: 'Qui somme-nous?', href: '/about', component: AboutPage },
    { name: 'Contact', href: '/contact', component: ContactPage},
  ]

  
  return (
    <BrowserRouter basename="/lrk-b-designv1">
      <div className="w-screen max-[550px]:w-full">
      <Navigation routes={navigation}/>
      <Routes>
          {navigation.map((route) => (
            <Route key={route.name} path={route.href} element={<route.component/>}/>
          ))}
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

