import moment from "moment"
import Currency from "react-currency-formatter"

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className='relative border rounded-md'>
      <div className='flex item-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
        <div className='flex flex-col'>
          <p className='font-bold text-xs'>Order Placed</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
        </div>
        <div>
          <p className='font-bold text-xs'>TOTAL</p>
          <p>
            <Currency quantity={amount} currency='INR' />
          </p>
        </div>
        <p className='text-sm self-end whitespace-nowrap sm:text-xl flex-1 text-right'>
          {items.length} items
        </p>
        <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
          ORDER #{id}
        </p>
      </div>
      <div className='p-5 sm:p-10 flex space-x-6 overflow-x-auto'>
        {images.map((image) => (
          <img className=' h-20 object-contain sm:h-32' src={image} />
        ))}
      </div>
    </div>
  )
}

export default Order
