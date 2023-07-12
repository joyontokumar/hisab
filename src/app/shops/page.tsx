"use client";
import Loader from "@/components/loader";
import Link from "next/link";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Add from "../../components/products/add/index";
import ProductDTO from "../../dtos/product";
const Shops = () => {
  const [getSort, setSort] = useState<string>("asc");
  const [categorySlug, setCategorySlug] = useState<string>("");
  const [getCategories, setCategories] = useState<any>({
    loading: false,
    data: null,
  });
  const fetchCategories = useCallback(async () => {
    setCategories({ loading: true, data: [] });
    await fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res?.json())
      .then((res) => {
        if (res) {
          setCategorySlug(res?.[0]);
          setCategories({ loading: false, data: res });
        } else if (res?.status === "Unauthorized") {
          setCategories({ loading: false, data: null });
        } else {
          setCategories({ loading: false, data: null });
        }
      });
  }, []);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // fetch category products
  const [getProducts, setProducts] = useState<any>({
    loading: false,
    data: [],
  });
  /*======================================
 fetch categories products api call
  =======================================*/
  const fetchProducts = useCallback(async () => {
    try {
      if (categorySlug !== "") {
        setProducts({ loading: true, data: [] });
        await fetch(
          `https://fakestoreapi.com/products/category/${categorySlug}?` +
            (getSort ? `sort=${getSort}` : ``)
        )
          .then((res) => res?.json())
          .then((res) => {
            if (res) {
              setProducts({ loading: false, data: res });
            } else {
              setProducts({ loading: false, data: [] });
            }
          });
      }
    } catch {
      console.error("get error");
    }
  }, [categorySlug, getSort]);
  useEffect(() => {
    if (categorySlug !== "") {
      fetchProducts();
    }
  }, [categorySlug, fetchProducts]);

  const selectSortValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e?.target?.value);
  };
  return (
    <div className="shop-page section-padding min-h-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-4  xll:grid-cols-6 md:grid-cols-6 grid-cols-1">
          <div className="category-sidebar col-span-1">
            <h3>Categories:</h3>
            <div className="sidebar-inner">
              <ul>
                {getCategories?.loading ? (
                  <p>loading...</p>
                ) : getCategories?.data?.length > 0 ? (
                  getCategories?.data?.map((category: any, index: any) => (
                    <li
                      className={categorySlug === category ? "active" : ""}
                      key={index}
                      onClick={() => setCategorySlug(category)}
                    >
                      <Link href="#">
                        <span>{category}</span>{" "}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>Categories Not Found</li>
                )}
              </ul>
            </div>
          </div>
          <div className="product-view-content-wrapper col-span-5">
            <div className="grid grid-cols-1 gap-4">
              <div className="sorting-area  xll:flex md:flex  block">
                <div className="sort-content">
                  <h3>
                    {getProducts?.data?.length} items found in {categorySlug}
                  </h3>
                </div>
                <div className="sort">
                  <div className="text">
                    <span>Sort By:</span>
                  </div>
                  <div className="sort-select">
                    <select onChange={selectSortValue}>
                      <option value="asc">ASC</option>
                      <option value="desc">DESC</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 xll:grid-cols-4 sm:grid-cols-2 gap-4">
              {getProducts?.data?.length > 0 ? (
                getProducts?.data?.map((product: ProductDTO) => (
                  <Add product={product} key={product.id} />
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
