"use client"
import React, { Suspense, useState } from "react";
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
import { ToastContainer } from "react-toastify";

// const ProductSkeleton = () => (
//   <div className="flex flex-col items-center justify-center p-4">Loading...</div>
// );

const DeleteModal = ({ openModal, onSubmit, onClose }) =>
  openModal ? (
    <div>
      <p>Are you sure you want to delete this product?</p>
      <button onClick={onSubmit}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  ) : null;

const EditProductModal = ({ openModal, data, submitHua, onClose }) =>
  openModal ? (
    <div>
      <p>Edit Product</p>
      <button onClick={submitHua}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  ) : null;

const AllProductsPage = () => {
  const TABLE_HEAD = ["Image", "Price", "Compare Price", "Category", "Action"];
  const [allProducts, setAllProducts] = useState([
    {
      _id: "1",
      images: ["https://via.placeholder.com/50"],
      name: "Product 1",
      price: "$20",
      comparePrice: "$30",
      category: "Category A",
    },
    {
      _id: "2",
      images: ["https://via.placeholder.com/50"],
      name: "Product 2",
      price: "$25",
      comparePrice: "$35",
      category: "Category B",
    },
    {
      _id: "3",
      images: ["https://via.placeholder.com/50"],
      name: "Product 3",
      price: "$15",
      comparePrice: "$20",
      category: "Category C",
    },
    {
      _id: "4",
      images: ["https://via.placeholder.com/50"],
      name: "Product 4",
      price: "$15",
      comparePrice: "$20",
      category: "Category D",
    },
    {
      _id: "5",
      images: ["https://via.placeholder.com/50"],
      name: "Product 5",
      price: "$15",
      comparePrice: "$20",
      category: "Category CE",
    },
  ]);
  const [isLoader, setIsLoader] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // const handleOpenModal = (id) => {
  //   setEditModal(true);
  //   setSelectedProductId(id);
  // };

  // const handleOpenDelModal = (id) => {
  //   setDeleteModal(true);
  //   setSelectedProductId(id);
  // };

  // const closeDelModal = () => setDeleteModal(false);
  // const handleCloseModal = () => setEditModal(false);

  // const deleteProductFunc = (id) => {
  //   setAllProducts((prev) => prev.filter((product) => product._id !== id));
  //   setDeleteModal(false);
  // };

  // const handleUpdateProduct = () => {
  //   // Dummy update functionality
  //   setEditModal(false);
  // };

  return (
    // <div>heloo </div>
    <Suspense fallback={"<ProductSkeleton />"}>
      <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              All Product List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Product list with dummy data
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
                            <Avatar
                              src={item.images[0]}
                              alt={item.name}
                              size="md"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-fit p-1"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {item.name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>{item.price}</td>
                        <td className={classes}>{item.comparePrice}</td>
                        <td className={classes}>
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={item.category}
                            color="amber"
                            className="w-fit"
                          />
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edit Product">
                            <IconButton
                              variant="text"
                              onClick={() => handleOpenModal(item._id)}
                            >
                              <HiOutlinePencilAlt className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="Delete Product">
                            <IconButton
                              variant="text"
                              onClick={() => handleOpenDelModal(item._id)}
                            >
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
        {/* <DeleteModal
          openModal={deleteModal}
          onSubmit={() => deleteProductFunc(selectedProductId)}
          onClose={closeDelModal}
        />
        <EditProductModal
          openModal={editModal}
          data={{}}
          submitHua={handleUpdateProduct}
          onClose={handleCloseModal}
        /> */}
        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4"></CardFooter>
        <ToastContainer />
      </Card>
    </Suspense>
  );
};

export default AllProductsPage;
// const AllProductsPage = () => (

// )
// export default AllProductsPage;