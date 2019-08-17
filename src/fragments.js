export const USER_FRAMENT = `
        id
        username
        avatar
`;

export const COMMENT_FRAGMENT = `
    id
    text
    user{
        ${USER_FRAMENT}
    }
`;

export const FILE_FRAGMENT = `
        id
        url
`;

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post {
        id
        location
        caption
        
        
        files {
            ${FILE_FRAGMENT}
        }
        comments {
           ${COMMENT_FRAGMENT}
        }
        user {
            ${USER_FRAMENT}
        }
    }
`;

export const MESSAGE_FRAGMENT = `
    id
    text
    to{
        ${USER_FRAMENT}
    }
    from {
        ${USER_FRAMENT}
    }
`;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants {
            ${USER_FRAMENT}
        }
        messages {
            ${MESSAGE_FRAGMENT}
        }
    }
`;
