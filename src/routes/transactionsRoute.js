import express from "express";
import { createTransaction, deleteTransaction, getTransactionsByUserId, summaryTransaction } from "../controllers/transactionsController.js"

const router = express.Router();

router.get("/:userId", getTransactionsByUserId);

router.post("/", createTransaction);

router.delete("/:id", deleteTransaction);
router.get("/summary/:userId", summaryTransaction);

export default router;

// controllers/transactionsController.js
// import { sql } from "../config/db.js";

// export const getTransactionsByUserId = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const transactions = await sql`
//       SELECT * FROM transactions WHERE user_id = ${userId}
//       ORDER BY created_at DESC
//     `;

//     res.status(200).json(transactions);
//   } catch (error) {
//     console.log("Error fetching transactions:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export default router;
