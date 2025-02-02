import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilAirplaneMode,
  cilHome,
  cilEducation,
  cilGroup,
  cilChartLine,
  cilEnvelopeClosed,
  cilVoiceOverRecord,
  cilFile,
  cilZoom,
  cilSend,
  cilCommentBubble,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'see latest ',
    // },
  },
  {
    component: CNavTitle,
    name: 'companies',
  },
  {
    component: CNavItem,
    name: 'Jobs',
    to: '/theme/colors',
    icon: <CIcon icon={cilEducation} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Navigate',
  },
  {
    component: CNavGroup,
    name: 'Disscusion',
    to: '/base',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Messages',
      //   icon: <CIcon icon={cilEnvelopeClosed} customClassName="nav-icon" />,

      //   to: '/base/accordion',
      // },
      {
        component: CNavItem,
        name: 'Forums',
        icon: <CIcon icon={cilVoiceOverRecord} customClassName="nav-icon" />,

        to: '/base/breadcrumbs',
      },
      // {
      //   component: CNavItem,
      //   name: 'Cards',
      //   to: '/base/cards',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Carousel',
      //   to: '/base/carousels',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Collapse',
      //   to: '/base/collapses',
      // },
      // {
      //   component: CNavItem,
      //   name: 'List group',
      //   to: '/base/list-groups',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Navs & Tabs',
      //   to: '/base/navs',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Placeholders',
      //   to: '/base/placeholders',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Progress',
      //   to: '/base/progress',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Spinners',
      //   to: '/base/spinners',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tables',
      //   to: '/base/tables',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tooltips',
      //   to: '/base/tooltips',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'update resume',
    to: '/buttons',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Resume',
        icon: <CIcon icon={cilFile} customClassName="nav-icon" />,

        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Keywords',
        icon: <CIcon icon={cilZoom} customClassName="nav-icon" />,

        to: '/buttons/button-groups',
      },
      // {
      //   component: CNavItem,
      //   name: 'Dropdowns',
      //   to: '/buttons/dropdowns',
      // },
    ],
  },
  // // {
  // //   component: CNavGroup,
  // //   name: 'Forms',
  // //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // //   items: [
  // //     {
  // //       component: CNavItem,
  // //       name: 'Form Control',
  // //       to: '/forms/form-control',
  // //     },
  // //     {
  // //       component: CNavItem,
  // //       name: 'Select',
  // //       to: '/forms/select',
  // //     },
  // //     {
  // //       component: CNavItem,
  // //       name: 'Checks & Radios',
  // //       to: '/forms/checks-radios',
  // //     },
  // //     {
  // //       component: CNavItem,
  // //       name: 'Range',
  // //       to: '/forms/range',
  // //     },
  // //     {
  // //       component: CNavItem,
  // //       name: 'Input Group',
  // //       to: '/forms/input-group',
  // //     },
  // //     {
  // //       component: CNavItem,
  // //       name: 'Floating Labels',
  // //       to: '/forms/floating-labels',
  // //     },
  // //     {
  // //       component: CNavItem,
  // //       name: 'Layout',
  // //       to: '/forms/layout',
  // //     },
  // //     {
  // //       component: CNavItem,
  // //       name: 'Validation',
  // //       to: '/forms/validation',
  // //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: ' application alerts',
        icon: <CIcon icon={cilSend} customClassName="nav-icon" />,

        to: '/notifications/badges',
      },
      // {
      //   component: CNavItem,
      //   name: 'messages',
      //   icon: <CIcon icon={cilCommentBubble} customClassName="nav-icon" />,

      //   to: '/notifications/alerts',
      // },

      // {
      //   component: CNavItem,
      //   name: 'Modal',
      //   to: '/notifications/modals',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Toasts',
      //   to: '/notifications/toasts',
      // },
    ],
  },
  {
    component: CNavItem,
    name: 'view stats',
    to: '/charts',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
