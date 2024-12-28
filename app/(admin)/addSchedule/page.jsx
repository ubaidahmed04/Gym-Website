"use client";

import React, { useRef, useState } from "react";
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

 function AddScheduleForm() {
  const initialValues = {
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters"),
    date: Yup.date().required("Date is required"),
    startTime: Yup.string().required("Start time is required"),
    endTime: Yup.string().required("End time is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    alert("Schedule added successfully!");
    resetForm();
  };

  return (
    <div>
      <Card shadow={false} className="md:px-24 md:py-8 my-4 border border-gray-300">
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            Add Schedule
          </Typography>
        </CardHeader>
        <CardBody>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-4">
              <Field name="title">
                {({ field }) => (
                  <div>
                    <Input
                      {...field}
                      type="text"
                      label="Title"
                      placeholder="Enter schedule title"
                    />
                    <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                )}
              </Field>

              <Field name="description">
                {({ field }) => (
                  <div>
                    <Input
                      {...field}
                      type="text"
                      label="Description"
                      placeholder="Enter schedule description"
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                )}
              </Field>

              <Field name="date">
                {({ field }) => (
                  <div>
                    <Input
                      {...field}
                      type="date"
                      label="Date"
                      placeholder="Select date"
                    />
                    <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                )}
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field name="startTime">
                  {({ field }) => (
                    <div>
                      <Input
                        {...field}
                        type="time"
                        label="Start Time"
                        placeholder="Select start time"
                      />
                      <ErrorMessage name="startTime" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  )}
                </Field>

                <Field name="endTime">
                  {({ field }) => (
                    <div>
                      <Input
                        {...field}
                        type="time"
                        label="End Time"
                        placeholder="Select end time"
                      />
                      <ErrorMessage name="endTime" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  )}
                </Field>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4">
                <Link href="/dashboard">
                  <Button variant="outlined" className="h-12 border-blue-gray-200">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" size="lg" color="gray">
                  Add Schedule
                </Button>
              </div>
            </Form>
          </Formik>
        </CardBody>
      </Card>
    </div>
  );
}
export default AddScheduleForm