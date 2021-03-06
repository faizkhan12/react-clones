import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { useSession } from "next-auth/client"
import React from "react"
import Currency from "react-currency-formatter"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketSlice"

const stripePromise = loadStripe(process.env.stripe_public_key)
const Checkout = () => {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const [session] = useSession()

  const createCheckoutSession = async () => {
    const stripe = await stripePromise
    // call the backend to create a  checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
      email: session.user.email,
    })
    // redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    })
    if (result.error) {
      alert(result.error.message)
    }
  }

  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left Section */}
        <div className='flex-grow m-5 shadow-sm'>
          <img
            src='https://links.papareact.com/ikj'
            width={1020}
            heigh={250}
            objectFit='contain'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {" "}
              {items.length === 0
                ? "Your Cart is Empty!!! Start Shopping to see your items :)"
                : "Shopping Basket"}
            </h1>
            {items.map(
              (
                {
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  rating,
                  hasPrime,
                },
                i
              ) => (
                <CheckoutProduct
                  key={i}
                  id={id}
                  title={title}
                  rating={rating}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  hasPrime={hasPrime}
                />
              )
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='font-bold whitespace-nowrap'>
                Subtotal ({items.length} items):
                <span className='font-bold'>
                  <Currency quantity={total} currency='INR' />
                </span>
              </h2>
              <button
                onClick={createCheckoutSession}
                role='link'
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed "
                }`}
              >
                {!session
                  ? "Please Sign In to checkout"
                  : "Procees to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Checkout
