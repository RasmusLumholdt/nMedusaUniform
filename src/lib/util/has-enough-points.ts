import { Cart } from "@medusajs/medusa"

export const hasEnoughPoints = (cart: Omit<Cart, "refundable_amount" | "refunded_total"> | undefined): boolean => {
    if(!cart || !cart.gift_card_total || !cart.subtotal) return false;
    return cart.gift_card_total >= cart.subtotal;
}