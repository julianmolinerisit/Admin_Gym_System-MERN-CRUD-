import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    dni: {
      type: String,
      required: true,
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    fechaInicioMembresia: {
      type: Date,
      required: true,
    },
    comentarios: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);