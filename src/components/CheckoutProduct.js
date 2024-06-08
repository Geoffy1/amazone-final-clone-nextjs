import { StarIcon } from "@heroicons/react/outline"
import Image from "next/image"
import CurrencyFormat from "react-currency-format"
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/slices/basketSlice";

const CheckoutProduct = ({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,

}) => {
    const  dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };

        //pushes item to redux
        dispatch(addToBasket(product));

    }
    const removeItemFromBasket = () => {

        //Remove item from redux
        dispatch(removeFromBasket({ id }))
    }
  return (
    <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain" alt="/images/client1.jpg" />
        {/* middle of div */}
        <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'KES '} decimalScale={2} />

            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <img
                        loading="lazy"
                        className="w-12"
                        src="https://links.papareact.com/fdw"
                        alt=""
                    />
                    <p className="text-xs text-gray-500">FREE next day delivery</p>
                    </div>
            )}
        </div>

        <div className="flex flex-col my-auto sace-y-2 hustify-sel-end">
            <button className="button" onClick={addItemToBasket}>Add to Basket</button>
            <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
        </div>

        
    </div>
  )
}
export default CheckoutProduct