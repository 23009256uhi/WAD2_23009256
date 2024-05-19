// const db = require("../models");
// const Questions = db.activity;

// exports.questions = (req, res) => {
//   Questions.findAll({
//     where: {
//       qtype: "q"
//     }
//   })
//     .then(qs => {
//       if (qs && qs.length > 0) {
//         const qNames = qs.map((q) => {
//             return {
//                 qid: q.dataValues.urltitle,
//                 title: q.dataValues.fulltitle
//             }
//         })

//         return res.status(200).send({ success: true, questions: qNames});
//       } else {
//         res.status(404).send({ success: false, questions: []});
//       }
//     })
//     .catch(err => {
//       res.status(500).send({ message: err.message });
//     });
// };

// exports.question = (req, res) => {
//     Questions.findOne({
//       where: {
//         urltitle: req.body.urltitle
//       }
//     })
//       .then(q => {
//         if (q) {
//           const qData = {
//             urltitle: q.dataValues.urltitle,
//             fulltitle: q.dataValues.fulltitle,
//             qtext: q.dataValues.qtext,
//             answers: JSON.parse(q.dataValues.metadata)
//           }
//           return res.status(200).send({ success: true, question: qData });
//         } else {
//           res.status(404).send({ success: false, message: "no question found"});
//         }
//       })
//       .catch(err => {
//         res.status(500).send({ success: false, message: err.message });
//       });
//   };

const Question = require("../models/question.model"); // Import the MongoDB model
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL || "mongodb://mongo:27017/questionsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
  });

exports.questions = async (req, res) => {
  try {
    const qs = await Question.find({ qtype: "q" });
    if (qs && qs.length > 0) {
      const qNames = qs.map((q) => ({
        qid: q.urltitle,
        title: q.fulltitle,
      }));
      return res.status(200).send({ success: true, questions: qNames });
    } else {
      res.status(404).send({ success: false, questions: [] });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.question = async (req, res) => {
  try {
    const q = await Question.findOne({ urltitle: req.body.urltitle });
    if (q) {
      const qData = {
        urltitle: q.urltitle,
        fulltitle: q.fulltitle,
        qtext: q.qtext,
        answers: q.metadata,
      };
      return res.status(200).send({ success: true, question: qData });
    } else {
      res.status(404).send({ success: false, message: "No question found" });
    }
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
};
