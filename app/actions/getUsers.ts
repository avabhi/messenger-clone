import prism from "@/app/libs/prismadb";
import getSession from "./getSession";
import { create } from "lodash";

const getUsers = async () => {
  const session = await getSession();
  if (!session?.user?.email) return [];
  try {
    const users = await prism.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email as string,
        },
      },
    });
    return users;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getUsers;
