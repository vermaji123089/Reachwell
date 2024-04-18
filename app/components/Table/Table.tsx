"use client"

import React, { useState } from 'react';
import Datatable from 'usereactable';

const Table = () => {
    
  const columns = [
    {
      headerName: 'First Name',
      field: 'firstName',
    },
    {
      headerName: 'Last Name',
      field: 'lastName',
    },
    {
      headerName: 'Maiden Name',
      field: 'maidenName',
    },
    {
      headerName: 'Image',
      field: 'image',
    },
    {
      headerName: 'Age',
      field: 'age',
      style: {
        color: 'green',
      },
    },
  ];

  // Manually define data
  const [data, setData] = useState([
    {
      firstName: 'John',
      lastName: 'Doe',
      maidenName: 'Doe',
      image: 'image-url',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      maidenName: 'Smith',
      image: 'image-url',
      age: 25,
    },{
        firstName: 'Alice',
        lastName: 'Smith',
        maidenName: 'Johnson',
        image: 'image-url',
        age: 35,
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        maidenName: 'Doe',
        image: 'image-url',
        age: 40,
      },
      {
        firstName: 'Eva',
        lastName: 'Brown',
        maidenName: 'Wilson',
        image: 'image-url',
        age: 28,
      },
      {
        firstName: 'David',
        lastName: 'Miller',
        maidenName: 'Brown',
        image: 'image-url',
        age: 45,
      },
      {
        firstName: 'Sophia',
        lastName: 'Wilson',
        maidenName: 'Garcia',
        image: 'image-url',
        age: 22,
      },
      {
        firstName: 'Liam',
        lastName: 'Anderson',
        maidenName: 'Martinez',
        image: 'image-url',
        age: 33,
      },
      {
        firstName: 'Olivia',
        lastName: 'Thomas',
        maidenName: 'Taylor',
        image: 'image-url',
        age: 29,
      },
      {
        firstName: 'Noah',
        lastName: 'White',
        maidenName: 'Anderson',
        image: 'image-url',
        age: 38,
      },
      {
        firstName: 'Emma',
        lastName: 'Martinez',
        maidenName: 'Moore',
        image: 'image-url',
        age: 27,
      },
      {
        firstName: 'William',
        lastName: 'Taylor',
        maidenName: 'Wilson',
        image: 'image-url',
        age: 31,
      },
      {
        firstName: 'Ava',
        lastName: 'Brown',
        maidenName: 'Davis',
        image: 'image-url',
        age: 36,
      },
      {
        firstName: 'James',
        lastName: 'Garcia',
        maidenName: 'Jones',
        image: 'image-url',
        age: 42,
      },
      {
        firstName: 'Isabella',
        lastName: 'Jones',
        maidenName: 'Hernandez',
        image: 'image-url',
        age: 24,
      },
      {
        firstName: 'Benjamin',
        lastName: 'Moore',
        maidenName: 'Brown',
        image: 'image-url',
        age: 39,
      },
      {
        firstName: 'Mia',
        lastName: 'Thomas',
        maidenName: 'Jackson',
        image: 'image-url',
        age: 26,
      },
      {
        firstName: 'Logan',
        lastName: 'Hernandez',
        maidenName: 'Perez',
        image: 'image-url',
        age: 34,
      },
      {
        firstName: 'Elijah',
        lastName: 'Davis',
        maidenName: 'Evans',
        image: 'image-url',
        age: 37,
      },
      {
        firstName: 'Amelia',
        lastName: 'Miller',
        maidenName: 'Gonzalez',
        image: 'image-url',
        age: 23,
      },
      {
        firstName: 'Oliver',
        lastName: 'Johnson',
        maidenName: 'Hall',
        image: 'image-url',
        age: 41,
      },
      {
        firstName: 'Charlotte',
        lastName: 'Jackson',
        maidenName: 'Moore',
        image: 'image-url',
        age: 30,
      },
      {
        firstName: 'Jacob',
        lastName: 'Thompson',
        maidenName: 'Lee',
        image: 'image-url',
        age: 32,
      },
      {
        firstName: 'Ava',
        lastName: 'Lee',
        maidenName: 'Rodriguez',
        image: 'image-url',
        age: 25,
      },
      {
        firstName: 'Michael',
        lastName: 'Perez',
        maidenName: 'Scott',
        image: 'image-url',
        age: 43,
      },
      {
        firstName: 'Emily',
        lastName: 'Davis',
        maidenName: 'Robinson',
        image: 'image-url',
        age: 28,
      }
    
    // Add more data objects here as needed
  ]);

  return (
    <div>
      <div className='px-6'>
        <Datatable
          rows={data}
          columns={columns}
          title={'CARGO CONTAINER'}
          pagination
        />
      </div>
    </div>
  );
};

export default Table;
