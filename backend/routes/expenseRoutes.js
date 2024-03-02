const express=require("express")
const router=express.Router();
const expenseController=require("../controllers/expenseControllers")

router.get("/",expenseController.getAllExpenses)
router.post("/",expenseController.createExpense)

module.exports=router