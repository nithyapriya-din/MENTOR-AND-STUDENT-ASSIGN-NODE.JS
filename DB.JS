{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB Connected");
	@@ -30,6 +31,11 @@ const studentSchema = schema({
    type: String,
    required: true,
  },
});

const student = mongoose.model("student", studentSchema, "student");
	@@ -48,6 +54,13 @@ const mentorSchema = schema({
    type: String,
    required: true,
  },
});

const mentor = mongoose.model("mentor", mentorSchema, "mentor");
	
