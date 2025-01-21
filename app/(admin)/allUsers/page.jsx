"use client";
import React, { Suspense, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Avatar,
  Tooltip,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-tailwind/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const DeleteUserModal = ({ openModal, onSubmit, onClose }) => (
  <Dialog open={openModal} onClose={onClose}>
    <DialogTitle>Confirm Deletion</DialogTitle>
    <DialogContent>
      <Typography>Are you sure you want to delete this user?</Typography>
    </DialogContent>
    <DialogActions>
      <Button variant="text" onClick={onClose}>Cancel</Button>
      <Button variant="filled" color="red" onClick={onSubmit}>Delete</Button>
    </DialogActions>
  </Dialog>
);

const EditUserModal = ({ openModal, userData, onSubmit, onClose }) => (
  <Dialog open={openModal} onClose={onClose}>
    <DialogTitle>Edit User</DialogTitle>
    <DialogContent>
      <div className="space-y-4">
        <Input
          label="Name"
          defaultValue={userData.name}
          onChange={(e) => userData.name = e.target.value}
        />
        <Input
          label="Email"
          defaultValue={userData.email}
          onChange={(e) => userData.email = e.target.value}
        />
        <Input
          label="Role"
          defaultValue={userData.role}
          onChange={(e) => userData.role = e.target.value}
        />
      </div>
    </DialogContent>
    <DialogActions>
      <Button variant="text" onClick={onClose}>Cancel</Button>
      <Button variant="filled" color="blue" onClick={() => onSubmit(userData)}>Submit</Button>
    </DialogActions>
  </Dialog>
);

const AllUsersPage = () => {
  const TABLE_HEAD = ["Member Name",  "Email", "Exercise","Diet","Contact", "Action"];
  const [allUsers, setAllUsers] = useState([]);

  const [isLoader, setIsLoader] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserData, setSelectedUserData] = useState(null);

  const handleOpenModal = (user) => {
    setEditModal(true);
    setSelectedUserId(user._id);
    setSelectedUserData(user);
  };

  const handleOpenDelModal = (id) => {
    setDeleteModal(true);
    setSelectedUserId(id);
  };

  const closeDelModal = () => setDeleteModal(false);
  const handleCloseModal = () => setEditModal(false);

  const deleteUserFunc = (id) => {
    setAllUsers((prev) => prev.filter((user) => user._id !== id));
    setDeleteModal(false);
    toast.success("User deleted successfully");
  };

  const handleUpdateUser = (updatedUser) => {
    setAllUsers(prev => prev.map(user => user._id === updatedUser._id ? updatedUser : user));
    setEditModal(false);
    toast.success("User updated successfully");
  };
  useEffect(() => {
    // Fetch user data from API
    const URL = "https://gym-backend-mocha.vercel.app/api/members"
    // const URL = "http://localhost:4000/api/members"
    setIsLoader(true)
    axios
      .get(URL, )
      .then((response) => {
        console.log(response)
        setAllUsers(response.data); // Assuming response.data contains user data
        setIsLoader(false); // Stop loader
      })
      .catch((error) => {
        toast.error("Failed to fetch user data");
        setIsLoader(false); // Stop loader even on error
      });
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">All Users List</Typography>
              <Typography color="gray" className="mt-1 font-normal">User list with dummy data</Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input label="Search" icon={<HiMagnifyingGlass className="h-5 w-5" />} />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
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
                    )) : (
                allUsers.map((user, index) => {
                  const isLast = index === allUsers.length - 1;
                  const classes = isLast ? "p-2" : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={user._id}>
                      {/* <td className={classes}>
                        <Avatar src={user.profile} alt={user.name} size="md" className="border border-blue-gray-50 bg-blue-gray-50/50 object-fit p-1" />
                      </td> */}
                      <td className={classes}>{user.username}</td>
                      <td className={classes}>{user.email}</td>
                      <td className={classes}>{user.dailyExercise}</td>
                      <td className={classes}>{user.dailyDiet}</td>
                      <td className={classes}>
                        <Typography variant="small" color="gray">{user.phoneNo}</Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text" onClick={() => handleOpenModal(user)}>
                            <HiOutlinePencilAlt className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete User">
                          <IconButton variant="text" onClick={() => handleOpenDelModal(user._id)}>
                            <FaRegTrashAlt className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4"></CardFooter>
        <ToastContainer />
      </Card>

      {/* <DeleteUserModal
        openModal={deleteModal}
        onSubmit={() => deleteUserFunc(selectedUserId)}
        onClose={closeDelModal}
      />
      <EditUserModal
        openModal={editModal}
        userData={selectedUserData || {}}
        onSubmit={handleUpdateUser}
        onClose={handleCloseModal}
      /> */}
    </Suspense>
  );
};

export default AllUsersPage;
