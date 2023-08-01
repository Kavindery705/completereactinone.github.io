import React from 'react'
import { Link,  Outlet } from 'react-router-dom'

const ChildRoutes = () => {
  return (
    <div>ChildRoutes
        
        <li>
            <Link to='/childroute/html1'>html</Link>
        </li>
        <li>
            <Link to='/childroute/css1'>css</Link>
        </li>
        <Outlet/>
    </div>
  )
}

export default ChildRoutes