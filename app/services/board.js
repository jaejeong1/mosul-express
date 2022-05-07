import db from "../models/index.js";

 export default function BoardService() {
     const Board = db.Board;

     return {
         getBoards(req, res) {
             Board.find()
                 .limit(10)
                 .sort([["_id", -1]])
                 .exec((err, boards) => {
                     if (err) {
                         res.status(500).json({ message: err });
                         console.log("Get fail Board list");
                     } else {
                         res.status(200).json(board);
                     }
                 });
         },
         createBoard(req, res) {
             const data = req.body;
             new Board(data).save((err) => {
                 if (err) {
                     res.status(500).json({ message: err });
                     console.log("Create fail Board");
                     return;
                 } else {
                     res.status(200).json({ ok: "ok" });
                 }
             });
         },
         getBoard(req, res) {
             const { id } = req.params;
             Board.findById(id).exec((err, board) => {
                 if (err) {
                     res.status(500).json({ message: err });
                     console.log("Get fail Board");
                 } else {
                     res.status(200).json(board);
                 }
             });
         },
         updateBoard(req, res) {
             const { id } = req.params;
             Board.findByIdAndUpdate(id, { ...req.body }, (err) => {
                 if (err) {
                     res.status(500).json({ message: err });
                     console.log("Update fail Board");
                     return;
                 } else {
                     res.status(200).json({ ok: "ok" });
                 }
             });
         },
         deleteBoard(req, res) {
             const { id } = req.params;
             Board.findByIdAndDelete(id, (err) => {
                 if (err) {
                     res.status(500).json({ message: err });
                     console.log("Delete fail Board");
                     return;
                 } else {
                     res.status(200).json({ ok: "ok" });
                 }
             });
         },
     };
 }