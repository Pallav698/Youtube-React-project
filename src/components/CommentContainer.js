import React from 'react'

const commentData = [
  {
    name: "Pallav Pushparaj",
    comment: "This is a great video",
    reply: [
      {
        name: "Pallav Pushparaj",
        comment: "This is a great video",
        reply: [
          {
            name: "Pallav Pushparaj",
            comment: "This is a great video",
            reply: [],
          },
        ],
      },
      {
        name: "Pallav Pushparaj",
        comment: "This is a great video",
        reply: [
          {
            name: "Pallav Pushparaj",
            comment: "This is a great video",
            reply: [],
          },
          {
            name: "Pallav Pushparaj",
            comment: "This is a great video",
            reply: [
              {
                name: "Pallav Pushparaj",
                comment: "This is a great video",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Pallav Pushparaj",
    comment: "This is a great video",
    reply: [
      {
        name: "Pallav Pushparaj",
        comment: "This is a great video",
        reply: [],
      },
    ],
  },
  {
    name: "Pallav Pushparaj",
    comment: "This is a great video",
    reply: [
      {
        name: "Pallav Pushparaj",
        comment: "This is a great video",
        reply: [
          {
            name: "Pallav Pushparaj",
            comment: "This is a great video",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Pallav Pushparaj",
    comment: "This is a great video",
    reply: [],
  },
  {
    name: "Pallav Pushparaj",
    comment: "This is a great video",
    reply: [
      {
        name: "Pallav Pushparaj",
        comment: "This is a great video",
        reply: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
    const { name, comment } = data;
    
    return (
        <div className='flex shawdow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img className='w-12 h-12'
            alt='user-icon'
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            ></img>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{comment}</p>
            </div>
        </div>
    );
};

const CommentList = ({comments}) => {
    
    
    
        
            return comments.map((comment, index) => (
              <div key={index}>
                <Comment data={comment} />
                <div className="pl-5 border border-l ml-5">
                  <CommentList comments={comment.reply} />
                </div>
              </div>
            ));
            
        
    
};

const CommentContainer = () => {
  return (
    <div className='my-5'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentList comments={commentData} />
    </div>
  )
}

export default CommentContainer