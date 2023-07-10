import { Cart } from "@medusajs/medusa"
import { useCheckout } from "@lib/context/checkout-context"
import { formatAmount } from "medusa-react"
import React from "react"

type CartTotalsProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const CartTotals: React.FC<CartTotalsProps> = ({ cart }) => {
  const {
    subtotal,
    discount_total,
    gift_card_total,
    tax_total,
    shipping_total,
    total,
  } = cart
  // const { disableCheckout } = useCheckout();
  const getAmount = (amount: number | null | undefined) => {
    return formatAmount({
      amount: amount || 0,
      region: cart.region,
      includeTaxes: false,
    })
  }

  const calculateGiftBalance = () => {
    if (!cart.gift_cards?.length) {
      return 0
    }
    let giftcards = cart.gift_cards;
    let total = giftcards.reduce((acc, curr) => {
      return acc + curr.balance;
    }, 0);
    return total;
  }

  return (
    <div>
      <div className="text-small-regular text-gray-700">
        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Total</span>
          <span>{getAmount(subtotal)}</span>
        </div>
        <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Total points available</span>
          <span>{getAmount(calculateGiftBalance())}</span>
        </div>
        <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
        <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
          <span>Points available after checkout</span>
          {subtotal != undefined &&
            <span>{getAmount(calculateGiftBalance() - subtotal)}</span>
          }
        </div>

        {/* {disableCheckout && 
          <div className="text-sm text-red-600">
            <span>Not enough points to checkout</span>
            </div>} */}
      
      </div>
    </div>
  )
}

export default CartTotals
