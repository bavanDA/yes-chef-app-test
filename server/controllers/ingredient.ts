import express from "express";
import { Collection } from "mongodb";
import { Client_Connect } from "../../config/config.ts";

const router = express.Router();

interface IIngredient extends Document {
  _id: string;
  name: string;
  unitCost: number;
  quantity: number;
  thresholdLevel: number;
}

router.get("/ingredients", async (req, res) => {
  try {
    // init db connection with MongoClient
    const client = await Client_Connect();

    // init db by name
    const db = client.db("Inventory");
    //init collection by name
    const collection: Collection<IIngredient> = db.collection("Ingredients");

    console.log("Starting fetching of ingredients");

    //Find collection and convert to array
    const ingredients = await collection.find({}).toArray();

    res.status(200).json(ingredients);
    console.log("Ingredients were successfully fetched!");
    client.close();
  } catch (err) {
    console.error("Failed to fetch ingredients: ", err);
    process.exit(1);
  }
});

export default router;
