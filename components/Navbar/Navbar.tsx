'use client';

import { NavLink } from '@mantine/core';
import { useState } from 'react';
import classes from './Navbar.module.css';

export default function Navbar() {
  const pages :string[] = ['about', 'artists', 'schedule', 'values', 'scholarship', 'registration'];
  const [active, setActive] = useState(0);
  return (
    <nav className={classes.navbar}>
      {pages && pages.map((page:string, i:number) => (
        <NavLink
          href={`/${page}`}
          key={i}
          active={i === active}
          label={page.toUpperCase()}
          onClick={():void => setActive(i)}
          className={classes.navbar__link}
      />))}
    </nav>
  );
}
