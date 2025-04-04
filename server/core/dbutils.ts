import { JSONFilePreset } from "lowdb/node";
import path from "path";
import { Database } from "../types";
import { Low } from "lowdb";
import { getStaticFilePath } from "./pathutils";

export let db: Low<Database>;

export const createConnection = async () => {
    const dbPathAndFileName = getStaticFilePath(import.meta.url, "db.json");
    console.log("Creating connection to database...", dbPathAndFileName);

    db = await JSONFilePreset<Database>(dbPathAndFileName, { recipes: [] });

    console.log("Connection to database created successfully");
}; 