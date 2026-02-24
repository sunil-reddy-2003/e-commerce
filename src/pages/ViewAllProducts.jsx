import axios from "axios";
import { size } from "lodash";
import { useState,useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import CategoryBar from "../components/CategoryBar";
import { useOutletContext } from "react-router-dom";
import qs from "qs";
import AdminProductCard from "../components/AdminProductCard";




const ViewAllProducts = () => {

    const { searchText } = useOutletContext();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(16);
    const [totalPages, setTotalPages] = useState();
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);
    



    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const response = await axios({
                    method: "get",
                    url: "http://localhost:9090/api/admin/viewallproducts",
                    params: {
                        page: currentPage,
                        size: pageSize,
                        search: searchText.trim() || undefined,
                        category: category.length ? category : undefined,
                    },
                    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                    }
                });

                setProducts(response.data.content);
                setTotalPages(response.data.totalPages);

                console.log("inside getData: ", response.data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };
        getAllProducts();
    }, [currentPage, pageSize, category, searchText]);

    useEffect(() => {
        setCurrentPage(0);
    }, [category]);

    return (

        <div className="relative min-h-screen bg-linear-to-r from-gray-800  to-gray-400">
            <CategoryBar category={category} setCategory={setCategory} />

            <div
                className={
                    loading
                        ? "flex items-center justify-center h-90  "
                        : `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-8 py-4`
                }
            >
                {loading ? (
                    <div className="text-5xl font-bold text-white">
                        Loading products...
                    </div>
                ) : products.length ? (
                    products.map((product) => (
                        <AdminProductCard product={product} key={product.id}/>
                    ))
                ) : (
                    <div className="col-span-full flex items-center justify-center min-h-screen text-gray-300 text-3xl">
                        {`No products found for ${searchText}`}
                    </div>
                )}
            </div>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
            />
        </div>
    )
}

export default ViewAllProducts;