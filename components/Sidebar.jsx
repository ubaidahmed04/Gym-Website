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
            <FiX className="h-8 w-8" />
          ) : (
            <FiMenu className="h-8 w-8" />
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
      className="h-[calc(100vh-2rem)] border w-full p-4"
    >
      <div className="mb-2 flex items-center gap-4 p-4">
        <SiOpenaigym  size={30} className="font-bold text-2xl"/>
        <Typography variant="h5" color="blue-gray">
          Ideal
        </Typography>
      </div>
      <div className="p-2">
        <Input
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
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <FiPieChart className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5" />
                </ListItemPrefix>
                Members
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5" />
                </ListItemPrefix>
                Management
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5" />
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
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <FiShoppingBag className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Store
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FiChevronRight className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        {/* <ListItem>
          <ListItemPrefix>
            <FiInbox className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem> */}
        <ListItem>
          <ListItemPrefix>
            <FiUser className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <FiSettings className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <FiLogOut className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <FiAlertCircle className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to Material Tailwind PRO and get even more components,
          plugins, advanced features and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}
