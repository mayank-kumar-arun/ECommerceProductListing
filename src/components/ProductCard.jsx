import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../app/favouritesSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const isFav = favorites.includes(product.id);

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col relative">
      {/* Favorite Button */}
      <button
        onClick={() => dispatch(toggleFavorite(product.id))}
        className={`absolute right-3 top-3 text-xl ${
          isFav ? "text-red-500" : "text-gray-400"
        }`}
      >
        ♥
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />

      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-yellow-500">{product.rating} ★</p>
    </div>
  );
}
