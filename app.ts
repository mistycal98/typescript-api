import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_, res: any) => {
	res.json({
		status: "Successfull",
		message: "This is Home Page",
	});
});

app.post("/", (req: any, res: any) => {
	res.json({
		status: "Successfull",
		data: req.body,
		message: "Post Received",
	});
});

app.listen(process.env.PORT, () => {
	console.log(`Server Started on http://localhost:${process.env.PORT}`);
});
