import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT, FULL_POST_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      return await prisma.post({ id });
    }
  }
};
