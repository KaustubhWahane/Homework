import React from 'react';

// To not create a mess I am simply using a variable in arrow function
const MyComponent = () => {
  const dataArray = [
    { id: 1, name: 'Kaustubh Wahane', age: 21 },
    { id: 2, name: 'Saurabh Gupta', age: 35 },
    { id: 3, name: 'Devang Khandagle', age: 20 },
    { id: 3, name: 'Devesh Sharma', age: 19 },
    { id: 3, name: 'Rohit Sawant', age: 22 },
    { id: 3, name: 'Sakshi Singh', age: 21 },
  ];

  return (
    <div>
        <h1>The names written are of my Friends</h1>
      {/* I am using map function in ul and li tag to make things in order */}
      <ul>
        {dataArray.map(item => (
            // As every object needs a key according to React18  Rules
          <li key={item.id}>
            {item.name} - Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
