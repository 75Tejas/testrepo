// import React from 'react'
// import { CAlertHeading } from '@coreui/react'
// import { CButton, CCard, CCardBody, CCardHeader, CCol, CBadge, CRow } from '@coreui/react'
// import { DocsExample } from 'src/components'

// const Badges = () => {
//   return (
//     <div></div>

//   )
// }

// export default Badges

///STUDENT//

// import React, { useState } from 'react'
// import { CButton, CAlert } from '@coreui/react'

// const Badges = () => {
//   const [visible, setVisible] = useState(false)

//   return (
//     <div>
//       <h3>Latest Notifications</h3>
//       <CButton color="primary" onClick={() => setVisible(true)}>
//         Show alert
//       </CButton>
//       {visible && (
//         <CAlert color="success" onClose={() => setVisible(false)}>
//           <div className="d-flex justify-content-between align-items-center">
//             <h4 className="alert-heading">Congratulations! Your Resume Has Been Shortlisted</h4>
//             <button type="button" className="btn-close" onClick={() => setVisible(false)}></button>
//           </div>
//           <p>
//             Dear Mr. Chetan Kumar,<br></br> We are delighted to inform you that your resume has been
//             shortlisted for further consideration for the position [mention the position, if
//             applicable] at [company name]. Congratulations on this achievement! Your qualifications
//             and experience have caught our attention, and we believe that you could be a valuable
//             addition to our team. We will provide you with further updates shortly. In the meantime,
//             if you have any questions or require additional information, please feel free to reach
//             out to us.
//           </p>
//           <hr />
//           <p className="mb-0">
//             Once again, congratulations on being shortlisted, and we look forward to potentially
//             working with you.{' '}
//           </p>
//         </CAlert>
//       )}
//     </div>
//   )
// }

// export default Badges

/////ADMIN//

import React, { useState } from 'react'
import { CButton, CAlert } from '@coreui/react'

const Notifications = () => {
  const [notifications, setNotifications] = useState([])
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const addNotification = () => {
    if (title.trim() !== '' && message.trim() !== '') {
      setNotifications([...notifications, { title, message }])
      setTitle('')
      setMessage('')
    }
  }

  return (
    <div>
      <h3>Write the Notifications</h3>
      {notifications.map((notification, index) => (
        <CAlert key={index} color="success">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="alert-heading">{notification.title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                const updatedNotifications = [...notifications]
                updatedNotifications.splice(index, 1)
                setNotifications(updatedNotifications)
              }}
            ></button>
          </div>
          <p>{notification.message}</p>
        </CAlert>
      ))}
      <div className="mt-3">
        <input
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <CButton color="primary" onClick={addNotification}>
          Send notification
        </CButton>
      </div>
    </div>
  )
}

export default Notifications
