import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image"
import { useState } from "react";
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice"

const MAX_RATING = 5;
const MIN_RATING = 1

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] =useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
      hasPrime,
    }
    // Sending the product as an action to the Redux store  the basket slice
    dispatch(addToBasket(product));

  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{ category }</p>

        <Image src={image} height={200} width={200} objectFit="contain" alt="/images/client1.jpg" />
        
        <h4>{title}</h4>
        <div className="flex">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <StarIcon  key={i} className="h-5 text-yellow-500" />
            ))}
            
        </div>

        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div className="mb-5">
            <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'KES '} decimalScale={2} />
        </div>
        
        {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
                <Image width={200} height={200} className="w-12" src="https://links.papareact.com/f90" alt="/images/client1.jpg" />
                <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
            </div>
        )}
        <button onClick={addItemToBasket} className="mt-auto button" >Add to Basket</button>
    </div>
  )
}
export default Product