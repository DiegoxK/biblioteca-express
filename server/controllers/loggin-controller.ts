import { Request, Response } from "express";
import log from "../models/log";

const createLog = async (
  action: string,
  userName?: string,
  bookName?: string
) => {
  if (userName && bookName) {
    const newLog = new log({ action, userName, bookName });
    await newLog.save();
  } else if (userName) {
    const newLog = new log({ action, userName });
    await newLog.save();
  } else if (bookName) {
    const newLog = new log({ action, bookName });
    await newLog.save();
  }
};

const getLogs = async (req: Request, res: Response) => {
  const logs = await log.find();

  if (logs.length === 0) {
    return res.status(404).json({
      message: "No logs found",
    });
  }

  return res.json(logs);
};

export { createLog, getLogs };
