const Blog = () => {
  return (
    <div className="space-y-8 ">
      <h1 className="text-xl md:text-5xl text-primary-content font-bold text-center">
        Frequently Asked MERN Stack <br /> Questions And Answers
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 mx-auto">
        <div className="card p-3 text-primary-content">
            <h1 className="text-xl md:text-4xl">What is MERN Stack?</h1>
            <p className="text-xs md:text-2xl"><span className="underline decoration-wavy decoration-blue-600">Answer:</span> The MERN Stack is a popular web development stack that consists of four key technologies: MongoDB, Express.js, React, and Node.js. It is a full-stack JavaScript framework that allows developers to build modern, scalable, and dynamic web applications.</p>
        </div>
        <div className="card p-3 text-primary-content">
            <h1 className="text-xl md:text-4xl">What is MongoDB?</h1>
            <p className="text-xs md:text-2xl"><span className="underline decoration-wavy decoration-blue-600">Answer:</span> MongoDB is a NoSQL database. It is a document-oriented database, which means it stores data in JSON-like documents with dynamic schemas, making it highly flexible for handling various types of data. MongoDB is particularly well-suited for scalable applications and provides powerful querying capabilities.</p>
        </div>
        <div className="card p-3 text-primary-content">
            <h1 className="text-xl md:text-4xl">What is Express.js?</h1>
            <p className="text-xs md:text-2xl"><span className="underline decoration-wavy decoration-blue-600">Answer:</span> Express.js is a web application framework for Node.js, serving as the backend component of the MERN stack. It provides a set of features and tools for building robust and scalable web applications and APIs. Express.js simplifies the process of defining routes, handling HTTP requests, and managing middleware.</p>
        </div>
        <div className="card p-3 text-primary-content">
            <h1 className="text-xl md:text-4xl">What is React?</h1>
            <p className="text-xs md:text-2xl"><span className="underline decoration-wavy decoration-blue-600">Answer:</span> React is a popular JavaScript library for building user interfaces, and it serves as the frontend component of the MERN stack. React allows developers to create reusable UI components and manage the state of an application efficiently. It uses a virtual DOM to improve performance and enables developers to build dynamic, interactive, and fast user interfaces.</p>
        </div>
        <div className="card p-3 text-primary-content">
            <h1 className="text-xl md:text-4xl">What is Node.js?</h1>
            <p className="text-xs md:text-2xl"><span className="underline decoration-wavy decoration-blue-600">Answer:</span> Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of the web browser, making it ideal for server-side development. It is the foundation of the MERN stack and enables developers to build scalable and high-performance server applications. Node.js uses an event-driven, non-blocking I/O model, which makes it efficient for handling concurrent connections.</p>
        </div>
        <div className="card p-3 text-primary-content">
            <h1 className="text-xl md:text-4xl">What are the advantages of using the MERN Stack?</h1>
            <p className="text-xs md:text-2xl"><span className="underline decoration-wavy decoration-blue-600">Answer:</span> The MERN stack iss combination of JavaScript, React, Node.js, and MongoDB provides a unified and efficient development experience, code reusability, real-time capabilities, and scalability, making it an excellent choice for building modern, dynamic, and high-performance web applications.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
