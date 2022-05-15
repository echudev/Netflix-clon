import React from 'react'
import style from './NavBar.module.css'
import { useGetWindowWidth } from './hooks/useGetWindowWidth'
import { useGetScrollY } from './hooks/useGetScrollY'
import { SearchBar } from './SearchBar/SearchBar'
import { UserIcons } from './UserIcons/UserIcons'
import { TooltipMenu } from './TooltipMenu/TooltipMenu'
import { Menu } from './Menu/Menu'
import { Logo } from './Logo/Logo'

export const NavBar = () => {
  const width = useGetWindowWidth();
  const scrollY = useGetScrollY();

  return (
    <div className={style.navbar}>
      <Logo />
      {width > 768 ? <Menu /> : <TooltipMenu />}
      <SearchBar />
      <UserIcons />
      <div className={scrollY > 60 ? style.bkg_solid : style.bkg}></div>
    </div>
  )
}
