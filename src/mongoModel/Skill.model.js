import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true
    },
    org_id: {
      type: String,
      required: true,
      index: true
    },
    created_by: {
      type: String,
      required: true
    },
    updated_by: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
