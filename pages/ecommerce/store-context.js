import { useState, createContext, useContext } from 'react'

// import create from 'zustand'

// const useStore = create(set => ({
//   user: '',
//   cartCount: 0,
//   login: () => set(() => ({ user: 'Jack' })),
//   logout: () => set(() => ({ user: '' })),
//   addToCart: () => set(state => ({ cartCount: state.cartCount + 1 })),
// }))

const useStore = () => {
  const [user, setUser] = useState('')
  const [cartCount, setCartCount] = useState(0)

  return {
    user,
    cartCount,
    login: () => setUser('Jack'),
    logout: () => setUser(''),
    addToCart: () => setCartCount(cartCount + 1)
  }
}

const StoreContext = createContext(null)
export const StoreContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>
    { children }
  </StoreContext.Provider>
)

export const useLogin = () => useContext(StoreContext).login
export const useLogout = () => useContext(StoreContext).logout
export const useAddToCart = () => useContext(StoreContext).addToCart
export const useUser = () => useContext(StoreContext).user
export const useCartCount = () => useContext(StoreContext).cartCount

export default useStore