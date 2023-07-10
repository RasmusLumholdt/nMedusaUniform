import { medusaClient } from "@lib/config"
import { Customer, GiftCard } from "@medusajs/medusa"

export const getCustomerGiftcards = async (customer: Omit<Customer, "password_hash">|undefined): Promise<GiftCard[]|null> => {
    if(!customer) return null;
    let userGiftCards:string[] = customer?.metadata?.giftcards as string[];
    if(!userGiftCards) return null;
    let giftCards = userGiftCards.map(async (giftCardId: string) => {
        let { gift_card } = await medusaClient.giftCards.retrieve(giftCardId);
        return gift_card;
    });

    let promises = Promise.all(giftCards).then((giftCards) => {
        return giftCards;
    })

    return promises;
  }