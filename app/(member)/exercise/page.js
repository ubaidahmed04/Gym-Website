"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";

const GymExercisePage = () => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const [selectedDay, setSelectedDay] = useState("Monday");

  // Dummy exercise data for each day
  const exerciseSchedule = {
    Monday: [
      { name: "Bench Press", sets: 4, reps: "12-10-8-6", duration: "40 min" },
      { name: "Push-Ups", sets: 3, reps: "15", duration: "15 min" },
    ],
    Tuesday: [
      { name: "Deadlift", sets: 4, reps: "8", duration: "45 min" },
      { name: "Pull-Ups", sets: 3, reps: "12", duration: "20 min" },
    ],
    Wednesday: [
      { name: "Squats", sets: 4, reps: "10-8-6", duration: "50 min" },
      { name: "Lunges", sets: 3, reps: "12", duration: "15 min" },
    ],
    Thursday: [
      { name: "Bicep Curls", sets: 3, reps: "12", duration: "25 min" },
      { name: "Tricep Dips", sets: 3, reps: "12", duration: "20 min" },
    ],
    Friday: [
      { name: "Shoulder Press", sets: 4, reps: "10", duration: "35 min" },
      { name: "Lateral Raises", sets: 3, reps: "12", duration: "20 min" },
    ],
    Saturday: [
      { name: "Cardio", sets: "-", reps: "-", duration: "30 min" },
      { name: "Plank", sets: 3, reps: "60 sec", duration: "15 min" },
    ],
    Sunday: [
      { name: "Rest Day", sets: "-", reps: "-", duration: "-" },
    ],
  };

  return (
    <Card className="h-full w-full bg-darkBlue text-white my-4 py-4 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex flex-col justify-between bg-darkBlue gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="white">
              Gym Exercise Schedule
            </Typography>
            <Typography color="light-blue" className="mt-1 font-normal">
              View your daily exercise plan and stay consistent with your routine.
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <Tabs value={selectedDay} onChange={setSelectedDay}>
          <TabsHeader>
            {daysOfWeek.map((day) => (
              <Tab key={day} value={day}>
                {day}
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
        <div className="mt-4">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            {selectedDay}'s Exercises
          </Typography>
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="border-b p-4">Exercise</th>
                <th className="border-b p-4">Sets</th>
                <th className="border-b p-4">Reps</th>
                <th className="border-b p-4">Duration</th>
              </tr>
            </thead>
            <tbody>
              {exerciseSchedule[selectedDay].map((exercise, index) => (
                <tr key={index}>
                  <td className="p-4">{exercise.name}</td>
                  <td className="p-4">{exercise.sets}</td>
                  <td className="p-4">{exercise.reps}</td>
                  <td className="p-4">{exercise.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default GymExercisePage;
