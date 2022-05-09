import React, { useEffect, useRef, useState } from 'react'
import './NavBar.css'
import logo from '../../img/netflix.png'
import { useGetWindowWidth } from '../../hooks/useGetWindowWidth'
import { useGetScrollY } from '../../hooks/useGetScrollY'
import { SearchBar } from './SearchBar/SearchBar'
import { UserIcons } from './user_icons/UserIcons'
import { TooltipMenu } from './TooltipMenu/TooltipMenu'
import { Menu } from './Menu/Menu'


export const NavBar = () => {
  const width = useGetWindowWidth();
  const scrollY = useGetScrollY();

  return (
    <div className={scrollY>60? 'navbar solid' : 'navbar'}>
      <img src={logo} height="35" alt="nav-logo" />
      {width > 768 ? <Menu /> : <TooltipMenu />}
      <SearchBar />
      <UserIcons />
    </div>
  )
}
