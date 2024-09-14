"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {useRouter} from 'next/navigation';

import { revalidatePath } from "next/cache";

import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";

import Logout from "@/components/Logout";

const client = generateClient<Schema>();

export default async function App() {
  const user = await AuthGetCurrentUserServer();
  const { data: todos } = await cookiesClient.models.Todo.list();

  async function addTodo(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    await cookiesClient.models.Todo.create({
      content: title,
      done: false,
      priority: "medium",
    });
    revalidatePath("/");
  }

  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      {user && <Logout />}
      <form action={addTodo}>
        <input type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos?.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </ul>
    </>
  );
}
