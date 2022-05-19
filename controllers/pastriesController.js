import PastriesModel from "../Models/Pastries.js";

export default async (req, res) => {
  const pastries = await PastriesModel.aggregate([
    { $match: { order: 1 } },
    { $group: { _id: "$number", total: { $sum: 1 } } },
  ]);

  res.send(pastries);
};