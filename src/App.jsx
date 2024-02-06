import React, { Children, Component } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Anyworld from './components/Anyworld/Anyworld'
import About from './components/About/About'
import Protofilo from './components/Protofilo/Protofilo'
import Contact from './components/Contact/Contact'


const myRoute = createBrowserRouter([
  {path:"",element: <Layout/>, children:[
    {path:'',element:<Home/>},
    {path:'/home',element:<Home/>},
    {path:'*',element:<Anyworld/>},
    {path:'/about',element:<About/>},
    {path:'/Protofilo',element:<Protofilo/>},
    {path:'/contact',element:<Contact/>},
  ]



},
])


export default class App extends Component {
  render() {
    return <>
    <RouterProvider router={myRoute}/>
    
    
    </>
  }
}

