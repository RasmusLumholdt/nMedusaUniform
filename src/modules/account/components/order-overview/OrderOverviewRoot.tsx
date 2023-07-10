import { registerUniformComponent } from "@uniformdev/canvas-react"
import OrderOverview from "./index"

const OrderOverviewRoot = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-xl-semi">Orders</h1>
        <p className="text-base-regular">
          View your previous orders and their status. You can also create
          returns or exchanges for your orders if needed.
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrderOverviewRoot

registerUniformComponent({ type: "OrderOverviewRoot", component: OrderOverviewRoot });