import React, {useEffect, useState} from 'react'
import Navbar, { NavLink } from '../components/Navbar'

const Home:React.FunctionComponent = () => {
  const [links, setLinks] = useState<NavLink[]>()

  const fetchProduct = async() => {
    await fetch('http://localhost:8080/nav-example.json')
    .then((response:any) => {
        return response.json()
    })
    .then(data => setLinks(data))
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
      <Navbar links={links}/>
  )
}

export default Home