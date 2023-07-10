import Overview from "@modules/account/components/overview"
import { registerUniformComponent } from "@uniformdev/canvas-react"
import { useCustomerOrders, useMeCustomer } from "medusa-react"

const OverviewRoot = () => {
  const { orders } = useCustomerOrders()
  const { customer } = useMeCustomer()

  return <Overview orders={orders} customer={customer} />
}

export default OverviewRoot

registerUniformComponent({ type: "ProfileOverviewRoot", component: OverviewRoot });