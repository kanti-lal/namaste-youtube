import React from "react";

const commentsData = [
  {
    name: "Kanti lal",
    text: "Lorem ipsum dolar sit amet, consecteture adip",
    replies: [],
  },
  {
    name: "Kanti lal",
    text: "Lorem ipsum dolar sit amet, consecteture adip",
    replies: [
      {
        name: "Kanti lal",
        text: "Lorem ipsum dolar sit amet, consecteture adip",
        replies: [
          {
            name: "Kanti lal",
            text: "Lorem ipsum dolar sit amet, consecteture adip",
            replies: [
              {
                name: "Kanti lal",
                text: "Lorem ipsum dolar sit amet, consecteture adip",
                replies: [
                  {
                    name: "Kanti lal",
                    text: "Lorem ipsum dolar sit amet, consecteture adip",
                    replies: [
                      {
                        name: "Kanti lal",
                        text: "Lorem ipsum dolar sit amet, consecteture adip",
                        replies: [
                          {
                            name: "Kanti lal",
                            text: "Lorem ipsum dolar sit amet, consecteture adip",
                            replies: [
                              {
                                name: "Kanti lal",
                                text: "Lorem ipsum dolar sit amet, consecteture adip",
                                replies: [],
                              },
                              {
                                name: "Kanti lal",
                                text: "Lorem ipsum dolar sit amet, consecteture adip",
                                replies: [],
                              },
                            ],
                          },
                          {
                            name: "Kanti lal",
                            text: "Lorem ipsum dolar sit amet, consecteture adip",
                            replies: [],
                          },
                        ],
                      },
                      {
                        name: "Kanti lal",
                        text: "Lorem ipsum dolar sit amet, consecteture adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Kanti lal",
                    text: "Lorem ipsum dolar sit amet, consecteture adip",
                    replies: [],
                  },
                ],
              },
              {
                name: "Kanti lal",
                text: "Lorem ipsum dolar sit amet, consecteture adip",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Kanti lal",
        text: "Lorem ipsum dolar sit amet, consecteture adip",
        replies: [],
      },
    ],
  },
  {
    name: "Kanti lal",
    text: "Lorem ipsum dolar sit amet, consecteture adip",
    replies: [
      {
        name: "Kanti lal",
        text: "Lorem ipsum dolar sit amet, consecteture adip",
        replies: [],
      },
      {
        name: "Kanti lal",
        text: "Lorem ipsum dolar sit amet, consecteture adip",
        replies: [],
      },
    ],
  },
  {
    name: "Kanti lal",
    text: "Lorem ipsum dolar sit amet, consecteture adip",
    replies: [
      {
        name: "Kanti lal",
        text: "Lorem ipsum dolar sit amet, consecteture adip",
        replies: [],
      },
      {
        name: "Kanti lal",
        text: "Lorem ipsum dolar sit amet, consecteture adip",
        replies: [],
      },
    ],
  },
  {
    name: "Kanti lal",
    text: "Lorem ipsum dolar sit amet, consecteture adip",
    replies: [
      {
        name: "Kanti lal",
        text: "Lorem ipsum dolar sit amet, consecteture adip",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded my-2">
      <img
        src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
        alt="user"
        className="w-10 h-10"
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 w-[1100px]">
      <h1 className="font-bold text-2xl mb-1">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
