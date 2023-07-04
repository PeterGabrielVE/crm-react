import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
       <div className='md:w-1/4 bg-blue-600 px-5 py-10'></div>
       <div className="md:w-3/4 p-10 md:h-screen
       
       
       "></div>
        <h1 className="text-6xl font-bold">CRM - React</h1>
        <Outlet />
    </div>
  )
}

export default Layout
