import React from "react";
import InputNote from "./InputNote";

export default function Body() {
  return (
    <div>
      <h2 className="text-2xl">Buat catatan</h2>
      <p>Sisa karakter:{}</p>
      <InputNote/>
    </div>
  );
}
