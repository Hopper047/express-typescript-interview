import express from "express";
import {
  createTeamData,
  deleteTeamData,
  getAllTeams,
  getTeamByID,
  getTeamsByName,
  updateTeamData,
} from "./teams.controller";

export const TeamRouter = express.Router();

// add proper REST endpoints to support Team crud operations
TeamRouter.get("/getAllTeams", getAllTeams);

TeamRouter.get("/find/:id", getTeamByID);

TeamRouter.post("/addTeamsData", createTeamData);

TeamRouter.put("/updateTeamData", updateTeamData);

TeamRouter.delete("/deleteTeamData/:id", deleteTeamData);

TeamRouter.post("/getTeamsByName", getTeamsByName);
