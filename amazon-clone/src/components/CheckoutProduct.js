import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import React, { useState } from "react"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) => {
  const MAX_RATING = 5
  const MIN_RATING = 1

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )
  const dispatch = useDispatch()

  const addMoreItem = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    }
    dispatch(addToBasket(product))
  }

  const removeItem = () => {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <div className='grid grid-cols-5'>
      <Image src={image} width={200} height={200} objectFit='contain' />
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-6 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={price} currency='INR' />
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              loading='lazy'
              className='w-12'
              src='https://links.papareact.com/fdw'
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button onClick={addMoreItem} className='button'>
          Add more item
        </button>
        <button onClick={removeItem} className='button'>
          Remove from Cart
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
