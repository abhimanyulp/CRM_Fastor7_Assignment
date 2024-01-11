const express = require("express")
const enquiryRouter = express.Router()
const enquiryController = require("../controllers/enquiry.controller")
const { Authentication } = require("../middlewares/authentication.middleware")

enquiryRouter.post("/create", enquiryController.create)
enquiryRouter.get("/logs", enquiryController.logs)
enquiryRouter.post("/assign", Authentication(["Employee","Counselor"]), enquiryController.assign)
enquiryRouter.get("/getassigned", Authentication(["Employee","Counselor"]), enquiryController.getassigned)



module.exports = { enquiryRouter }