// import React, { useState } from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//   const navigate = useNavigate();
//   const [fromData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password,
//   })

//   const handleInputChange = (Event) => {
//     const { name, value } = Event.target
//     setFormData({
//       ...fromData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//      const resonse = await fetch("http://localhost:5000/user/register",){
//         method: "POST",
//         headers: {
//           "content-Type": "application/json",

//         },
//         body:JSON.stringify(fromData)
//       }

//       const result = await Response.json();
//       if (result.user_id){
//         navigate("/Login");

//     } else{
//       console.log("Signup failed")
//     }
//     catch (error) {
//       console.log(error.message)
//     }
//   }

//   const handleSignInClick = () =>{
//     navigate("/Login");
//   }

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm>
//                   <h1>Signup</h1>
//                   <p className="text-body-secondary">Create your account</p>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your first name"
//                       autoComplete="username"
//                       value={fromData.firstName}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your last name"
//                       autoComplete="email"
//                       value={fromData.lastName}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Enter your email address"
//                       autoComplete="new-password"
//                       value={fromData.email}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-4">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Create a password"
//                       autoComplete="new-password"
//                       value={fromData.password}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <div className="d-grid">
//                     <CButton color="success"onClick={handleSubmit} >Signup</CButton>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Signup
////gugu

// import React, { useState } from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//   const [errorMessage, setErrorMessage] = useState()
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '', // Corrected: set password as an empty string
//   })

//   const handleInputChange = (event) => {
//     const { name, value } = event.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await fetch('http://localhost:5000/user/register', {
//         // Corrected: Added missing curly brace after the URL
//         method: 'POST',
//         headers: {
//           'content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // Corrected: Use formData instead of fromData
//       })

//       const result = await response.json() // Corrected: Changed Response to
//       console.log('mks---', result)
//       if (result.userId) {
//         navigate('/login') // Corrected: navigate to lowercase "/login"
//       } else {
//         console.log('Signup failed')
//       }
//     } catch (error) {
//       console.log(error.message)
//       setErrorMessage(error.message)
//     }
//   }

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm>
//                   <h1>Signup</h1>
//                   {/* <p className="text-body-secondary">t</p> */}

//                   <p className="error">{errorMessage}</p>

//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your first name"
//                       autoComplete="username"
//                       name="firstName"
//                       value={formData.firstName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your last name"
//                       autoComplete="email"
//                       name="lastName"
//                       value={formData.lastName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="email"
//                       placeholder="Enter your email address" // Corrected: Changed placeholder
//                       autoComplete="new-password"
//                       name="email"
//                       value={formData.email} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-4">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Create a password"
//                       autoComplete="new-password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <div className="d-grid">
//                     <CButton color="success" onClick={handleSubmit}>
//                       Signup
//                     </CButton>
//                     <p className="mt-3 mb-0">Already have an account?</p>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Signup

// import React, { useState } from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//   const [errorMessage, setErrorMessage] = useState()
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '', // Corrected: set password as an empty string
//   })

//   const handleInputChange = (event) => {
//     const { name, value } = event.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await fetch('http://localhost:5000/user/register', {
//         // Corrected: Added missing curly brace after the URL
//         method: 'POST',
//         headers: {
//           'content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // Corrected: Use formData instead of fromData
//       })

//       const result = await response.json() // Corrected: Changed Response to
//       console.log('mks---', result)
//       if (result._userId) {
//         navigate('/login') // Corrected: navigate to lowercase "/login"
//       } else {
//         console.log('Signup failed')
//       }
//     } catch (error) {
//       console.log(error.message)
//       setErrorMessage(error.message)
//     }
//   }

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm>
//                   <h1>Signup</h1>
//                   {/* <p className="text-body-secondary">t</p> */}

//                   <p className="error">{errorMessage}</p>

//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your first name"
//                       autoComplete="username"
//                       name="firstName"
//                       value={formData.firstName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your last name"
//                       autoComplete="email"
//                       name="lastName"
//                       value={formData.lastName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="email"
//                       placeholder="Enter your email address" // Corrected: Changed placeholder
//                       autoComplete="new-password"
//                       name="email"
//                       value={formData.email} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-4">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Create a password"
//                       autoComplete="new-password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <div className="d-grid">
//                     <CButton color="success" onClick={handleSubmit}>
//                       Signup
//                     </CButton>
//                     <p className="mt-3 mb-0">
//                       Already have an account?{' '}
//                       <span
//                         onClick={() => navigate('/login')}
//                         style={{ cursor: 'pointer', textDecoration: 'underline' }}
//                       >
//                         Login
//                       </span>
//                     </p>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Signup

// import React, { useState } from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
//   CToast,
//   CToastBody,
//   CToaster,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//   const [errorMessage, setErrorMessage] = useState()
//   const [showSuccessToast, setShowSuccessToast] = useState(false)
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '', // Corrected: set password as an empty string
//   })

//   const handleInputChange = (event) => {
//     const { name, value } = event.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await fetch('http://localhost:5000/user/register', {
//         // Corrected: Added missing curly brace after the URL
//         method: 'POST',
//         headers: {
//           'content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // Corrected: Use formData instead of fromData
//       })

//       const result = await response.json() // Corrected: Changed Response to
//       console.log(result)
//       if (result._userId) {
//         setShowSuccessToast(true)
//         setTimeout(() => {
//           setShowSuccessToast(false)
//           navigate('/login') // Corrected: navigate to lowercase "/login"
//         }, 3000)
//       } else {
//         console.log('Signup failed')
//       }
//     } catch (error) {
//       console.log(error.message)
//       setErrorMessage(error.message)
//     }
//   }

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm>
//                   <h1>Signup</h1>
//                   {/* <p className="text-body-secondary">t</p> */}

//                   <p className="error">{errorMessage}</p>

//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your first name"
//                       autoComplete="username"
//                       name="firstName"
//                       value={formData.firstName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your last name"
//                       autoComplete="email"
//                       name="lastName"
//                       value={formData.lastName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="email"
//                       placeholder="Enter your email address" // Corrected: Changed placeholder
//                       autoComplete="new-password"
//                       name="email"
//                       value={formData.email} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-4">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Create a password"
//                       autoComplete="new-password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <div className="d-grid">
//                     <CButton color="success" onClick={handleSubmit}>
//                       Signup
//                     </CButton>
//                     <p className="mt-3 mb-0">
//                       Already have an account?{' '}
//                       <span
//                         onClick={() => navigate('/login')}
//                         style={{ cursor: 'pointer', textDecoration: 'underline' }}
//                       >
//                         Login
//                       </span>
//                     </p>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//       <CToaster position="top-end">
//         <CToast show={showSuccessToast} autohide fade>
//           <CToastBody>Account created successfully! Redirecting to login page...</CToastBody>
//         </CToast>
//       </CToaster>
//     </div>
//   )
// }

// export default Signup

// import React, { useState } from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
//   CToast,
//   CToastBody,
//   CToaster,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//   const [errorMessage, setErrorMessage] = useState()
//   const [showSuccessToast, setShowSuccessToast] = useState(false)
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '', // Corrected: set password as an empty string
//   })

//   const handleInputChange = (event) => {
//     const { name, value } = event.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await fetch('http://localhost:5000/user/register', {
//         // Corrected: Added missing curly brace after the URL
//         method: 'POST',
//         headers: {
//           'content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // Corrected: Use formData instead of fromData
//       })

//       const result = await response.json() // Corrected: Changed Response to
//       console.log(result)
//       if (response.ok) {
//         setShowSuccessToast(true)
//         setTimeout(() => {
//           setShowSuccessToast(false)
//           navigate('/login') // Navigate to another resource after successful signup
//         }, 3000)
//       } else {
//         console.log('Signup failed')
//       }
//     } catch (error) {
//       console.log(error.message)
//       setErrorMessage(error.message)
//     }
//   }

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm>
//                   <h1>Signup</h1>
//                   {/* <p className="text-body-secondary">t</p> */}

//                   <p className="error">{errorMessage}</p>

//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your first name"
//                       autoComplete="username"
//                       name="firstName"
//                       value={formData.firstName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your last name"
//                       autoComplete="email"
//                       name="lastName"
//                       value={formData.lastName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="email"
//                       placeholder="Enter your email address" // Corrected: Changed placeholder
//                       autoComplete="new-password"
//                       name="email"
//                       value={formData.email} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-4">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Create a password"
//                       autoComplete="new-password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <div className="d-grid">
//                     <CButton color="success" onClick={handleSubmit}>
//                       Signup
//                     </CButton>
//                     <p className="mt-3 mb-0">
//                       Already have an account?{' '}
//                       <span
//                         onClick={() => navigate('/login')}
//                         style={{ cursor: 'pointer', textDecoration: 'underline' }}
//                       >
//                         Login
//                       </span>
//                     </p>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//       <CToaster position="top-end">
//         <CToast show={showSuccessToast} autohide fade>
//           <CToastBody>Account created successfully! Redirecting to login page...</CToastBody>
//         </CToast>
//       </CToaster>
//     </div>
//   )
// }

// export default Signup
////////////////
// import React, { useState } from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
//   CToast,
//   CToastBody,
//   CToaster,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//   const [errorMessage, setErrorMessage] = useState()
//   const [showSuccessToast, setShowSuccessToast] = useState(false)
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '', // Corrected: set password as an empty string
//   })

//   const handleInputChange = (event) => {
//     const { name, value } = event.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await fetch('http://localhost:5000/user/register', {
//         // Corrected: Added missing curly brace after the URL
//         method: 'POST',
//         headers: {
//           'content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // Corrected: Use formData instead of fromData
//       })

//       const result = await response.json() // Corrected: Changed Response to
//       console.log(result)
//       if (response.status === 201) {
//         setShowSuccessToast(true)
//         setTimeout(() => {
//           setShowSuccessToast(false)
//           navigate('/login') // Navigate to another resource after successful signup
//         }, 3000)
//       } else if (response.status === 409) {
//         setErrorMessage('User already exists. Please log in.')
//       } else {
//         setErrorMessage('Signup failed. Please try again.')
//       }
//     } catch (error) {
//       console.log(error.message)
//       setErrorMessage('Signup failed. Please try again.')
//     }
//   }

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm>
//                   <h1>Signup</h1>
//                   <p className="error">{errorMessage}</p>

//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your first name"
//                       autoComplete="username"
//                       name="firstName"
//                       value={formData.firstName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your last name"
//                       autoComplete="email"
//                       name="lastName"
//                       value={formData.lastName} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="email"
//                       placeholder="Enter your email address" // Corrected: Changed placeholder
//                       autoComplete="new-password"
//                       name="email"
//                       value={formData.email} // Corrected: Use formData instead of fromData
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-4">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Create a password"
//                       autoComplete="new-password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <div className="d-grid">
//                     <CButton color="success" onClick={handleSubmit}>
//                       Signup
//                     </CButton>
//                     <p className="mt-3 mb-0">
//                       Already have an account?{' '}
//                       <span
//                         onClick={() => navigate('/login')}
//                         style={{ cursor: 'pointer', textDecoration: 'underline' }}
//                       >
//                         Login
//                       </span>
//                     </p>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//       <CToaster position="top-end">
//         <CToast show={showSuccessToast} autohide fade>
//           <CToastBody>Account created successfully! Redirecting to login page...</CToastBody>
//         </CToast>
//       </CToaster>
//     </div>
//   )
// }

// export default Signup
// import React, { useState } from 'react'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
//   CToast,
//   CToastBody,
//   CToaster,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilLockLocked, cilUser } from '@coreui/icons'
// import { useNavigate } from 'react-router-dom'

// const Signup = () => {
//   const [errorMessage, setErrorMessage] = useState('')
//   const [showSuccessToast, setShowSuccessToast] = useState(false)
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '', // Corrected: set password as an empty string
//   })

//   const handleInputChange = (event) => {
//     const { name, value } = event.target
//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await fetch('http://localhost:5000/user/register', {
//         method: 'POST',
//         headers: {
//           'content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       const result = await response.json()

//       if (response.ok) {
//         setShowSuccessToast(true)
//         setTimeout(() => {
//           setShowSuccessToast(false)
//           navigate('/login')
//         }, 3000)
//       } else {
//         setErrorMessage(result.message)
//       }
//     } catch (error) {
//       console.log(error)
//       setErrorMessage('Signup failed. Please try again.')
//     }
//   }

//   return (
//     <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm>
//                   <h1>Signup</h1>
//                   <p className="error">{errorMessage}</p>

//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your first name"
//                       autoComplete="username"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Enter your last name"
//                       autoComplete="email"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="email"
//                       placeholder="Enter your email address"
//                       autoComplete="new-password"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <CInputGroup className="mb-4">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       type="password"
//                       placeholder="Create a password"
//                       autoComplete="new-password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleInputChange}
//                     />
//                   </CInputGroup>
//                   <div className="d-grid">
//                     <CButton color="success" onClick={handleSubmit}>
//                       Signup
//                     </CButton>
//                     <p className="mt-3 mb-0">
//                       Already have an account?{' '}
//                       <span
//                         onClick={() => navigate('/login')}
//                         style={{ cursor: 'pointer', textDecoration: 'underline' }}
//                       >
//                         Login
//                       </span>
//                     </p>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//       <CToaster position="top-end">
//         <CToast show={showSuccessToast} autohide fade>
//           <CToastBody>Account created successfully! Redirecting to login page...</CToastBody>
//         </CToast>
//       </CToaster>
//     </div>
//   )
// }

// export default Signup
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CToast,
  CToastBody,
  CToaster,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '', // Corrected: set password as an empty string
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/user/register', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setShowSuccessToast(true)
        setTimeout(() => {
          setShowSuccessToast(false)
          navigate('/login')
        }, 3000)
      } else {
        let customErrorMessage = ''
        if (result.message.includes('E11000 duplicate key error')) {
          customErrorMessage = 'User already exists signup with different email !'
        } else {
          customErrorMessage = 'Signup failed. Please try again.'
        }
        setErrorMessage(customErrorMessage)
      }
    } catch (error) {
      console.log(error)
      setErrorMessage('Signup failed. Please try again.')
    }
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Signup</h1>
                  <p className="error">{errorMessage}</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Enter your first name"
                      autoComplete="username"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Enter your last name"
                      autoComplete="email"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="email"
                      placeholder="Enter your email address"
                      autoComplete="new-password"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Create a password"
                      autoComplete="new-password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={handleSubmit}>
                      Signup
                    </CButton>
                    <p className="mt-3 mb-0">
                      Already have an account?{' '}
                      <span
                        onClick={() => navigate('/login')}
                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                      >
                        Login
                      </span>
                    </p>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
      <CToaster position="top-end">
        <CToast show={showSuccessToast} autohide fade>
          <CToastBody>Account created successfully! Redirecting to login page...</CToastBody>
        </CToast>
      </CToaster>
    </div>
  )
}

export default Signup
