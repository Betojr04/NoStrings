// import React, { useEffect, useRef } from "react";

// export const MyProfile = () => {
//   const toggleProfile = () => {
//     let offcanvasRightOne = document.getElementById("offcanvasRightOne");
//     offcanvasRightOne.classList.toggle("show");
//   };
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   function useOutsideAlerter(ref) {
//     useEffect(() => {
//       /**
//        * Alert if clicked on outside of element
//        */
//       function handleClickOutside(event) {
//         if (ref.current && !ref.current.contains(event.target)) {
//           toggleProfile();
//         }
//       }
//       // Bind the event listener
//       document.addEventListener("mousedown", handleClickOutside);
//       return () => {
//         // Unbind the event listener on clean up
//         document.removeEventListener("mousedown", handleClickOutside);
//       };
//     }, [ref]);
//   }
//   return (
//     <div>
//       <button
//         onClick={() => {
//           toggleProfile();
//         }}
//         class="btn btn-primary"
//         type="button"
//         // data-bs-toggle="offcanvas"
//         // data-bs-target="#offcanvasRightOne"
//         // aria-controls="offcanvasRight"
//       >
//         Toggle right offcanvas
//       </button>

//       <div
//         ref={wrapperRef}
//         class="offcanvas offcanvas-end"
//         tabindex="-1"
//         id="offcanvasRightOne"
//         aria-labelledby="offcanvasRightLabel"
//       >
//         <div class="offcanvas-header">
//           <h5 id="offcanvasRightLabel">Offcanvas right</h5>
//           <button
//             onClick={() => {
//               toggleProfile();
//             }}
//             type="button"
//             class="btn-close text-reset"
//             // data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div class="offcanvas-body">...</div>
//       </div>
//     </div>
//   );
// };
