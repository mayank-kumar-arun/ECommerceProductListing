import { useDispatch, useSelector } from "react-redux";
import {
  applyFilters,
  clearFilters,
  filterByCategory,
  filterByRating,
} from "../app/productsSlice";

export default function FiltersBar() {
  const { categories, categoryFilter, ratingFilter } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const apply = () => dispatch(applyFilters());
  const clear = () => dispatch(clearFilters());

  return (
    <div className="sticky top-0 z-10 bg-white p-4 shadow flex gap-4 overflow-x-auto">
      <select
        value={categoryFilter}
        onChange={(e) => dispatch(filterByCategory(e.target.value))}
        className="border px-3 py-2 rounded"
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
        className="border px-3 py-2 rounded"
      >
        <option value="0">All Ratings</option>
        <option value="3">3★ & Up</option>
        <option value="4">4★ & Up</option>
      </select>

      <button
        onClick={apply}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Apply
      </button>

      <button
        onClick={clear}
        className="bg-gray-300 text-black px-4 py-2 rounded"
      >
        Clear
      </button>
    </div>
  );
}
