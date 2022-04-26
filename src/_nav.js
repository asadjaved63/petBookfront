import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser
} from '@coreui/icons'

import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import {getUserRole} from "./config/Common";
import _admin_menu from './adminPanel/menu/admin_menu'
import _user_nav from './adminPanel/menu/user_menu'

const role =getUserRole();
let _nav;
if (role == 'admin'){
   _nav = _admin_menu;
}else {
  _nav =_user_nav
}

export default _nav
