// /* eslint-disable @typescript-eslint/no-explicit-any */

// import DTModal from "../DTModal";
// import { ReactNode } from "react";

// interface ModalProps {
//   buttonText: ReactNode;
//   buttonClassName?: string;
//   buttonTitle?: string;
//   modalData?: any;
//   onDelete: (data: any) => void;
// }

// const DeleteModal = ({
//   buttonText,
//   buttonClassName,
//   buttonTitle,
//   modalData,
//   onDelete,
// }: ModalProps) => {
//   const modalId = `delete-modal-${modalData?._id || Math.random()}`;

// // console.log(modalData);

//   return (
//     <DTModal
//       modalId={modalId}

//       buttonText={buttonText}
//       buttonClassName={buttonClassName}
//       buttonTitle={buttonTitle}
//     >
//         {/* content  */}
//         <div className="space-y-4 text-center">
//   {/* Warning Icon */}
//   <div className="flex justify-center">
//     <div className="bg-red-100 text-red-600 rounded-full p-3">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
//         />
//       </svg>
//     </div>
//   </div>

//   {/* Modal Heading */}
//   <h2 className="text-xl font-semibold text-red-600">Delete Confirmation</h2>

//   {/* Description */}
//   <p className="text-sm text-white">
//     Are you sure you want to delete this item? This action cannot be undone.
//   </p>

// </div>

//       <div className="modal-action">
//         {/* Cancel button */}
//         <label htmlFor={modalId} className="btn btn-sm border bg-white text-black">
//           Cancel
//         </label>

//         {/* Confirm Delete button */}
//         <button
//           className="btn btn-sm bg-red-600 text-white"
//           onClick={() => onDelete(modalData)}
//         >
//           Delete
//         </button>
//       </div>
//     </DTModal>
//   );
// };

// export default DeleteModal;
