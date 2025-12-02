import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import FiltersBar from "../components/FiltersBar";
import SortBar from "../components/SortBar";
import { fetchProductsThunk } from "../app/productsThunks";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { filteredList, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div>
      <FiltersBar />
      <SortBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {filteredList.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
