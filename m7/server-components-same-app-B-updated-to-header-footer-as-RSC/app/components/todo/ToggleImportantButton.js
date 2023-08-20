"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function ToggleImportantButton({ toDo }) {
  async function toggleIt() {
    try {
      const updatedImportant = !toDo.important;
      const updatedTodo = { ...toDo, important: updatedImportant };

      // Send the updated todos to the server
      const url = `http://localhost:3000/api/todos/${toDo.id}`
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });

      if (!response.ok) {
        throw new Error("Something went haywire with the network response!");
      }

      router.refresh();
    } catch (error) {
      console.error("uh oh! A glitch in the matrix:", error);
    }
  }

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // return (
  //   <button
  //     className="btn btn-info btn-sm"
  //     onClick={toggleIt}
  //   >
  //     Toggle Important
  //   </button>
  // );

  return (
    <button
      className="btn btn-info btn-sm"
      onClick={() => startTransition(toggleIt)}
    >
      Toggle Important
    </button>
  );
}
