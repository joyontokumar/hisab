"use client";
import Loader from "@/components/loader";
import { fetchProducts } from "@/state-management/actions/products";
import { RootState } from "@/state-management/reducers/root-reducers";
import { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../components/products/card/index";
import ProductDTO from "../dtos/product";
interface HomeProps {
  products: any;
  fetchProducts: () => void;
}
const Home = ({ products, fetchProducts }: HomeProps) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="top-selection-new-arrivals section-padding min-h-100">
      <div className="container px-4 mx-auto">
        {products?.products?.length > 0 ? (
          <div className="grid sm:grid-cols-2 xll:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
            {products?.products?.map((product: ProductDTO, index: any) => (
              <Card product={product} key={index} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    products: state?.products,
  };
};
const mapDispatchToProps = {
  fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
