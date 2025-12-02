import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  filterByRating,
  applyFilters,
  clearFilters,
} from "../app/productsSlice";

export default function FiltersBar() {
  const dispatch = useDispatch();
  const { categories, categoryFilter, ratingFilter } = useSelector(
    (state) => state.products
  );

  return (
    <div
      className="
      sticky top-0 z-20 bg-white shadow 
      p-3 
      flex flex-col gap-3 
      md:flex-row md:items-center md:gap-4
    "
    >
      <div
        className="
          flex gap-3 flex-wrap   md:flex-nowrap
         
        "
      >
        <select
          value={categoryFilter}
          onChange={(e) => dispatch(filterByCategory(e.target.value))}
          className="
            border px-3 py-2 rounded w-full sm:w-auto
          "
        >
          {categories?.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>

        <select
          value={ratingFilter}
          onChange={(e) => dispatch(filterByRating(Number(e.target.value)))}
          className="
            border px-3 py-2 rounded w-full sm:w-auto
          "
        >
          <option value="0">All Ratings</option>
          <option value="3">3★ & Up</option>
          <option value="4">4★ & Up</option>
        </select>

        <button
          onClick={() => dispatch(applyFilters())}
          className="
            bg-blue-600 text-white px-4 py-2 rounded 
            w-full sm:w-auto
          "
        >
          Apply
        </button>

        <button
          onClick={() => dispatch(clearFilters())}
          className="
            bg-gray-300 text-black px-4 py-2 rounded
            w-full sm:w-auto
          "
        >
          Clear
        </button>
      </div>
    </div>
  );
}
