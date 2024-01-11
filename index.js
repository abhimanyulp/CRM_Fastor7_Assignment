const express = require("express");
const cors = require("cors")
const { connection } = require("./configs/db")
const { userRouter } = require("./routes/user.route")
const { enquiryRouter } = require("./routes/enquiry.route")

require("dotenv").config();
const app = express();

app.use(cors())
app.use(express.json())

app.use("/user", userRouter)
app.use("/enquiries", enquiryRouter)

const port = process.env.port || 8080
app.listen(port, async () => {
    try {
        await connection 
        console.log("Connected to mongoDB")
        console.log(`Server running at http://localhost:${port}`)
    } catch (error) {
        console.log("Not connected to db")
        console.log(error)
    }
})