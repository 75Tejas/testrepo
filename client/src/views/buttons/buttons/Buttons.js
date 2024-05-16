/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
// import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilBell } from '@coreui/icons'
// import { DocsExample } from 'src/components'

// const Buttons = () => {
//   return (
//     <div>
//       <p>This sample text ?</p>
//     </div>
//   )
// }

// export default Buttons

import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'

const ResumeSection = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const [profilePicture, setProfilePicture] = useState(null)
  const [name, setName] = useState('Your Name')
  const [summary, setSummary] = useState('Your summary goes here...')

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    // Check if file is an image
    if (file.type && file.type.startsWith('image')) {
      const reader = new FileReader()
      reader.onload = () => {
        setProfilePicture(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      alert('Please select a valid image file.')
    }
  }

  const downloadResume = () => {
    // Implement download functionality
    alert('Download functionality will be implemented here.')
  }

  return (
    <div>
      <CRow>
        <CCol sm="4">
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: '#ccc',
                margin: 'auto',
                marginBottom: '10px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <label htmlFor="upload-profile-pic">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="student"
                    style={{ width: '100%', height: 'auto' }}
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/150"
                    alt="student"
                    style={{ width: '100%', height: 'auto' }}
                  />
                )}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                id="upload-profile-pic"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                <CButton color="primary" onClick={toggleEditMode}>
                  {editMode ? 'Save' : 'Edit'}
                </CButton>
              </div>
            </div>
          </div>
        </CCol>
        <CCol sm="8">
          <CCard>
            <CCardHeader>
              <h5>{name}'s Details</h5>
            </CCardHeader>
            <CCardBody>
              {editMode ? (
                <div>
                  {/* Form for editing student details */}
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Summary</label>
                    <textarea
                      className="form-control"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  {/* Display student details */}
                  <p>{summary}</p>
                </div>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default ResumeSection
// import React, { useState } from 'react'
// import { CButton, CCard, CCardBody, CRow, CCol } from '@coreui/react'

// const FileUploadDownload = () => {
//   const [uploadedFile, setUploadedFile] = useState(null)

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0]
//     setUploadedFile(file)
//   }

//   const handleFileDownload = () => {
//     if (uploadedFile) {
//       const url = URL.createObjectURL(uploadedFile)
//       const a = document.createElement('a')
//       a.style.display = 'none'
//       a.href = url
//       a.download = uploadedFile.name
//       document.body.appendChild(a)
//       a.click()
//       document.body.removeChild(a)
//       URL.revokeObjectURL(url)
//     } else {
//       alert('No file uploaded to download.')
//     }
//   }

//   return (
//     <div>
//       <div className="mb-3">
//         <input type="file" className="form-control" onChange={handleFileUpload} />
//       </div>

//       <div className="mb-3">
//         <CButton color="info" onClick={handleFileDownload}>
//           Download Uploaded File
//         </CButton>
//       </div>
//     </div>
//   )
// }

// export default FileUploadDownload
