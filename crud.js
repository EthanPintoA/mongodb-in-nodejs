const mongoose = require("mongoose");

const budgetModel = require("./models/budget_schema");

const URL = "mongodb://127.0.0.1:27017/personal_budget";

async function getAllData() {
  try {
    await mongoose.connect(URL);
    const data = await budgetModel.find({});
    await mongoose.connection.close();

    let myBudget = data.map((item) => {
      return {
        title: item.title,
        budget: item.related_value,
        color: item.color,
      };
    });
    return { myBudget: myBudget };
  } catch (err) {
    console.log(err);
  }
}

async function insertData(data) {
  try {
    const newBudget = new budgetModel({
      title: data.title,
      related_value: data.budget,
      color: data.color,
    });

    await mongoose.connect(URL);
    await newBudget.save();
    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getAllData, insertData };
