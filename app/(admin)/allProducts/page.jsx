"use client";
import React, { useState, useEffect, Suspense } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Avatar,
  Chip,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllProducts } from "@/app/API/response";

const AllProductsPage = () => {
  const TABLE_HEAD = ["Product Name", "Price", "description", "quantity", "Action"];
  const [allProducts, setAllProducts] = useState([]);
  const [isLoader, setIsLoader] = useState(true);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts("/newProduct");
        console.log("response",response)
        // if (!response.ok) {
        //   throw new Error("Failed to fetch products");
        // }
        // const data = await response.json();
        setAllProducts(response || []); // Assuming the response has a `products` field
      } catch (error) {
        toast.error("Error fetching products: " + error.message);
      } finally {
        setIsLoader(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Suspense fallback={"Loading..."}>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                All Product List
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Product list fetched from the API
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<HiMagnifyingGlass className="h-5 w-5" />}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoader
                ? Array(10)
                    .fill(0)
                    .map((_, index) => (
                      <tr key={index}>
                        {TABLE_HEAD.map((_, colIndex) => (
                          <td
                            key={colIndex}
                            className="p-4 border-b border-blue-gray-50 animate-pulse"
                          >
                            <div className="h-4 bg-blue-gray-100 rounded w-full"></div>
                          </td>
                        ))}
                      </tr>
                    ))
                : allProducts.map((item, index) => {
                    const isLast = index === allProducts.length - 1;
                    const classes = isLast
                      ? "p-2"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={item._id}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            {/* <Avatar
                              src={item.images[0] || "https://via.placeholder.com/50"}
                              alt={item.name}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-fit p-1"
                            /> */}
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {item.productName}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>{item.price}</td>
                        <td className={classes}>{item.description.slice(0,20)}...</td>
                        <td className={classes}>
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={item.quantity}
                            color="amber"
                            className="w-fit"
                          />
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edit Product">
                            <IconButton variant="text">
                              <HiOutlinePencilAlt className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="Delete Product">
                            <IconButton variant="text">
                              <FaRegTrashAlt className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4"></CardFooter>
        <ToastContainer />
      </Card>
    </Suspense>
  );
};

export default AllProductsPage;
