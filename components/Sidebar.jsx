"use client";
import React, { useState } from "react";
import {
  FiMenu,
  FiX,
  FiPieChart,
  FiChevronDown,
  FiChevronRight,
  FiShoppingBag,
  FiInbox,
  FiUser,
  FiSettings,
  FiLogOut,
  FiAlertCircle,
} from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import { SiOpenaigym } from "react-icons/si";
import {
  Card,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Chip,
  Typography,
  IconButton,
  Drawer,
  Alert,
} from "@material-tailwind/react";
import Link from "next/link";

export default function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const handleOpen = (id) => setOpen(open === id ? null : id);

  return (
    <>
      {/* Menu Icon for Mobile */}
      <div className="lg:hidden">
        <IconButton variant="text" size="lg" onClick={openDrawer}>
          {isDrawerOpen ? (
            <FiX className="h-8 w-8 text-white" />
          ) : (
            <FiMenu className="text-white h-8 w-8" />
          )}
        </IconButton>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        className="lg:hidden"
      >
        <SidebarContent
          closeDrawer={closeDrawer}
          openAlert={openAlert}
          setOpenAlert={setOpenAlert}
          open={open}
          handleOpen={handleOpen}
        />
      </Drawer>

      {/* Permanent Sidebar for Large Screens */}
      <div className="hidden lg:block w-64">
        <SidebarContent
          closeDrawer={closeDrawer}
          openAlert={openAlert}
          setOpenAlert={setOpenAlert}
          open={open}
          handleOpen={handleOpen}
        />
      </div>
    </>
  );
}

function SidebarContent({ closeDrawer, openAlert, setOpenAlert, open, handleOpen }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="h-[calc(100vh)] sticky top-0 bg-black text-white  border w-full p-4"
    >
      <div className="mb-2 flex items-center gap-4 p-4">
        <SiOpenaigym  size={30} className="font-bold text-2xl"/>
        <Typography variant="h5" color="white">
          Ideal
        </Typography>
      </div>
      <div className="p-2">
        <Input
        className="focus:border-white bg-white"
          icon={<LuSearch className="h-5 w-5" />}
          label="Search"
        />
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <FiChevronDown
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 text-white"
            >
              <ListItemPrefix>
                <FiPieChart className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 text-white">
            <List className="p-0 text-white">
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5 text-white" />
                </ListItemPrefix>
                Members
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5 text-white" />
                </ListItemPrefix>
                Management
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5 text-white" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <FiChevronDown
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3 text-white"
            >
              <ListItemPrefix>
                <FiShoppingBag className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Store
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1 text-white">
            <List className="p-0 text-white">
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5 text-white" />
                </ListItemPrefix>
                Orders
              </ListItem>

        <Link href={"/allProducts"}>
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
        </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-white-50" />
       
        <ListItem className="text-white">
          <ListItemPrefix>
            <FiUser className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
       
        <Link href={"/"}>
        <ListItem className="text-white">
          <ListItemPrefix>
            <FiLogOut className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
        </Link>
      </List>
      
    </Card>
  );
}
