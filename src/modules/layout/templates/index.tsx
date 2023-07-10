import RouteGuard from "@modules/authentication/RouteGuard"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    // <RouteGuard>
      <div>
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </div>
    //  </RouteGuard>
  )
}

export default Layout
