import { NewTodo } from "@/components/todos/NewTodo";
import { TodoItem } from "@/components/todos/TodosItem";
import { Footer } from "@/components/Footer";
import { Topper } from "@/components/Topper";
import { Navbar } from "@/components/navbar/Navbar";
import { HamburgerBtn } from "@/components/navbar/HamburgerBTn";
import { prisma } from "@/db";
import { userId } from "../api/todo/route";


export default async function Todo() {
  const userID = await userId();

  const todos = await prisma.todo.findMany({
    where: {
      userId: { equals: userID },
    },
  });

  return (
    <main className="bg-white flex flex-col min-h-screen justify-between text-base-color relative">
      <div className="top-8 flex justify-between items-center absolute w-full mx-auto px-6 lg:hidden ">
        <Topper />
        <HamburgerBtn />
      </div>
      <Navbar />
      <section className="mx-auto my-56  ">
        <div className="bg-gray rounded-3xl py-6  h-[400px] w-[500px] flex flex-col text-slate-800">
          <NewTodo />
          <ul className="mb-20 px-6 overflow-auto ">
            <TodoItem todos={todos} />
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}

 