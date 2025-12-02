import { useDispatch, useSelector } from "react-redux";
import { applyFilters, sortByPrice } from "../app/productsSlice";

export default function SortBar() {
  const { sortOrder } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleSort = (value) => {
    dispatch(sortByPrice(value));
    dispatch(applyFilters());
  };

  return (
    <div className="p-3 flex justify-end">
      <select
        value={sortOrder}
        onChange={(e) => handleSort(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="none">Sort By Price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>
    </div>
  );
}
