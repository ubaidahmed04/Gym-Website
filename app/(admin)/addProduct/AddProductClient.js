"use client"
import React, { useEffect, useRef, useState } from "react";
// @components
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import FieldInput from "./Field";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { AddProduct, getAllProducts } from "@/app/API/response";
import { errorNotify, successNotify } from "@/components/toast";
import { ToastContainer } from "react-toastify";
import { motion } from 'framer-motion'
import { getCategorySuccess } from "@/app/Redux/Slices/category";


export function AddProductClient() {
  // const { isUser } = useSelector((state) => state.currUser)
  const router = useRouter()
  const refFile = useRef([])
  const [fileName, setFileNames] = useState([]);
  const dispatch = useDispatch()
  const initialValues = {
    name: "",
    description: "",
    brand: "",
    price: "",
    category: "",
    quantity: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Product name is required")
      .min(3, "Product name must be at least 3 characters"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number")
      .min(1, "Price must be at least 1"),
   
      quantity: Yup.number()
      .required("quantity is required")
      .positive("quantity must be a positive number")
      .min(1, "quantity must be at least 1"),
   
  });
  const handleSubmit = async (values, { resetForm }) => {
    const route = '/newProduct'
    const data = new FormData()
    data.append("productName", values.name)
    data.append("description", values.description)
    data.append("price", values.price)
    data.append("quantity",values.quantity);
   
    try {
      
      const response = await AddProduct(route, data)
      console.log("response--->>>>", response)
      // successNotify(Product Added)

      if(response){
        successNotify(response.message)
        // setFileNames([])
        resetForm()
      }else{
        // errorNotify(response.message)

      }
    } catch (error) {
      errorNotify(error ||response.message)
    }

  }
  const handleFileChange = (e) => {
    const maxFileSize = 5 * 1024 * 1024; // 5MB limit
    const selectedFiles = Array.from(e.target.files);
    
    const validFiles = selectedFiles.filter(file => file.size <= maxFileSize);
    const largeFiles = selectedFiles.filter(file => file.size > maxFileSize);
  
    if (largeFiles.length > 0) {
      alert(`File size must not exceed 5MB. These files are too large: ${largeFiles.map(file => file.name).join(", ")}`);
    }
    
    setFileNames(validFiles);
  };

 
  // get all  category 
  const GetCategory = async () => {
    const route = '/category'  
    try {
      const response = await getAllProducts(route)
      console.log("response--->>>>", response.data)
      dispatch(getCategorySuccess(response?.data))
    } catch (error) {
      console.log(error)
      // errorNotify(error ||response.message)
    }
  }

  // useEffect(()=>{
  //   GetCategory()
  // },[])
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0 }}
    >

    <Card
      shadow={false}
      className="md:px-24 md:py-8 py-4 border border-gray-300"
    >
      <CardHeader shadow={false} floated={false} className="text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:text-4xl"
        >
          Add Product
        </Typography>

      </CardHeader>
      <CardBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >

          <Form
            className="flex flex-col gap-4 "
          >
            {/* <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <div className="md:flex">
                <div className="w-full p-3">
                  <div
                    className="relative h-48 rounded-lg border-2 border-blue-gray-400 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  >
                    <div className="absolute flex flex-col items-center">
                      <Image
                        height={70}
                        width={70}
                        alt="File Icon"
                        className="mb-3"
                        src={"/Images/upload.png"}
                      />
                      {Array.isArray(fileName) && fileName.length === 0 ? (
                        <>
                          <span className="block text-gray-500 font-semibold">Drag & drop</span>
                          <span className="block text-gray-400 font-normal mt-1">or click to upload</span>
                        </>
                      ) : (
                        <ul className="text-gray-500 font-semibold">
                          {Array.isArray(fileName) &&
                            fileName.map((file, index) => <li key={index}>{file.name}</li>)}
                        </ul>
                      )}
                    </div>

                    <input
                      name="file"
                      ref={refFile}
                      accept="image/*"
                      multiple
                      className="h-full w-full opacity-0 cursor-pointer"
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <span>

              <FieldInput type="text" name='name' placeholder="Enter Your Product Name" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </span>

            <span>
              <FieldInput type="text" name='description' placeholder="Enter Description" label="Description" />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
            </span>

            <span className="grid grid-cols-1 md:grid-cols-2 gap-2">

              {/* <span>
                <FieldInput type="text" name='brand' placeholder="Enter Your Brand Name" label="Brand" />
                <ErrorMessage name="brand" component="div" className="text-red-500 text-sm mt-1" />
              </span> */}

              <span>
                <FieldInput type="number" name='price' placeholder="Enter Your Product Price" label="Price" />
                <ErrorMessage name="price" component="div" className="text-red-500 text-sm mt-1" />
              </span>

              {/* <span>
                <FieldInput type="select" name='category' placeholder="Category" label="Category" />
                <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
              </span> */}

              <span>
                <FieldInput type="number" name='quantity' placeholder="Product Quantity" label="Quantity" />
                <ErrorMessage name="quantity" component="div" className="text-red-500 text-sm mt-1" />
              </span>
            </span>

            <span className="grid grid-cols-2 gap-2 py-4 ">
              <Link href={'/'}>
                <Button variant="outlined" className="flex h-12 border-blue-gray-200 items-center justify-center gap-" >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                size="lg" color="gray"
              >
                Add
              </Button>
            </span>
          </Form>
        </Formik>

      </CardBody>
      <ToastContainer/>
    </Card>
    </motion.div>

  );
}
