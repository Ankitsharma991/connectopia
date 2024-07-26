export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    sameSender: false,
    isOnline: true,
    newMessageAlert: {
      count: 1,
    },
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Selmon bhoi",
    _id: "2",
    groupChat: true,
    sameSender: false,
    isOnline: true,
    newMessageAlert: {
      count: 1,
    },
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Abhinav Pandey",
    _id: "8",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Ronak Agarawal",
    _id: "9",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Ankit Karki",
    _id: "10",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "AnkitSharma",
    },
    _id: "8",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "AbhinavPandey",
    },
    _id: "9",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Anonymous",
    },
    _id: "7",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "L*uda ka Message hai",
    _id: "aksbkdbwbe",
    sender: {
      _id: "user_id",
      name: "Chaman",
    },
    chat: "chatId",
    createdAt: "2024-07-20T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asdad",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "aksbkdbe",
    sender: {
      _id: "ankit",
      name: "Chaman",
    },
    chat: "chatId",
    createdAt: "2024-07-20T10:41:30.630Z",
  },
];
