const mongoose = require("mongoose");
const db = require("./app/models"); // Use existing Sequelize setup
const Questions = db.activity;
const Question = require("./app/models/question.model");

const mongoUrl = process.env.MONGO_URL || "mongodb://mongo:27017/questionsdb";

// MongoDB setup
async function migrateQuestions() {
  try {
    await db.sequelize.authenticate();
    console.log("PostgreSQL connected.");

    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected.");

    // const Question = mongoose.model(
    //   "Question",
    //   new mongoose.Schema({
    //     id: Number,
    //     qtype: String,
    //     urltitle: String,
    //     fulltitle: String,
    //     qtext: String,
    //     metadata: Object,
    //   })
    // );

    const questions = await Questions.findAll();
    const questionDocs = questions.map((q) => q.toJSON());

    await Question.insertMany(questionDocs);
    console.log("Questions migrated to MongoDB.");

    await mongoose.disconnect();
    await db.sequelize.close();
  } catch (error) {
    console.error("Migration error:", error);
  }
}

migrateQuestions();
