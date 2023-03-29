import React from "react";
import { BarChart, Bar } from "recharts";

export function BarGraph() {
  return (
    <BarChart width={100} height={50} data={data}>
      <Bar dataKey="uv" fill="#D6BBFB" radius={[10, 10, 0, 0]} />
    </BarChart>
  );
}

export const data = [
  {
    name: "1",
    uv: 24,
  },
  {
    name: "2",
    uv: 20,
  },
  {
    name: "3",
    uv: 24,
  },
  {
    name: "4",
    uv: 33,
  },
  {
    name: "5",
    uv: 16,
  },
  {
    name: "6",
    uv: 19,
  },
  {
    name: "7",
    uv: 24,
  },
  {
    name: "8",
    uv: 17,
  },
  {
    name: "9",
    uv: 16,
  },
  {
    name: "10",
    uv: 8,
  },
  {
    name: "11",
    uv: 26,
  },
  {
    name: "12",
    uv: 20,
  },
  {
    name: "13",
    uv: 29,
  },
  {
    name: "14",
    uv: 16,
  },
];
