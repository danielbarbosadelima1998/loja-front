// import React, { useEffect, useState, memo } from "react";
import React from 'react'
// import {
//   Pagination as Paginate,
//   PaginationItem,
//   PaginationLink,
//   Input,
//   Label,
// } from "reactstrap";
const Pagination = (props) => {
  return <></>
}
//   const {
//     options = [1, 2, 5, 10, 20, 50, 100, 200, 1000],
//     count,
//     fetch,
//     // currentPage,
//     perPage = 10,
//   } = props;

//   const [limit, setLimit] = useState(10);
//   const [offset, setOffset] = useState(0);
//   const [count1, setCount1] = useState(0);

//   useEffect(() => {
//     // const count = Number(response.count);
//     // const perPage = Number(query.limit || count);
//     // const currentPage = Number(offset / perPage || 0);

//     const goToPage = async () => await fetch({ limit, offset });
//     if (count1) {
//       console.log('count -> ', count)
//       console.log('count -> ', offset)
//       goToPage();
//     }
//     setCount1(1);
//     return () => setCount1(0);
//   }, [limit, offset, fetch]);

//   const handleGoToPage = (page) => {
//     if (page < 1) return;
//     setOffset(page - 1);
//   };

//   return (
//     <Paginate size="sm d-flex justify-content-center">
//       Mostrando {count / offset} á {count / offset + perPage} de {count}{" "}
//       resultados
//       <div className="m-auto d-flex">
//         <PaginationItem onClick={() => handleGoToPage(1)}>
//           <PaginationLink first href="#" />
//         </PaginationItem>
//         <PaginationItem onClick={() => handleGoToPage(offset)}>
//           <PaginationLink previous href="#" />
//         </PaginationItem>
//         {(count / offset) <= 3 || (offset <= 2 && false) ? (
//           <PaginationItem>
//             <PaginationLink href="#">{offset + 1}</PaginationLink>
//           </PaginationItem>
//         ) : (
//           <>
//             <PaginationItem>
//               <PaginationLink onClick={() => handleGoToPage(offset)} href="#">
//                 {offset}
//               </PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink
//                 onClick={() => handleGoToPage(offset + 1)}
//                 href="#"
//               >
//                 {offset + 1}
//               </PaginationLink>
//             </PaginationItem>
//             <PaginationItem>
//               <PaginationLink
//                 onClick={() => handleGoToPage(offset + 2)}
//                 href="#"
//               >
//                 {offset + 2}
//               </PaginationLink>
//             </PaginationItem>
//           </>
//         )}
//         <PaginationItem onClick={() => handleGoToPage(offset + 2)}>
//           <PaginationLink next href="#" />
//         </PaginationItem>
//         <PaginationItem onClick={() => handleGoToPage(count / offset)}>
//           <PaginationLink last href="#" />
//         </PaginationItem>
//       </div>
//       <div style={{ display: "flex" }}>
//         <Label for="byPage" className="m-auto">
//           Quantidade por página
//         </Label>
//         <Input
//           id="byPage"
//           type="select"
//           bsSize="sm"
//           onChange={(e) => {
//             setLimit(e.target.value);
//             setOffset(0);
//           }}
//           value={limit}
//           style={{ width: "70px" }}
//         >
//           {options.map((i, index) => (
//             <option key={index}>{i}</option>
//           ))}
//         </Input>
//       </div>
//     </Paginate>
//   );
// };

export default Pagination;
