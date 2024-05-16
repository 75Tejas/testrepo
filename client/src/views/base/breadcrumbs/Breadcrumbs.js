/* eslint-disable react/jsx-no-undef */
// import React from 'react'
// import {
//   CBreadcrumb,
//   CBreadcrumbItem,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CRow,
//   CLink,
// } from '@coreui/react'
// import { DocsExample } from 'src/components'

// const Breadcrumbs = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Breadcrumbs
// import React from 'react'
// import {
//   CBreadcrumb,
//   CBreadcrumbItem,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CRow,
//   CLink,
// } from '@coreui/react'

// const ForumPage = () => {
//   return <div>hsdh</div>
// }

// export default ForumPage
import React, { useState } from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLink,
} from '@coreui/react'

const ForumPage = () => {
  const [questions, setQuestions] = useState([])
  const [newQuestion, setNewQuestion] = useState('')
  const [replies, setReplies] = useState({})
  const [hiddenReplies, setHiddenReplies] = useState({})

  const [replyText, setReplyText] = useState('')
  const [replyingTo, setReplyingTo] = useState(-1)
  const [replyUserName, setReplyUserName] = useState('')

  const handleQuestionSubmit = (e) => {
    e.preventDefault()
    if (newQuestion.trim() !== '') {
      const newQuestions = [
        ...questions,
        { text: newQuestion, userName: replyUserName || 'Anonymous' },
      ]
      setQuestions(newQuestions)
      setNewQuestion('')
    }
  }

  const handleReply = (questionIndex) => {
    setReplyingTo(questionIndex)
  }

  const handleReplySubmit = () => {
    if (replyText.trim() !== '') {
      const updatedReplies = { ...replies }
      if (updatedReplies[replyingTo]) {
        updatedReplies[replyingTo].push({ text: replyText, userName: replyUserName || 'Anonymous' })
      } else {
        updatedReplies[replyingTo] = [{ text: replyText, userName: replyUserName || 'Anonymous' }]
      }
      setReplies(updatedReplies)
      setReplyText('')
      setReplyingTo(-1)
      setReplyUserName('')
    }
  }

  const handleHideReply = (questionIndex) => {
    setHiddenReplies({ ...hiddenReplies, [questionIndex]: true })
  }

  return (
    <div>
      <CBreadcrumb>
        <CBreadcrumbItem>
          <CLink>Home</CLink>
        </CBreadcrumbItem>
        <CBreadcrumbItem active>Forum</CBreadcrumbItem>
      </CBreadcrumb>
      <CCard>
        <CCardHeader>Forum</CCardHeader>
        <CCardBody>
          <form onSubmit={handleQuestionSubmit}>
            <div className="mb-3">
              <label htmlFor="newQuestion" className="form-label">
                Ask a question:
              </label>
              <input
                type="text"
                className="form-control"
                id="newQuestion"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </div>
            <div className="mb-3" style={{ width: '40%' }}>
              <label htmlFor="questionUserName" className="form-label">
                Your Name (Optional):
              </label>
              <input
                type="text"
                className="form-control"
                id="questionUserName"
                value={replyUserName}
                onChange={(e) => setReplyUserName(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Ask
            </button>
          </form>
          {questions.map((question, index) => (
            <div key={index} className="mt-3">
              <div>
                <strong>{question.userName}: </strong>
                {question.text}
              </div>
              <div className="mt-2">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => handleReply(index)}
                  disabled={hiddenReplies[index]}
                >
                  Reply
                </button>
                <button className="btn btn-danger" onClick={() => handleHideReply(index)}>
                  Hide Reply
                </button>
              </div>
              {!hiddenReplies[index] && (
                <>
                  {replyingTo === index && (
                    <div className="mt-2">
                      <input
                        type="text"
                        className="form-control"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <div className="mt-2" style={{ width: '40%' }}>
                        <label htmlFor="replyUserName" className="form-label">
                          Your Name (Optional):
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="replyUserName"
                          value={replyUserName}
                          onChange={(e) => setReplyUserName(e.target.value)}
                        />
                      </div>
                      <button className="btn btn-primary mt-2" onClick={handleReplySubmit}>
                        Submit Reply
                      </button>
                    </div>
                  )}
                  {replies[index] &&
                    replies[index].map((reply, idx) => (
                      <div key={idx} className="ml-4 mt-2">
                        <strong>{reply.userName}: </strong>
                        {reply.text}
                      </div>
                    ))}
                </>
              )}
            </div>
          ))}
        </CCardBody>
      </CCard>
    </div>
  )
}

export default ForumPage
