"use client";

import React, { useState, Suspense } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const DeleteTrainerModal = ({ open, onConfirm, onCancel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <Typography variant="h6" className="mb-4">
          Confirm Deletion
        </Typography>
        <Typography className="mb-4">
          Are you sure you want to delete this trainer?
        </Typography>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const TrainerListPage = () => {
  const TABLE_HEAD = ["Name", "Expertise", "Contact", ];

  // Dummy Trainer Data
  const [trainers, setTrainers] = useState([
    { _id: "1", name: "John Doe", expertise: "Fitness Trainer", contact: "+123456789" },
    { _id: "2", name: "Jane Smith", expertise: "Yoga Instructor", contact: "+987654321" },
    { _id: "3", name: "Sam Wilson", expertise: "Nutrition Specialist", contact: "+567890123" },
  ]);

  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedTrainerId, setSelectedTrainerId] = useState(null);

  // Handle Delete Modal
  const handleOpenDeleteModal = (id) => {
    setSelectedTrainerId(id);
    setDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal(false);
    setSelectedTrainerId(null);
  };

  const handleDeleteTrainer = () => {
    setTrainers((prev) => prev.filter((trainer) => trainer._id !== selectedTrainerId));
    setDeleteModal(false);
    setSelectedTrainerId(null);
    // Optionally, show a success toast
    // successNotify("Trainer deleted successfully!");
  };

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Card className="h-full w-full bg-darkBlue text-white py-4 my-4">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className=" flex flex-col justify-between bg-darkBlue gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="white">
                Trainer List
              </Typography>
              <Typography color="light-blue" className="mt-1 font-normal">
                View and manage the trainers in your program.
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<HiMagnifyingGlass className="h-5 w-5" />}
                  // Add search functionality as needed
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
              {trainers.length < 1 ? (
                <tr>
                  <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                    <Typography className="text-gray-500">
                      No trainers available. Add trainers to your program.
                    </Typography>
                  </td>
                </tr>
              ) : (
                trainers.map((trainer, index) => {
                  const isLast = index === trainers.length - 1;
                  const classes = isLast
                    ? "p-2"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={trainer._id}>
                      <td className={classes}>{trainer.name}</td>
                      <td className={classes}>{trainer.expertise}</td>
                      <td className={classes}>{trainer.contact}</td>
                      
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray">
            End of Trainer List
          </Typography>
        </CardFooter>
        <DeleteTrainerModal
          open={deleteModal}
          onConfirm={handleDeleteTrainer}
          onCancel={handleCloseDeleteModal}
        />
        <ToastContainer />
      </Card>
    </Suspense>
  );
};

export default TrainerListPage;
