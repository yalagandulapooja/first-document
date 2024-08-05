import React from 'react'
import Student from './Student';

const ListEx1 = () => {
    let students = [
      {
        id:101,
        name:"Pooja",
        address: "Hyderabad"
      },
      {
        id:102,
        name:"Narendar",
        address: "Medchal"
      },
      {
        id:103,
        name:"Harini",
        address: "L.B.Nagar"
      }
    ];
  return (
    <div>
        {students.map((stu) => <Student key={stu.id} stu={stu} />)
        }
    </div>
  );
};

export default ListEx1;