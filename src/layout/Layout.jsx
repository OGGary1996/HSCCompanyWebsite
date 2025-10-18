import Header from '../components/Header'
import Footer from '../components/Footer'
import {Outlet} from "react-router-dom";


function Layout(){
  return (
    <>
      <Header />

      <main>
          <Outlet /> {/* All pages */}
      </main>

      <Footer />
    </>
  )
}

export default Layout;