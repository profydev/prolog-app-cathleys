import React from "react";

const options = {
  responsive: true,
};

const data = {
  labels: ["1", "2"],
  datasets: [
    {
      data: [2, 1],
      backgroundColor: "black",
      borderRadius: { topLeft: 4, topRight: 4 },
    },
  ],
};

export function BarChart() {
  return <div>chart</div>;
}
