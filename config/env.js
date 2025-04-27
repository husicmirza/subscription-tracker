import dotenv from "dotenv";

/* global process */
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV } = process.env;
