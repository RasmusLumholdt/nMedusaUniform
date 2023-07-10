import { useAccount } from "@lib/context/account-context"
import Register from "@modules/account/components/register"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Login from "./index"
import { registerUniformComponent } from "@uniformdev/canvas-react"

export interface LoginTemplateProps {
  title: string
}

const LoginRoot = (props :LoginTemplateProps) => {
  const { loginView, customer, retrievingCustomer } = useAccount()
  const [currentView, _] = loginView

  const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push("/account")
    }
  }, [customer, retrievingCustomer, router])

  return (
    <div className="w-full flex justify-center py-24">
      {currentView === "sign-in" ? <Login {...props} /> : <Register />}
    </div>
  )
}
export default LoginRoot

registerUniformComponent({ type: "LoginRoot", component: LoginRoot });