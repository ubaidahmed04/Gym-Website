"use client";
import React, { Suspense, useState } from "react";
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
} from "@material-tailwind/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const DeleteUserModal = ({ openModal, onSubmit, onClose }) =>
  openModal ? (
    <div>
      <p>Are you sure you want to delete this user?</p>
      <button onClick={onSubmit}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  ) : null;

const EditUserModal = ({ openModal, data, submitHua, onClose }) =>
  openModal ? (
    <div>
      <p>Edit User</p>
      <button onClick={submitHua}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  ) : null;

const AllUsersPage = () => {
  const TABLE_HEAD = ["Profile", "Name", "Email", "Role", "Action"];
  const [allUsers, setAllUsers] = useState([
    {
      _id: "1",
      profile: "https://via.placeholder.com/50",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
    },
    {
      _id: "2",
      profile: "https://via.placeholder.com/50",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Editor",
    },
    {
      _id: "3",
      profile: "https://via.placeholder.com/50",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "User",
    },
  ]);

  const [isLoader, setIsLoader] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleOpenModal = (id) => {
    setEditModal(true);
    setSelectedUserId(id);
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
  };

  const handleUpdateUser = () => {
    // Dummy update functionality
    setEditModal(false);
  };

  return (
    <Suspense fallback={"<div>Loading...</div>"}>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                All Users List
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                User list with dummy data
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
                : allUsers.map((user, index) => {
                    const isLast = index === allUsers.length - 1;
                    const classes = isLast
                      ? "p-2"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={user._id}>
                        <td className={classes}>
                          <Avatar
                            src={user.profile}
                            alt={user.name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-fit p-1"
                          />
                        </td>
                        <td className={classes}>{user.name}</td>
                        <td className={classes}>{user.email}</td>
                        <td className={classes}>
                          <Typography variant="small" color="gray">
                            {user.role}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edit User">
                            <IconButton
                              variant="text"
                              onClick={() => handleOpenModal(user._id)}
                            >
                              <HiOutlinePencilAlt className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="Delete User">
                            <IconButton
                              variant="text"
                              onClick={() => handleOpenDelModal(user._id)}
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
        <DeleteUserModal
          openModal={deleteModal}
          onSubmit={() => deleteUserFunc(selectedUserId)}
          onClose={closeDelModal}
        />
        <EditUserModal
          openModal={editModal}
          data={{}}
          submitHua={handleUpdateUser}
          onClose={handleCloseModal}
        />
        <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4"></CardFooter>
        <ToastContainer />
      </Card>
    </Suspense>
  );
};

export default AllUsersPage;
