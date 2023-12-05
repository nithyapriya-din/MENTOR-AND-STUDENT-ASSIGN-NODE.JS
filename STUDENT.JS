const express = require("express");
const router = express.Router();

const { student } = require("../shared/db");

router.get("/", async (req, res) => {
  console.log("get all Students");
	@@ -24,8 +24,8 @@ router.post("/", async (req, res) => {
    });
    res.send(data);
  } catch (e) {
    console.log("error");
    res.status(400).send("Error in student POST");
  }
});
