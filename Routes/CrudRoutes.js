import express from "express";
import connectDB from "../utilis/db.js";
import { CrudModel } from "../utilis/models/CrudModel.js";

const Routes = express.Router();

Routes.post("/", async (req, res) => {
  try {
    await connectDB();
    const bodyData = req.body;
    const data = await CrudModel.create(bodyData);

    if (!data) {
      res.status(404).json({
        msg: "Something wrong to Add Data in MongoDB",
        success: false,
      });
    }

    res.status(201).json({
      result: data,
      msg: "data Added Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
});

Routes.get("/", async (req, res) => {
  try {
    await connectDB();
    const data = await CrudModel.find();

    if (!data) {
      res.status(404).json({
        msg: "Something went wrong to fetched Data",
        success: false,
      });
    }

    res.status(200).json({
      result: data,
      msg: "Data fetched Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
});

Routes.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await connectDB();
    const data = req.body;
    const newData = await CrudModel.findByIdAndUpdate(id, data);

    if (!newData) {
      res.status(404).json({
        msg: "Data Not Updated",
        success: false,
      });
    }

    res.status(201).json({
      result: newData,
      msg: "Data Updated Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
});

Routes.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await connectDB();
    const data = await CrudModel.findOne({ _id: id });
    if (!data) {
      res.status(404).json({
        msg: "Data Not Found Successfully",
        success: false,
      });
    }

    res.status(200).json({
      result: data,
      msg: "Data Fetched Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
});

Routes.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await connectDB();

    const data = await CrudModel.findByIdAndDelete({ _id: id });

    if (!data) {
      res.status(404).json({
        msg: "Something went wrong to delete data from Database",
        success: false,
      });
    }

    res.status(200).json({
      result: data,
      msg: "Data delete Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error.message);
  }
});

export default Routes;
