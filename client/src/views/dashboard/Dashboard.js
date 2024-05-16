// // import React from 'react'
// // import { CModal } from '@coreui/react'

// // const Dashboard = () => {
// //   return (
// //     <div>
// //       <h1>This is the home paje</h1>
// //     </div>
// //   )
// // }

// // export default Dashboard
// import React, { useState } from 'react'
// // import { CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

// const Dashboard = () => {
//   // const [visible, setVisible] = useState(false)

//   return (
//     <div>
//       <h1>This is the home page</h1>
//       {/* <CButton color="primary" onClick={() => setVisible(!visible)}>
//         Latest news
//       </CButton>
//       <CModal
//         scrollable
//         visible={visible}
//         onClose={() => setVisible(false)}
//         aria-labelledby="ScrollingLongContentExampleLabel2"
//       >
//         <CModalHeader>
//           <CModalTitle id="ScrollingLongContentExampleLabel2">
//             Campus Chronicles - Weekly Placement Report
//           </CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           <CButton color="primary">Save changes</CButton>
//         </CModalFooter>
//       </CModal> */}
//     </div>
//   )
// }

// export default Dashboard
// import React from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
// } from '@coreui/react'

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>This is the home page</h1>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
//         <CCol xs>
//           <CCard className="card-sm">
//             {' '}
//             {/* Added card-sm class */}
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard className="card-sm">
//             {' '}
//             {/* Added card-sm class */}
//             <CCardImage orientation="top" src="https://via.placeholder.com/150" />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard className="card-sm">
//             {' '}
//             {/* Added card-sm class */}
//             <CCardImage orientation="top" src="https://via.placeholder.com/150" />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard className="card-sm">
//             {' '}
//             {/* Added card-sm class */}
//             <CCardImage orientation="top" src="https://via.placeholder.com/150" />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//       </CRow>
//     </div>
//   )
// }

// export default Dashboard

/////////////////////
// import React from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
// } from '@coreui/react'

// const Dashboard = () => {
//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   return (
//     <div>
//       <h1>This is the home page</h1>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
//         <CCol xs>
//         <CCard style={{ width: '14rem' }}>
//           <CCard className="card-sm">
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard className="card-sm">
//             <CCardImage orientation="top" src="https://via.placeholder.com/150" />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard className="card-sm">
//             <CCardImage orientation="top" src="https://via.placeholder.com/150" />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard className="card-sm">
//             <CCardImage orientation="top" src="https://via.placeholder.com/150" />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//       </CRow>
//     </div>
//   )
// }

// export default Dashboard
// import React from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
// } from '@coreui/react'

// const Dashboard = () => {
//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   return (
//     <div>
//       <h1>This is the home page</h1>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
//         <CCol xs>
//           <CCard className="card-sm">
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard className="card-sm">
//             <CCardImage orientation="top" src="https://via.placeholder.com/150" />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard className="card-sm">
//             <CCardImage orientation="top" src="https://via.placeholder.com/150" />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard className="card-sm">
//             <CCardImage orientation="top" src="https://via.placeholder.com/150" />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//       </CRow>
//     </div>
//   )
// }

// export default Dashboard
// import React from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
// } from '@coreui/react'

// const Dashboard = () => {
//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   return (
//     <div>
//       {/* <h1>This is the home page</h1> */}
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>

//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Go somewhere
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//       </CRow>
//     </div>
//   )
// }

// export default Dashboard
// import React from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
// } from '@coreui/react'

// const Dashboard = () => {
//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   return (
//     <div>
//       {/* <h1>This is the home page</h1> */}
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Read more
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Read more
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Read more
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Read more
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Read more
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={redirectToPage}>
//                 Read more
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//       </CRow>
//     </div>
//   )
// }

// export default Dashboard
//////dd

// import React, { useState } from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
//   CModal,
//   CModalHeader,
//   CModalBody,
//   CModalFooter,
//   CModalTitle,
// } from '@coreui/react'

// const Dashboard = () => {
//   const [visible, setVisible] = useState(false)

//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   return (
//     <div>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
//         <CCol xs>
//           <CCard style={{ width: '20rem' }}>
//             <CCardImage
//               orientation="top"
//               src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//             />
//             <CCardBody>
//               <CCardTitle>Card title</CCardTitle>
//               <CCardText>
//                 This is a wider card with supporting text below as a natural lead-in to additional
//                 content. This content is a little bit longer.
//               </CCardText>
//             </CCardBody>
//             <CCardFooter>
//               <CButton color="primary" onClick={() => setVisible(true)}>
//                 Read more
//               </CButton>
//               <small className="text-body-secondary">Last updated 3 mins ago</small>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//         {/* Other cards */}
//       </CRow>

//       {/* Modal component */}
//       <CModal
//         scrollable
//         visible={visible}
//         onClose={() => setVisible(false)}
//         aria-labelledby="ScrollingLongContentExampleLabel2"
//       >
//         <CModalHeader>
//           <CModalTitle id="ScrollingLongContentExampleLabel2">Modal title</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
//             lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </p>
//           <p>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
//             scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
//             auctor fringilla.
//           </p>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           {/* <CButton color="primary">Save changes</CButton> */}
//         </CModalFooter>
//       </CModal>
//     </div>
//   )
// }

// export default Dashboard

// import React, { useState } from 'react';
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
//   CModal,
//   CModalHeader,
//   CModalBody,
//   CModalFooter,
//   CModalTitle,
// } from '@coreui/react';

// const Dashboard = () => {
//   const [visible, setVisible] = useState(false);
//   const [selectedCard, setSelectedCard] = useState(null);

//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com'; // Example URL, replace with your actual URL
//   };

//   const openModal = (cardIndex) => {
//     setSelectedCard(cardIndex);
//     setVisible(true);
//   };

//   return (
//     <div>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
//         {[...Array(6)].map((_, index) => (
//           <CCol xs key={index}>
//             <CCard style={{ width: '20rem' }}>
//               <CCardImage
//                 orientation="top"
//                 src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//               />
//               <CCardBody>
//                 <CCardTitle>Card title</CCardTitle>
//                 <CCardText>
//                   This is a wider card with supporting text below as a natural lead-in to additional
//                   content. This content is a little bit longer.
//                 </CCardText>
//               </CCardBody>
//               <CCardFooter>
//                 <CButton color="primary" onClick={() => openModal(index)}>
//                   Read more
//                 </CButton>
//                 <small className="text-body-secondary">Last updated 3 mins ago</small>
//               </CCardFooter>
//             </CCard>
//           </CCol>
//         ))}
//       </CRow>

//       {/* Modal component */}
//       <CModal
//         scrollable
//         visible={visible}
//         onClose={() => setVisible(false)}
//         aria-labelledby="ScrollingLongContentExampleLabel2"
//       >
//         <CModalHeader>
//           <CModalTitle id="ScrollingLongContentExampleLabel2">Modal title</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
//             in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//           </p>
//           {/* You can access the content of the selected card using the selectedCard state */}
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           {/* <CButton color="primary">Save changes</CButton> */}
//         </CModalFooter>
//       </CModal>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
//   CModal,
//   CModalHeader,
//   CModalBody,
//   CModalFooter,
//   CModalTitle,
// } from '@coreui/react'

// const Dashboard = () => {
//   const [visible, setVisible] = useState(false)
//   const [selectedCard, setSelectedCard] = useState(null)

//   const cardContent = [
//     {
//       title: 'Card 1 Title',
//       text: 'This is the content for card 1.',
//     },
//     {
//       title: 'Card 2 Title',
//       text: 'This is the content for card 2.',
//     },
//     {
//       title: 'Card 3 Title',
//       text: 'This is the content for card 3.',
//     },
//     {
//       title: 'Card 4 Title',
//       text: 'This is the content for card 4.',
//     },
//     {
//       title: 'Card 5 Title',
//       text: 'This is the content for card 5.',
//     },
//     {
//       title: 'Card 6 Title',
//       text: 'This is the content for card 6.',
//     },
//   ]

//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   const openModal = (cardIndex) => {
//     setSelectedCard(cardIndex)
//     setVisible(true)
//   }

//   return (
//     <div>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
//         {cardContent.map((card, index) => (
//           <CCol xs key={index}>
//             <CCard style={{ width: '20rem' }}>
//               <CCardImage
//                 orientation="top"
//                 src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//               />
//               <CCardBody>
//                 <CCardTitle>{card.title}</CCardTitle>
//                 <CCardText>{card.text}</CCardText>
//               </CCardBody>
//               <CCardFooter>
//                 <CButton color="primary" onClick={() => openModal(index)}>
//                   Read more
//                 </CButton>
//                 <small className="text-body-secondary">Last updated 3 mins ago</small>
//               </CCardFooter>
//             </CCard>
//           </CCol>
//         ))}
//       </CRow>

//       {/* Modal component */}
//       <CModal
//         scrollable
//         visible={visible}
//         onClose={() => setVisible(false)}
//         aria-labelledby="ScrollingLongContentExampleLabel2"
//       >
//         <CModalHeader>
//           <CModalTitle id="ScrollingLongContentExampleLabel2">
//             {cardContent[selectedCard]?.title}
//           </CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <p>{cardContent[selectedCard]?.text}</p>
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           {/* <CButton color="primary">Save changes</CButton> */}
//         </CModalFooter>
//       </CModal>
//     </div>
//   )
// }

// export default Dashboard
// import React, { useState } from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
//   CModal,
//   CModalHeader,
//   CModalBody,
//   CModalFooter,
//   CModalTitle,
// } from '@coreui/react'

// const Dashboard = () => {
//   const [visible, setVisible] = useState(false)
//   const [selectedCard, setSelectedCard] = useState(null)

//   const cardContent = [
//     {
//       title: 'Card 1 Title',
//       paragraphs: [
//         'Content for card 1 paragraph 1.',
//         `
//         What is Lorem Ipsum?

//         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//         `,

//         // Add more paragraphs as needed
//       ],
//     },
//     {
//       title: 'Card 2 Title',
//       paragraphs: [
//         'Content for card 2 paragraph 1.',
//         'Content for card 2 paragraph 2.',
//         'Content for card 2 paragraph 3.',
//         // Add more paragraphs as needed
//       ],
//     },
//     // Add more cards with separate content as needed
//   ]

//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   const openModal = (cardIndex) => {
//     setSelectedCard(cardIndex)
//     setVisible(true)
//   }

//   return (
//     <div>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
//         {cardContent.map((card, index) => (
//           <CCol xs key={index}>
//             <CCard style={{ width: '20rem' }}>
//               <CCardImage
//                 orientation="top"
//                 src="https://st2.depositphotos.com/2001755/8564/i/450/depositphotos_85647140-stock-photo-beautiful-landscape-with-birds.jpg"
//               />
//               <CCardBody>
//                 <CCardTitle>{card.title}</CCardTitle>
//                 <CCardText>{card.paragraphs[0]}</CCardText>
//               </CCardBody>
//               <CCardFooter>
//                 <CButton color="primary" onClick={() => openModal(index)}>
//                   Read more
//                 </CButton>
//                 <small className="text-body-secondary">Last updated 3 mins ago</small>
//               </CCardFooter>
//             </CCard>
//           </CCol>
//         ))}
//       </CRow>

//       {/* Modal component */}
//       <CModal
//         scrollable
//         visible={visible}
//         onClose={() => setVisible(false)}
//         aria-labelledby="ScrollingLongContentExampleLabel2"
//       >
//         <CModalHeader>
//           <CModalTitle id="ScrollingLongContentExampleLabel2">
//             {cardContent[selectedCard]?.title}
//           </CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           {cardContent[selectedCard]?.paragraphs.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           {/* <CButton color="primary">Save changes</CButton> */}
//         </CModalFooter>
//       </CModal>
//     </div>
//   )
// }

// export default Dashboard
// import React, { useState } from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
//   CModal,
//   CModalHeader,
//   CModalBody,
//   CModalFooter,
//   CModalTitle,
// } from '@coreui/react'

// const Dashboard = () => {
//   const [visible, setVisible] = useState(false)
//   const [selectedCard, setSelectedCard] = useState(null)

//   const cardContent = [
//     {
//       title: 'Card 1 Title',
//       imageSrc: 'https://example.com/image1.jpg',
//       paragraphs: [
//         'Content for card 1 paragraph 1.',
//         `
//           What is Lorem Ipsum?
//           ...
//         `,
//         // Add more paragraphs as needed
//       ],
//     },
//     {
//       title: 'Card 2 Title',
//       imageSrc: 'https://example.com/image2.jpg',
//       paragraphs: [
//         'Content for card 2 paragraph 1.',
//         'Content for card 2 paragraph 2.',
//         'Content for card 2 paragraph 3.',
//         // Add more paragraphs as needed
//       ],
//     },
//     // Add more cards with separate content as needed
//     {
//       title: 'Card 3 Title',
//       imageSrc: 'https://example.com/image3.jpg',
//       paragraphs: [
//         'Content for card 3 paragraph 1.',
//         'Content for card 3 paragraph 2.',
//         'Content for card 3 paragraph 3.',
//         // Add more paragraphs as needed
//       ],
//     },
//     // Add more cards with separate content as needed
//   ]

//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   const openModal = (cardIndex) => {
//     setSelectedCard(cardIndex)
//     setVisible(true)
//   }

//   return (
//     <div>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
//         {cardContent.map((card, index) => (
//           <CCol xs key={index}>
//             <CCard style={{ width: '20rem' }}>
//               <CCardImage orientation="top" src={card.imageSrc} />
//               <CCardBody>
//                 <CCardTitle>{card.title}</CCardTitle>
//                 <CCardText>{card.paragraphs[0]}</CCardText>
//               </CCardBody>
//               <CCardFooter>
//                 <CButton color="primary" onClick={() => openModal(index)}>
//                   Read more
//                 </CButton>
//                 <small className="text-body-secondary">Last updated 3 mins ago</small>
//               </CCardFooter>
//             </CCard>
//           </CCol>
//         ))}
//       </CRow>

//       {/* Modal component */}
//       <CModal
//         scrollable
//         visible={visible}
//         onClose={() => setVisible(false)}
//         aria-labelledby="ScrollingLongContentExampleLabel2"
//       >
//         <CModalHeader>
//           <CModalTitle id="ScrollingLongContentExampleLabel2">
//             {cardContent[selectedCard]?.title}
//           </CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           {cardContent[selectedCard]?.paragraphs.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           {/* <CButton color="primary">Save changes</CButton> */}
//         </CModalFooter>
//       </CModal>
//     </div>
//   )
// }

// export default Dashboard

// import React, { useState } from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
//   CModal,
//   CModalHeader,
//   CModalBody,
//   CModalFooter,
//   CModalTitle,
// } from '@coreui/react'

// const Dashboard = () => {
//   const [visible, setVisible] = useState(false)
//   const [selectedCard, setSelectedCard] = useState(null)

//   const cardContent = [
//     {
//       title: 'DYPIU continues collaborating with industries',
//       imageSrc: 'https://www.dypiu.ac.in/images/events/Post_3.jpeg',
//       paragraphs: [
//         '',
//         `
//         DYPIU continues collaborating with industries to promote and facilitate emerging technologies and creating industry ready professionals. After teaming up with TATA Motors, DYPIU collaborates with Anand Automotive Limited. This significant agreement marks the inauguration of a trailblazing B.Tech Mechanical Engineering program, thoughtfully designed to integrate a unique Smart Manufacturing track.
//         `,
//         // Add more paragraphs as needed
//       ],
//     },
//     {
//       title: 'Our student Virenn Vaatts Jay got recognised',
//       imageSrc: 'https://www.dypiu.ac.in/images/events/Post_4.jpeg',
//       paragraphs: [
//         '',
//         `
// DYPIU is delighted to share that our student Virenn Vaatts Jay got recognised under 'NextGen Innovators Under 21' at the esteemed NASSCOM Future Forge 2023 flagship summit. Positioned among the top four national honorees, Virenn's pioneering contributions have garnered recognition within the echelons of technology luminaries.

//         `,
//         // Add more paragraphs as needed
//       ],
//     },
//     {
//       title: 'Episode 15 of the weekly news bulletin',
//       imageSrc: 'https://www.dypiu.ac.in/images/awards/episode15-of-the-weekly-news-bulletin.jpg',
//       paragraphs: [
//         '',
//         'Content for card 3 paragraph 2.',
//         'Content for card 3 paragraph 3.',
//         // Add more paragraphs as needed
//       ],
//     },
//     {
//       title: ' Episode 13 of the weekly news bulletin ',
//       imageSrc: 'https://www.dypiu.ac.in/images/awards/episode13-of-the-weekly-news-bulletin.jpg',
//       paragraphs: [
//         'Content for card 4 paragraph 1.',
//         'Content for card 4 paragraph 2.',
//         'Content for card 4 paragraph 3.',
//         // Add more paragraphs as needed
//       ],
//     },
//     {
//       title: 'National Conference on Current Trends in Food and Bioprocessing',
//       imageSrc: 'https://www.dypiu.ac.in/images/events/image_123650291.jpg',
//       paragraphs: [
//         'Content for card 5 paragraph 1.',
//         'Content for card 5 paragraph 2.',
//         'Content for card 5 paragraph 3.',
//         // Add more paragraphs as needed
//       ],
//     },
//     {
//       title: 'Episode 14 of the weekly news bulletin from ',
//       imageSrc: 'https://www.dypiu.ac.in/images/awards/episode14-of-the-weekly-news-bulletin.jpg',
//       paragraphs: [
//         'Content for card 6 paragraph 1.',
//         'Content for card 6 paragraph 2.',
//         'Content for card 6 paragraph 3.',
//         // Add more paragraphs as needed
//       ],
//     },
//     // Add more cards with separate content as needed
//   ]

//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   const openModal = (cardIndex) => {
//     setSelectedCard(cardIndex)
//     setVisible(true)
//   }

//   return (
//     <div>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
//         {cardContent.map((card, index) => (
//           <CCol xs key={index}>
//             <CCard style={{ width: '20rem' }}>
//               <CCardImage orientation="top" src={card.imageSrc} />
//               <CCardBody>
//                 <CCardTitle>{card.title}</CCardTitle>
//                 <CCardText>{card.paragraphs[0]}</CCardText>
//               </CCardBody>
//               <CCardFooter>
//                 <CButton color="primary" onClick={() => openModal(index)}>
//                   Read more
//                 </CButton>
//                 <small className="text-body-secondary"> Monday, 04 December 2023 </small>
//               </CCardFooter>
//             </CCard>
//           </CCol>
//         ))}
//       </CRow>

//       {/* Modal component */}
//       <CModal
//         scrollable
//         visible={visible}
//         onClose={() => setVisible(false)}
//         aria-labelledby="ScrollingLongContentExampleLabel2"
//       >
//         <CModalHeader>
//           <CModalTitle id="ScrollingLongContentExampleLabel2">
//             {cardContent[selectedCard]?.title}
//           </CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           {cardContent[selectedCard]?.paragraphs.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//           {/* <CButton color="primary">Save changes</CButton> */}
//         </CModalFooter>
//       </CModal>
//     </div>
//   )
// }

// export default Dashboard

// import React, { useState } from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardImage,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
//   CModal,
//   CModalHeader,
//   CModalBody,
//   CModalFooter,
//   CModalTitle,
// } from '@coreui/react'

// const Dashboard = () => {
//   const [visible, setVisible] = useState(false)
//   const [selectedCard, setSelectedCard] = useState(null)

//   const cardContent = [
//     {
//       title: 'DYPIU continues collaborating with industries',
//       imageSrc: 'https://www.dypiu.ac.in/images/events/Post_3.jpeg',
//       paragraphs: [
//         '',
//         `
//         DYPIU continues collaborating with industries to promote and facilitate emerging technologies and creating industry ready professionals. After teaming up with TATA Motors, DYPIU collaborates with Anand Automotive Limited. This significant agreement marks the inauguration of a trailblazing B.Tech Mechanical Engineering program, thoughtfully designed to integrate a unique Smart Manufacturing track.
//         `,
//       ],
//       date: ' Friday, 04 April 2024',
//     },
//     {
//       title: 'Our student Virenn Vaatts Jay got recognised',
//       imageSrc: 'https://www.dypiu.ac.in/images/events/Post_4.jpeg',
//       paragraphs: [
//         '',
//         `
//         DYPIU is delighted to share that our student Virenn Vaatts Jay got recognised under 'NextGen Innovators Under 21' at the esteemed NASSCOM Future Forge 2023 flagship summit. Positioned among the top four national honorees, Virenn's pioneering contributions have garnered recognition within the echelons of technology luminaries.
//         `,
//       ],
//       date: ' Tuesday, 05 August 2023',
//     },
//     {
//       title: 'Episode 15 of the weekly news bulletin',
//       imageSrc: 'https://www.dypiu.ac.in/images/awards/episode15-of-the-weekly-news-bulletin.jpg',
//       paragraphs: ['', 'Content for card 3 paragraph 2.', 'Content for card 3 paragraph 3.'],
//       date: ' Wednesday, 06 May 2023',
//     },
//     {
//       title: 'Episode 13 of the weekly news bulletin',
//       imageSrc: 'https://www.dypiu.ac.in/images/awards/episode13-of-the-weekly-news-bulletin.jpg',
//       paragraphs: [
//         'Content for card 4 paragraph 1.',
//         'Content for card 4 paragraph 2.',
//         'Content for card 4 paragraph 3.',
//       ],
//       date: ' Thursday, 07 November 2023',
//     },
//     {
//       title: 'National Conference on Current Trends in Food and Bioprocessing',
//       imageSrc: 'https://www.dypiu.ac.in/images/events/image_123650291.jpg',
//       paragraphs: [
//         'Content for card 5 paragraph 1.',
//         'Content for card 5 paragraph 2.',
//         'Content for card 5 paragraph 3.',
//       ],
//       date: ' Friday, 08 october 2023',
//     },
//     {
//       title: 'Episode 14 of the weekly news bulletin',
//       imageSrc: 'https://www.dypiu.ac.in/images/awards/episode14-of-the-weekly-news-bulletin.jpg',
//       paragraphs: [
//         'Content for card 6 paragraph 1.',
//         'Content for card 6 paragraph 2.',
//         'Content for card 6 paragraph 3.',
//       ],
//       date: ' Saturday, 09 July 2023',
//     },
//   ]

//   const redirectToPage = () => {
//     // Add logic to redirect to another page here
//     window.location.href = 'https://example.com' // Example URL, replace with your actual URL
//   }

//   const openModal = (cardIndex) => {
//     setSelectedCard(cardIndex)
//     setVisible(true)
//   }

//   return (
//     <div>
//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
//         {cardContent.map((card, index) => (
//           <CCol xs key={index}>
//             <CCard style={{ width: '20rem' }}>
//               <CCardImage orientation="top" src={card.imageSrc} />
//               <CCardBody>
//                 <CCardTitle>{card.title}</CCardTitle>
//                 <CCardText>{card.paragraphs[0]}</CCardText>
//               </CCardBody>
//               <CCardFooter>
//                 <CButton color="primary" onClick={() => openModal(index)}>
//                   Read more
//                 </CButton>
//                 <small className="text-body-secondary">{card.date}</small>
//               </CCardFooter>
//             </CCard>
//           </CCol>
//         ))}
//       </CRow>

//       {/* Modal component */}
//       <CModal
//         scrollable
//         visible={visible}
//         onClose={() => setVisible(false)}
//         aria-labelledby="ScrollingLongContentExampleLabel2"
//       >
//         <CModalHeader>
//           <CModalTitle id="ScrollingLongContentExampleLabel2">
//             {cardContent[selectedCard]?.title}
//           </CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           {cardContent[selectedCard]?.paragraphs.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </div>
//   )
// }

// export default Dashboard

// import React, { useState } from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardText,
//   CCardTitle,
//   CRow,
//   CCol,
//   CButton,
//   CModal,
//   CModalHeader,
//   CModalBody,
//   CModalFooter,
//   CModalTitle,
// } from '@coreui/react'

// const Dashboard = () => {
//   const [visible, setVisible] = useState(false)
//   const [selectedCard, setSelectedCard] = useState(null)
//   const [newsTitle, setNewsTitle] = useState('')
//   const [newsParagraphs, setNewsParagraphs] = useState('')
//   const [newsImage, setNewsImage] = useState(null)
//   const [cardContent, setCardContent] = useState([])

//   const openModal = (cardIndex) => {
//     setSelectedCard(cardIndex)
//     setVisible(true)
//   }

//   const handleSubmit = () => {
//     const newCard = {
//       title: newsTitle,
//       paragraphs: newsParagraphs.split('\n'),
//       date: new Date().toDateString(), // Current date
//       imageSrc: newsImage,
//     }
//     setCardContent([...cardContent, newCard])
//     setNewsTitle('')
//     setNewsParagraphs('')
//     setNewsImage(null)
//   }

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     const reader = new FileReader()
//     reader.onload = (e) => {
//       setNewsImage(e.target.result)
//     }
//     reader.readAsDataURL(file)
//   }

//   return (
//     <div>
//       <div className="mb-3">
//         <input type="file" accept="image/*" className="form-control" onChange={handleImageChange} />
//       </div>
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter news title"
//           value={newsTitle}
//           onChange={(e) => setNewsTitle(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <textarea
//           className="form-control"
//           rows="4"
//           placeholder="Enter news paragraphs"
//           value={newsParagraphs}
//           onChange={(e) => setNewsParagraphs(e.target.value)}
//         ></textarea>
//       </div>
//       <div className="mb-3">
//         <CButton color="primary" onClick={handleSubmit}>
//           Post News
//         </CButton>
//       </div>

//       <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
//         {cardContent.map((card, index) => (
//           <CCol xs key={index}>
//             <CCard style={{ width: '20rem' }}>
//               {card.imageSrc && <img src={card.imageSrc} className="card-img-top" alt="News" />}
//               <CCardBody>
//                 <CCardTitle>{card.title}</CCardTitle>
//                 <CCardText>{card.paragraphs[0]}</CCardText>
//               </CCardBody>
//               <CCardFooter>
//                 <CButton color="primary" onClick={() => openModal(index)}>
//                   Read more
//                 </CButton>
//                 <small className="text-body-secondary">{card.date}</small>
//               </CCardFooter>
//             </CCard>
//           </CCol>
//         ))}
//       </CRow>

//       {/* Modal component */}
//       <CModal
//         scrollable
//         visible={visible}
//         onClose={() => setVisible(false)}
//         aria-labelledby="ScrollingLongContentExampleLabel2"
//       >
//         <CModalHeader>
//           <CModalTitle id="ScrollingLongContentExampleLabel2">
//             {cardContent[selectedCard]?.title}
//           </CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           {cardContent[selectedCard]?.paragraphs.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </CModalBody>
//         <CModalFooter>
//           <CButton color="secondary" onClick={() => setVisible(false)}>
//             Close
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </div>
//   )
// }

// export default Dashboard

import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardText,
  CCardTitle,
  CRow,
  CCol,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
} from '@coreui/react'

const Dashboard = () => {
  const [visible, setVisible] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [newsTitle, setNewsTitle] = useState('')
  const [newsParagraphs, setNewsParagraphs] = useState('')
  const [newsImage, setNewsImage] = useState(null)
  const [cardContent, setCardContent] = useState([])

  const openModal = (cardIndex) => {
    setSelectedCard(cardIndex)
    setVisible(true)
  }

  const toggleParagraphs = (cardIndex) => {
    const updatedCardContent = [...cardContent]
    updatedCardContent[cardIndex].expanded = !updatedCardContent[cardIndex].expanded
    setCardContent(updatedCardContent)
  }

  const handleSubmit = () => {
    const newCard = {
      title: newsTitle,
      paragraphs: newsParagraphs.split('\n'),
      date: new Date().toDateString(), // Current date
      imageSrc: newsImage,
      expanded: false, // Initially set to false
    }
    setCardContent([...cardContent, newCard])
    setNewsTitle('')
    setNewsParagraphs('')
    setNewsImage(null)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      setNewsImage(e.target.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div>
      <div className="mb-3">
        <input type="file" accept="image/*" className="form-control" onChange={handleImageChange} />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter news title"
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="4"
          placeholder="Enter news paragraphs"
          value={newsParagraphs}
          onChange={(e) => setNewsParagraphs(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <CButton color="primary" onClick={handleSubmit}>
          Post News
        </CButton>
      </div>

      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }} gutterX={5} gutterY={5}>
        {cardContent.map((card, index) => (
          <CCol xs key={index}>
            <CCard style={{ width: '20rem' }}>
              {card.imageSrc && <img src={card.imageSrc} className="card-img-top" alt="News" />}
              <CCardBody>
                <CCardTitle>{card.title}</CCardTitle>
                <CCardText style={{ display: card.expanded ? 'block' : 'none' }}>
                  {card.paragraphs.join('\n')}
                </CCardText>
              </CCardBody>
              <CCardFooter>
                <CButton color="primary" onClick={() => openModal(index)}>
                  Read more
                </CButton>
                <small className="text-body-secondary">{card.date}</small>
                {/* <CButton
                  color="link"
                  className="text-decoration-none"
                  onClick={() => toggleParagraphs(index)}
                >
                  {card.expanded ? 'Show less' : 'Read more'}
                </CButton> */}
              </CCardFooter>
            </CCard>
          </CCol>
        ))}
      </CRow>

      {/* Modal component */}
      <CModal
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="ScrollingLongContentExampleLabel2"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel2">
            {cardContent[selectedCard]?.title}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {cardContent[selectedCard]?.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Dashboard
