import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import FiltersBar from "../components/FiltersBar";
import SortBar from "../components/SortBar";
import { fetchProductsThunk } from "../app/productsThunks";

import { Grid, AutoSizer } from "react-virtualized";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { filteredList, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  const getColumnCount = (width) => {
    if (width < 640) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 4; // Desktop
  };

  const ROW_HEIGHT = 380;

  return (
    <div className="h-screen">
      <FiltersBar />
      <SortBar />

      <div style={{ height: "calc(100vh - 160px)" }}>
        <AutoSizer>
          {({ width, height }) => {
            const columnCount = getColumnCount(width);
            const columnWidth = width / columnCount;

            const rowCount = Math.ceil(filteredList.length / columnCount);

            return (
              <Grid
                cellRenderer={({ columnIndex, rowIndex, key, style }) => {
                  const index = rowIndex * columnCount + columnIndex;
                  const product = filteredList[index];
                  if (!product) return null; 

                  return (
                    <div key={key} style={{ ...style, padding: 10 }}>
                      <ProductCard product={product} />
                    </div>
                  );
                }}
                columnCount={columnCount}
                columnWidth={columnWidth}
                height={height}
                rowCount={rowCount}
                rowHeight={ROW_HEIGHT}
                width={width}
              />
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
}
