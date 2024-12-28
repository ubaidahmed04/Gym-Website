"use client";

import React, { Suspense, useState } from "react";
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

import {  HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

// Modal Components (Simple Implementation)
const DeleteScheduleModal = ({ open, onConfirm, onCancel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50">
      <div className="bg-darkBlue  p-6 rounded shadow-lg">
        <Typography variant="h6" className="mb-4">
          Confirm Deletion
        </Typography>
        <Typography className="mb-4">
          Are you sure you want to delete this schedule?
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

const AllSchedulesPage = () => {
  const TABLE_HEAD = ["Title", "Description", "Date", "Start Time", "End Time",];
  
  // Dummy Schedule Data
  const [schedules, setSchedules] = useState([
    {
      _id: "1",
      title: "Morning Yoga",
      description: "Start your day with a refreshing yoga session.",
      date: "2024-01-10",
      startTime: "06:00",
      endTime: "07:00",
    },
    {
      _id: "2",
      title: "Evening Cardio",
      description: "High-intensity cardio workout to burn calories.",
      date: "2024-01-11",
      startTime: "18:00",
      endTime: "19:00",
    },
    {
      _id: "3",
      title: "Strength Training",
      description: "Build muscle strength with weight training.",
      date: "2024-01-12",
      startTime: "17:00",
      endTime: "18:30",
    },
    {
      _id: "4",
      title: "Strength Training",
      description: "Build muscle strength with weight training.",
      date: "2024-01-12",
      startTime: "17:00",
      endTime: "18:30",
    },
    {
      _id: "5",
      title: "Strength Training",
      description: "Build muscle strength with weight training.",
      date: "2024-01-12",
      startTime: "17:00",
      endTime: "18:30",
    },
  ]);

  const [isLoader, setIsLoader] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedScheduleId, setSelectedScheduleId] = useState(null);

  // Handle Delete Modal
  const handleOpenDeleteModal = (id) => {
    setSelectedScheduleId(id);
    setDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal(false);
    setSelectedScheduleId(null);
  };

  const handleDeleteSchedule = () => {
    setSchedules((prev) => prev.filter((schedule) => schedule._id !== selectedScheduleId));
    setDeleteModal(false);
    setSelectedScheduleId(null);
    // Optionally, show a success toast
    // successNotify("Schedule deleted successfully!");
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="h-full py-6 my-4  w-full bg-darkBlue text-white">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className=" flex flex-col bg-darkgray text-white justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="white">
                All Schedules
              </Typography>
              <Typography color="light-blue" className="mt-1 font-normal">
                View and manage your schedules
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
              {isLoader
                ? Array(5)
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
                : schedules.length < 1 ? (
                  <tr>
                    <td colSpan={TABLE_HEAD.length} className="p-4 text-center">
                      <Typography className="text-gray-500">
                        No schedules available. Stay tuned for new schedules!
                      </Typography>
                    </td>
                  </tr>
                ) : (
                  schedules.map((schedule, index) => {
                    const isLast = index === schedules.length - 1;
                    const classes = isLast
                      ? "p-2"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={schedule._id}>
                        <td className={classes}>{schedule.title}</td>
                        <td className={classes}>{schedule.description}</td>
                        <td className={classes}>{schedule.date}</td>
                        <td className={classes}>{schedule.startTime}</td>
                        <td className={classes}>{schedule.endTime}</td>
                        {/* <td className={classes}>
                          <Tooltip content="Delete Schedule">
                            <IconButton
                              variant="text"
                              color="red"
                              onClick={() => handleOpenDeleteModal(schedule._id)}
                            >
                              <FaRegTrashAlt className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td> */}
                      </tr>
                    );
                  })
                )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray">
            End of Schedule List
          </Typography>
        </CardFooter>
        <DeleteScheduleModal
          open={deleteModal}
          onConfirm={handleDeleteSchedule}
          onCancel={handleCloseDeleteModal}
        />
        <ToastContainer />
      </Card>
    </Suspense>
  );
};

export default AllSchedulesPage;
