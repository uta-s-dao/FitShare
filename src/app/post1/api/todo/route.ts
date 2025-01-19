import { PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient();
// 取得
export async function GET() {
  // todoテーブルから全件取得
  const todos: Todo[] = await prisma.todo.findMany();
  return Response.json(todos);
}
// 追加
export async function POST(request: Request) {
  const { title }: { title: string } = await request.json();
  // todoテーブルに追加
  const response = await prisma.todo.create({
    data: {
      title,
    },
  });
  return Response.json(response);
}
