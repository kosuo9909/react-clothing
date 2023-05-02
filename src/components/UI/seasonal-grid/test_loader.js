// import useHttp from '../../hooks/use-http';
// import { useState } from 'react';

// const loader = () => {
//   const [path, setPath] = useState('');
//   const [items, setItems] = useState();
//   const whatToDoWithTheData = (receivedData) => {
//     let itemsList = [];

//     for (const itemKey in receivedData) {
//       itemsList.push({
//         description: receivedData[itemKey].description,
//         image: receivedData[itemKey].image,
//         name: receivedData[itemKey].name,
//         old_price: receivedData[itemKey].old_price,
//         on_sale: receivedData[itemKey].old_price,
//         price: receivedData[itemKey].price,
//         season: receivedData[itemKey].season,
//         id: receivedData[itemKey].id,
//       });
//     }
//     setItems(itemsList);
//   };

//   const returnedFromCustomHook = useHttp();
//   const { isLoading, error, sendRequest: fetchItems } = returnedFromCustomHook;
// };
// // if (isLoading) {
// //   return <p>Loading...</p>;
// // }

// // if (isLoading === undefined) {
// //   return <h1> WTF </h1>;
// // }
