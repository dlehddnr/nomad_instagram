import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    // 여기서 console.log(parent)는 User를 부른다.
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    isFollowing: async (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      try {
        return await prisma.$exists.user({
          AND: [
            { id: parentId },
            {
              followers_some: {
                id: user.id
              }
            }
          ]
        });
      } catch (error) {
        return false;
      }
    },
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    }
  }
};
