// import React, { useEffect, useState, createRef } from 'react'
// import PropTypes from 'prop-types'
// import classNames from 'classnames'
// import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
// import { rgbToHex } from '@coreui/utils'
// import { DocsLink } from 'src/components'

// const Jobs = () => {
//   return (
//     <div>
//       <h1>This is the codeof condemp</h1>
//     </div>
//   )
// }

// export default Jobs
// import React, { useState } from 'react'
// import {
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CButton,
//   CModal,
//   CModalBody,
//   CModalHeader,
//   CModalTitle,
// } from '@coreui/react'

// const Jobs = () => {
//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       companyName: 'ABC Company',
//       role: 'Software Engineer',
//       jobType: 'Full-time',
//       location: 'New York',
//       ctc: '$100,000',
//       details:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ligula luctus, tempus lacus sit amet, ultricies magna.',
//     },
//     {
//       id: 2,
//       companyName: 'XYZ Corporation',
//       role: 'Data Scientist',
//       jobType: 'Remote',
//       location: 'San Francisco',
//       ctc: '$120,000',
//       details:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ligula luctus, tempus lacus sit amet, ultricies magna.',
//     },
//     // Add more job objects as needed
//   ])

//   const [selectedJob, setSelectedJob] = useState(null)
//   const [modalVisible, setModalVisible] = useState(false)

//   const handleViewDetails = (job) => {
//     setSelectedJob(job)
//     setModalVisible(true)
//   }

//   const handleCloseModal = () => {
//     setSelectedJob(null)
//     setModalVisible(false)
//   }

//   const handleEasyApply = (job) => {
//     // Implement logic for easy apply functionality
//     console.log('Easy apply for:', job)
//   }

//   return (
//     <div>
//       <h1>Jobs</h1>
//       {jobs.map((job) => (
//         <CCard key={job.id} className="mb-4">
//           <CCardHeader>
//             <strong>{job.companyName}</strong>
//           </CCardHeader>
//           <CCardBody>
//             <p>
//               <strong>Role:</strong> {job.role}
//             </p>
//             <p>
//               <strong>Job Type:</strong> {job.jobType}
//             </p>
//             <p>
//               <strong>Location:</strong> {job.location}
//             </p>
//             <p>
//               <strong>CTC:</strong> {job.ctc}
//             </p>
//             <CButton color="primary" className="me-2" onClick={() => handleViewDetails(job)}>
//               View Details
//             </CButton>
//             <CButton color="success" onClick={() => handleEasyApply(job)}>
//               Easy Apply
//             </CButton>
//           </CCardBody>
//         </CCard>
//       ))}
//       <CModal visible={modalVisible} onClose={handleCloseModal}>
//         <CModalHeader closeButton>
//           <CModalTitle>Job Details</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           {selectedJob && (
//             <div>
//               <p>
//                 <strong>Company Name:</strong> {selectedJob.companyName}
//               </p>
//               <p>
//                 <strong>Role:</strong> {selectedJob.role}
//               </p>
//               <p>
//                 <strong>Job Type:</strong> {selectedJob.jobType}
//               </p>
//               <p>
//                 <strong>Location:</strong> {selectedJob.location}
//               </p>
//               <p>
//                 <strong>CTC:</strong> {selectedJob.ctc}
//               </p>
//               <p>
//                 <strong>Details:</strong> {selectedJob.details}
//               </p>
//             </div>
//           )}
//         </CModalBody>
//       </CModal>
//     </div>
//   )
// }

// export default Jobs
import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

const Jobs = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      companyName: 'Google',
      companyLogo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s', // Add the URL of the company logo
      role: 'Software Engineer',
      jobType: 'Full-time',
      location: 'Pune,India',
      ctc: '₹ 2000000',
      details: `Note: By applying to this position you will have an opportunity to share your preferred working location from the following: San Bruno, CA, USA; Los Angeles, CA, USA.Minimum qualifications:

      Bachelor’s degree or equivalent practical experience. 
      2 years of experience with software development in one or more programming languages, or 1 year of experience with an advanced degree in an industry setting. 
      2 years of experience with data structures or algorithms in either an academic or industry setting. 
      2 years of experience with full stack development, across back-end such as Java, Python, GO, or C++ codebases, and front-end experience including JavaScript or TypeScript, HTML, CSS or equivalent.`,
    },
    {
      id: 2,
      companyName: 'Amazon',
      companyLogo: 'https://m.media-amazon.com/images/I/51HCHFclmmL.jpg', // Add the URL of the company logo
      role: 'Data Scientist',
      jobType: 'Full-time',
      location: 'Bengalaru,India',
      ctc: '₹ 1800000',
      details: `We are looking for a Machine Learning Engineer Intern to integrate into our high-performing Research Science group. This unique internship is designed for individuals eager to leverage their skills in crafting revolutionary deep learning solutions and refining our machine learning infrastructure. If you are passionate about propelling the technological boundaries in machine learning, crafting groundbreaking algorithms for multi-billion dollar markets, and thriving within a vibrant, forward-thinking atmosphere, your moment has arrived.

      This position will be located in Berkeley, CA with a hybrid work schedule of 3 days in office (Mon/Tue/Wed) and 2 days remote (Thursday/Friday).`,
    },
    // Add more job objects as needed
  ])

  const [selectedJob, setSelectedJob] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    companyLogo: '', // Add companyLogo field
    role: '',
    jobType: '',
    location: '',
    ctc: '',
    details: '',
  })

  const handleViewDetails = (job) => {
    setSelectedJob(job)
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setSelectedJob(null)
    setModalVisible(false)
  }

  const handleEasyApply = (job) => {
    // Implement logic for easy apply functionality
    console.log('Easy apply for:', job)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handlePostJob = () => {
    const newJob = {
      id: jobs.length + 1,
      ...formData,
    }
    setJobs([...jobs, newJob])
    setModalVisible(false)
    setFormData({
      companyName: '',
      companyLogo: '', // Reset companyLogo field
      role: '',
      jobType: '',
      location: '',
      ctc: '',
      details: '',
    })
  }

  return (
    <div>
      <h1>Jobs</h1>
      <CButton color="primary" className="mb-4" onClick={() => setModalVisible(true)}>
        Post a Job
      </CButton>
      {jobs.map((job) => (
        <CCard key={job.id} className="mb-4">
          <CCardHeader>
            <div className="d-flex align-items-center">
              {job.companyLogo && (
                <img
                  src={job.companyLogo}
                  alt="Company Logo"
                  style={{ width: '50px', marginRight: '10px' }}
                />
              )}
              <strong>{job.companyName}</strong>
            </div>
          </CCardHeader>
          <CCardBody>
            <p>
              <strong>Role:</strong> {job.role}
            </p>
            <p>
              <strong>Job Type:</strong> {job.jobType}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>CTC:</strong> {job.ctc}
            </p>
            <CButton color="primary" className="me-2" onClick={() => handleViewDetails(job)}>
              View Details
            </CButton>
            <CButton color="success" onClick={() => handleEasyApply(job)}>
              Easy Apply
            </CButton>
          </CCardBody>
        </CCard>
      ))}
      <CModal visible={modalVisible && !selectedJob} onClose={handleCloseModal}>
        <CModalHeader closeButton>
          <CModalTitle>Post a Job</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <form>
            <div className="mb-3">
              <label className="form-label">Company Name</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Company Logo URL</label> {/* Add Company Logo input */}
              <input
                type="text"
                className="form-control"
                name="companyLogo"
                value={formData.companyLogo}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <input
                type="text"
                className="form-control"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Job Type</label>
              <input
                type="text"
                className="form-control"
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">CTC</label>
              <input
                type="text"
                className="form-control"
                name="ctc"
                value={formData.ctc}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Details</label>
              <textarea
                className="form-control"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <CButton color="primary" onClick={handlePostJob}>
            Post Job
          </CButton>
        </CModalBody>
      </CModal>
      {selectedJob && (
        <CModal visible={modalVisible} onClose={handleCloseModal}>
          <CModalHeader closeButton>
            <CModalTitle>Job Details</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div>
              <p>
                <strong>Company Name:</strong> {selectedJob.companyName}
              </p>
              <p>
                <strong>Role:</strong> {selectedJob.role}
              </p>
              <p>
                <strong>Job Type:</strong> {selectedJob.jobType}
              </p>
              <p>
                <strong>Location:</strong> {selectedJob.location}
              </p>
              <p>
                <strong>CTC:</strong> {selectedJob.ctc}
              </p>
              <p>
                <strong>Details:</strong> {selectedJob.details}
              </p>
            </div>
          </CModalBody>
        </CModal>
      )}
    </div>
  )
}

export default Jobs
