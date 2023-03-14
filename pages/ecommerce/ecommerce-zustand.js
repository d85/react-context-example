import useStore from './store-zustand'

const LoginSection = () => {
  const login = useStore((state) => state.login)
  const logout = useStore((state) => state.logout)

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

const UserSection = () =>  {
  const user = useStore((state) => state.user)
  return (<div>User: {user}</div>)
}

const AddToCartSection = () => {
  const addToCart = useStore((state) => state.addToCart)
  return (
    <div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

const CartCountSection = () =>  {
  const cartCount = useStore((state) => state.cartCount)
  return <div>Cart count: {cartCount}</div>
}

export default function ZustandPage() {
  return <div>
    <LoginSection />
    <UserSection />
    <AddToCartSection />
    <CartCountSection />
  </div>
}