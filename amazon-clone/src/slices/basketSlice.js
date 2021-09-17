import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    setAlert: (state, action) => {
      state.msg = [action.payload]
    },
    removeAlert: (state, action) => {
      return state.filter((alert) => alert.id !== action.payload.id)
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      )
      let newBasket = [...state.items]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Can't remove product with id: ${action.payload.id}`)
      }

      state.items = newBasket
    },
  },
})

export const { addToBasket, removeFromBasket, setAlert, removeAlert } =
  basketSlice.actions

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0)
export const setAlertInUI = (state) => state.basket.msg

export default basketSlice.reducer
