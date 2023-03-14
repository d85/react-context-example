import create from 'zustand'

const useStore = create(set => ({
  user: '',
  cartCount: 0,
  login: () => set(() => ({ user: 'Jack' })),
  logout: () => set(() => ({ user: '' })),
  addToCart: () => set(state => ({ cartCount: state.cartCount + 1 })),
}))

export default useStore