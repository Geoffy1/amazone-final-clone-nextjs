import Header from "@/components/Header"
import { getSession, useSession } from "next-auth/react"
import moment from "moment";
import db from "../../firebase"
import Order from "@/components/Order";

const Orders = ({ orders }) => {
    const { data: session } = useSession();
    
    console.log(orders)
    return (
        <div>
            <Header />
            <main className="max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
                    Your orders
                </h1>

                {session ? (
                    <h2>x orders</h2>
                ) : (
                    <h2>Please sign in to see your orders</h2>
                )}

                <div className="mt-5 space-y-4">
                    {orders?.map(({ id, amount, amountShipping, items, timestamp, images }) => (
                        <Order
                            key={id}
                            id={id}
                            amount={amount}
                            amountShipping={amountShipping}
                            items={items}
                            timestamp={timestamp}
                            images={images}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}
export default Orders;

export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // get users logged in credentials..
    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }

    // firebase db
    const stripeOrders = await db.collection('users').doc(session.user.email)
        .collection('orders').orderBy("timestamp", "desc")
        .get();

    // stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
        },
    }
}
