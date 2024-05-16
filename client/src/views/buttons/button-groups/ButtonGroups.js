/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
// import {
//   CButton,
//   CDropdown,
//   CDropdownDivider,
//   CDropdownItem,
//   CDropdownMenu,
//   CDropdownToggle,
//   CButtonGroup,
//   CButtonToolbar,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CFormCheck,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from '@coreui/react'
// import { DocsExample } from 'src/components'
// import { CAccordionHeader } from '@coreui/react'

// const ButtonGroups = () => {
//   return (
//     <div></div>

//     <CAccordion alwaysOpen activeItemKey={2}>
//   <CAccordionItem itemKey={1}>
//     <CAccordionHeader>Accordion Item #1</CAccordionHeader>
//     <CAccordionBody>
//       <strong>This is the first item's accordion body.</strong> It is hidden by default, until the
//       collapse plugin adds the appropriate classes that we use to style each element. These classes
//       control the overall appearance, as well as the showing and hiding via CSS transitions. You can
//       modify any of this with custom CSS or overriding our default variables. It's also worth noting
//       that just about any HTML can go within the <code>.accordion-body</code>, though the transition
//       does limit overflow.
//     </CAccordionBody>
//   </CAccordionItem>
//   <CAccordionItem itemKey={2}>
//     <CAccordionHeader>Accordion Item #2</CAccordionHeader>
//     <CAccordionBody>
//       <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
//       collapse plugin adds the appropriate classes that we use to style each element. These classes
//       control the overall appearance, as well as the showing and hiding via CSS transitions. You can
//       modify any of this with custom CSS or overriding our default variables. It's also worth noting
//       that just about any HTML can go within the <code>.accordion-body</code>, though the transition
//       does limit overflow.
//     </CAccordionBody>
//   </CAccordionItem>
//   <CAccordionItem itemKey={3}>
//     <CAccordionHeader>Accordion Item #3</CAccordionHeader>
//     <CAccordionBody>
//       <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
//       collapse plugin adds the appropriate classes that we use to style each element. These classes
//       control the overall appearance, as well as the showing and hiding via CSS transitions. You can
//       modify any of this with custom CSS or overriding our default variables. It's also worth noting
//       that just about any HTML can go within the <code>.accordion-body</code>, though the transition
//       does limit overflow.
//     </CAccordionBody>
//   </CAccordionItem>
// </CAccordion>
//   )
// }

// export default ButtonGroups
// import React from 'react'
// import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react'

// const ButtonGroups = () => {
//   return (
//     <CAccordion alwaysOpen activeItemKey={2}>
//       <CAccordionItem itemKey={1}>
//         <CAccordionHeader>Software Developer</CAccordionHeader>
//         <CAccordionBody>
//           Programming languages: (Java, Python, JavaScript, C++, etc.), Object-Oriented Programming
//           (OOP), Web development (HTML, CSS, JavaScript), Frameworks (React, Angular, Vue.js,
//           Django, Spring, etc.), Version control (Git), Agile methodologies, RESTful APIs, Database
//           management (SQL, NoSQL), Testing (Unit testing, Integration testing), Debugging, Software
//           architecture, Code optimization, Continuous integration/continuous deployment (CI/CD),
//           Problem-solving skills.
//         </CAccordionBody>
//       </CAccordionItem>
//       <CAccordionItem itemKey={2}>
//         <CAccordionHeader>ML Engnieer</CAccordionHeader>
//         <CAccordionBody>
//           Machine learning algorithms, Deep learning, Neural networks, Natural Language Processing
//           (NLP), Supervised learning, Unsupervised learning, TensorFlow, PyTorch, Scikit-learn, Data
//           preprocessing, Model evaluation, Hyperparameter tuning, Model deployment, AI ethics, Big
//           data processing.
//         </CAccordionBody>
//       </CAccordionItem>
//       <CAccordionItem itemKey={3}>
//         <CAccordionHeader>DevOps Engnieer</CAccordionHeader>
//         <CAccordionBody>
//           Continuous Integration/Continuous Deployment (CI/CD), Infrastructure as Code (IaC),
//           Automation, Containerization (Docker, Kubernetes), Configuration management (Ansible,
//           Puppet, Chef), Version control (Git), Cloud platforms (AWS, Azure, Google Cloud),
//           Monitoring and logging, Scripting (Python, Bash), Agile methodologies, Jenkins, Terraform,
//           Kubernetes, DevOps best practices.
//         </CAccordionBody>
//       </CAccordionItem>
//       <CAccordionItem itemKey={4}>
//         <CAccordionHeader>Data Analyst</CAccordionHeader>
//         <CAccordionBody>
//           Data analysis, Data visualization, SQL, Excel, Data mining, Data modeling, Statistical
//           analysis, Business intelligence, Tableau, Power BI, Python/R, Machine learning, Data
//           cleaning, Data warehousing, Data-driven decision-making
//         </CAccordionBody>
//       </CAccordionItem>
//       <CAccordionItem itemKey={5}>
//         <CAccordionHeader>System Engnieer</CAccordionHeader>
//         <CAccordionBody>
//           System administration, Network administration, IT infrastructure, Server management,
//           Virtualization, Configuration management, Scripting (e.g., Bash, Python), Troubleshooting,
//           Monitoring and alerting, Active Directory, DNS, DHCP, Firewall management, Security
//           protocols, ITIL framework
//         </CAccordionBody>
//       </CAccordionItem>
//       <CAccordionItem itemKey={6}>
//         <CAccordionHeader>UI/UX Designer</CAccordionHeader>
//         <CAccordionBody>
//           User Interface (UI) design, User Experience (UX) design, Wireframing, Prototyping,
//           Interaction design, Visual design, Usability testing, Adobe Creative Suite, Sketch, Figma,
//           Responsive design, User research, Information architecture, Design thinking, UI/UX best
//           practices
//         </CAccordionBody>
//       </CAccordionItem>
//     </CAccordion>
//   )
// }

// export default ButtonGroups
import React, { useState } from 'react'
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CButton,
} from '@coreui/react'

const ButtonGroups = () => {
  const [roles, setRoles] = useState([
    {
      role: 'Software Developer',
      keywords: [
        'Java',
        'Python',
        'JavaScript',
        'C++',
        'Object-Oriented Programming (OOP)',
        'Web development (HTML, CSS, JavaScript)',
        'Frameworks (React, Angular, Vue.js, Django, Spring)',
        'Version control (Git)',
        'Agile methodologies',
        'RESTful APIs',
        'Database management (SQL, NoSQL)',
        'Testing (Unit testing, Integration testing)',
        'Debugging',
        'Software architecture',
        'Code optimization',
        'Continuous integration/continuous deployment (CI/CD)',
        'Problem-solving skills',
      ],
    },
  ])

  const addRole = () => {
    setRoles([...roles, { role: '', keywords: [] }])
  }

  const addKeyword = (index) => {
    const updatedRoles = [...roles]
    updatedRoles[index].keywords.push('')
    setRoles(updatedRoles)
  }

  const handleRoleChange = (index, e) => {
    const updatedRoles = [...roles]
    updatedRoles[index].role = e.target.value
    setRoles(updatedRoles)
  }

  const handleKeywordChange = (roleIndex, keywordIndex, e) => {
    const updatedRoles = [...roles]
    updatedRoles[roleIndex].keywords[keywordIndex] = e.target.value
    setRoles(updatedRoles)
  }

  const deleteRole = (index) => {
    const updatedRoles = [...roles]
    updatedRoles.splice(index, 1)
    setRoles(updatedRoles)
  }

  return (
    <div>
      <CAccordion alwaysOpen>
        {roles.map((role, index) => (
          <CAccordionItem key={index}>
            <CAccordionHeader>{role.role}</CAccordionHeader>
            <CAccordionBody>
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter role"
                  value={role.role}
                  onChange={(e) => handleRoleChange(index, e)}
                />
              </div>
              {role.keywords.map((keyword, keywordIndex) => (
                <div key={keywordIndex} className="mb-2">
                  <input
                    type="text"
                    className="form-control mb-1"
                    placeholder="Enter keyword"
                    value={keyword}
                    onChange={(e) => handleKeywordChange(index, keywordIndex, e)}
                  />
                </div>
              ))}
              <CButton color="primary" className="mb-2 me-2" onClick={() => addKeyword(index)}>
                Add Keyword
              </CButton>
              <CButton color="danger" onClick={() => deleteRole(index)}>
                Delete Role
              </CButton>
            </CAccordionBody>
          </CAccordionItem>
        ))}
      </CAccordion>
      <CButton color="primary" onClick={addRole}>
        Add Role
      </CButton>
    </div>
  )
}

export default ButtonGroups
