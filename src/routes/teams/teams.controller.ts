// properly implement this controller function using the appropriate types

import { Request, Response } from "express";
import { TeamService } from "../../services/team.service";

interface TypedRequestBody<T> extends Request {
  body: T;
}

type ResType = {
  statusCode: number;
  message: string;
  data?: object;
};

export const getAllTeams = async (req: TypedRequestBody<{}>, res: Response) => {
  try {
    const allTeamsData = await TeamService.findAll();

    return allTeamsData.length
      ? res.send({
          statusCode: 200,
          message: "All Teams Data",
          data: allTeamsData,
        } as ResType)
      : res.status(404).send({
          statusCode: 404,
          message: "Error in fetching the Teams data",
        } as ResType);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

export const createTeamData = async (
  req: TypedRequestBody<[{ id: number; name: string }]>,
  res: Response
) => {
  try {
    const allTeamsData = await TeamService.add(req.body);

    return allTeamsData
      ? res.send({
          statusCode: 200,
          message: "New Team added",
        } as ResType)
      : res.status(404).send({
          statusCode: 404,
          message: "Error in adding the New Teams data",
        } as ResType);
  } catch (error) {
    console.error("Error adding team:", error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

export const updateTeamData = async (req: Request, res: Response) => {
  try {
    const allTeamsData = await TeamService.update(req.body);

    return allTeamsData
      ? res.send({
          statusCode: 200,
          message: "Teams Data Updated",
        } as ResType)
      : res.status(404).send({
          statusCode: 404,
          message: "Error in updating the Teams data",
        } as ResType);
  } catch (error) {
    console.error("Error updating team:", error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

export const deleteTeamData = async (req: Request, res: Response) => {
  try {
    const allTeamsData = await TeamService.remove(req.params.id);

    return allTeamsData
      ? res.send({
          statusCode: 200,
          message: "Teams Data Deleted",
        } as ResType)
      : res.status(404).send({
          statusCode: 404,
          message: "Error in deleting the Teams data",
        } as ResType);
  } catch (error) {
    console.error("Error deleting team:", error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

export const getTeamsByName = async (req: Request, res: Response) => {
  try {
    const TeamsData = await TeamService.findByNameMatch(req.body.name);

    return TeamsData.length
      ? res.send({
          statusCode: 200,
          message: "Teams Data Found",
          data: TeamsData,
        } as ResType)
      : res.status(404).send({
          statusCode: 404,
          message: "Error in finding the Teams data",
        } as ResType);
  } catch (error) {
    console.error("Error finding team:", error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};

export const getTeamByID = async (
  req: TypedRequestBody<{ id: number }>,
  res: Response
) => {
  try {
    const data = await TeamService.findById(req.params.id);
    return data
      ? res.send({
          statusCode: 200,
          message: "Teams Data Found",
          data: data,
        } as ResType)
      : res.status(404).send({
          statusCode: 404,
          message: "Error in fetching the Teams data",
        } as ResType);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({ statusCode: 500, message: "Internal server error" });
  }
};
