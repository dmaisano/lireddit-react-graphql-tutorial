import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Redis } from "ioredis";

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: Request & { session: Express.Session };
  // req: Request;
  res: Response;
  redis: Redis;
};

export interface EmailProps {
  to: string;
  subject: string;
  html?: string;
}
