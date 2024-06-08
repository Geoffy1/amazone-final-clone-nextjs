import Image from "next/image"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "@/slices/basketSlice"
import CheckoutProduct from "@/components/CheckoutProduct"
import CurrencyFormat from "react-currency-format"
import { useSession } from "next-auth/react"
import { loadStripe } from "@stripe/stripe-js"
import Currency from "react-currency-formatter"

const stripePromise = loadStripe(process.env.stripe_public_key)


const Checkout = () => {
  const items = useSelector(selectItems)
  const total =useSelector(selectTotal)
  const {session} = useSession();
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend to create a checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session',{
      items : items,
      email: session.user.email,
    });

    //Redirect user tostripe checkpout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) alert(result.error.message);
  };  

  return (
    <div className="bg-gray-100">
        
        <Header />
        <main className="lg:flex max-w-screen-2xl mx-auto">
          <div className="flex-grow m-5 shadow-sm">
            <Image
              src="https://links.papareact.com/ikj"
               width={200}
              height={150}
              objectFit="contain"
              alt="/images/client1.jpg"
            />

            <div className="flex flex-col bg-white p-5 space-y-10">
              <h1 className="text-3xl border-b pb-4" >
                {items.length === 0
                  ? "your Amazon Basket is Empty."
                  : "Shopping Basket"}
              </h1>
              {items.map((item, i) => (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}

                />
              ))}
            </div>
          </div>

          {/*righthand side*/}
          <div className="flex flex-col p-10 bg-white shadow-md">
            {items.length > 0 && (
              <>
                <h2 className="whitespace-nowrap">Subtotal ({items.length} items):{" "}
                  <span className="font-bold ">
                    {/* <Currency quantity={total} currency="GBP" /> */}
                    <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'KES '} decimalScale={2} />
                  </span>
                  <button onClick={createCheckoutSession} role="link" disabled={!session} className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed" }`}>
                    {!session ? "Sign in to checkout" : "Proceed to checkout"}
                  </button>
                </h2>
              </> 
            )}
          </div>
        </main>
    </div>
    
  )
}
export default Checkout