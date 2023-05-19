import { useLoaderData } from "react-router-dom";

export default function TodolistPlayGround() {
  const store = useLoaderData();

  console.log(store);

  return <h1>Play Ground!</h1>;
}
