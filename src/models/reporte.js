/* Modules */
import mongoose, { Schema } from "mongoose";

const reporteSchema = new Schema(
  {
    concepto: String,
    fecha_desde: String,
    fecha_desde_raw: String,
    fecha_hasta: String,
    fecha_hasta_raw: String,
    nombre: String,
    posicion: String,
    departamento: String,
    supervisor: String,
    gastos: Array,
    aprobado_por: String,
    firma: String,
  },
  { timestamps: true }
);

export default mongoose.model("reporte", reporteSchema);
