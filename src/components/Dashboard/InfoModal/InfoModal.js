// import React, { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';

// const InfoModal = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <div>
//             <Button variant="primary" onClick={handleShow}>
//                 See More
//       </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                   <p>We are here</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//           </Button>
//                     <Button variant="primary" onClick={handleClose}>
//                         Save Changes
//           </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// };

// export default InfoModal;