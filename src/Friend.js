import React from "react";

// export const Friends = (props) => {
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <h2>{props.age}</h2>
//       <p>{props.desc}</p>
//     </>
//   );
// };

export const Friends = ({ name, age, desc }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{desc}</p>
    </>
  );
};
