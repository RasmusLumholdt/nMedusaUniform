import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import { LoginTemplateProps } from "@modules/account/templates/login-template"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"


interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = (props: LoginTemplateProps) => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError("Invalid email or password")
  }

  const {
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()


  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">{props.title}</h1>

      <a type="button" href="http://localhost:9000/store/auth/azure" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="azure" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 -28.5 256 256"><path d="M118.431947,187.698037 C151.322003,181.887937 178.48731,177.08008 178.799309,177.013916 L179.366585,176.893612 L148.31513,139.958881 C131.236843,119.644776 117.26369,102.945381 117.26369,102.849118 C117.26369,102.666861 149.32694,14.3716012 149.507189,14.057257 C149.567455,13.952452 171.38747,51.62411 202.400338,105.376064 C231.435152,155.699606 255.372949,197.191547 255.595444,197.580359 L255.999996,198.287301 L157.315912,198.274572 L58.6318456,198.261895 L118.431947,187.698073 L118.431947,187.698037 Z M-4.03864498e-06,176.434723 C-4.03864498e-06,176.382721 14.631291,150.983941 32.5139844,119.992969 L65.0279676,63.6457518 L102.919257,31.8473052 C123.759465,14.3581634 140.866667,0.0274832751 140.935253,0.00062917799 C141.003839,-0.0247829554 140.729691,0.665213042 140.326034,1.53468179 C139.922377,2.40415053 121.407304,42.1170321 99.1814268,89.7855264 L58.7707514,176.455514 L29.3853737,176.492355 C13.2234196,176.512639 -4.03864498e-06,176.486664 -4.03864498e-06,176.434703 L-4.03864498e-06,176.434723 Z" fill="#FFFFFF" fillRule="nonzero"> </path></svg>
        Sign in with Azure
      </a>
      {authError && <p className="text-center text-base-regular text-red-500 mb-8">{authError}</p>}
    </div>
  )
}

export default Login
