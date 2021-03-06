import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";

const config: Parameters<typeof MikroORM.init>[0] = {
  migrations: {
    path: path.join(__dirname, `./migrations`),
    pattern: /^[\w-]+\d+\.{ts,js}$/,
  },
  entities: [Post],
  dbName: `reddit`,
  user: `postgres`,
  password: `postgres`,
  type: `postgresql`,
  debug: !__prod__,
};

export default config;
