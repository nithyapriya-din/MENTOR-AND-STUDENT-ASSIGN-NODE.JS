@@ -30,4 +30,16 @@ router.post("/", async (req, res) => {
  }	  }
});	});


router.get("/:id", async (req, res) => {
  console.log("show all students for particular mentor");
  try {
    const ment = await mentor
      .findById(req.params.id)
      .populate("studentsAssigned", "name");
    res.send(ment);
  } catch (e) {
    console.log(e, "error");
    res.status(500).send("error in for 1 mentor get all students");
  }
});
module.exports = router;	module.exports = router;
