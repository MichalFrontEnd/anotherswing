'use client';

import '@mantine/core/styles.css';
import { NavLink, Flex } from '@mantine/core';
import { useState } from 'react';
import classes from './Navbar.module.scss';

export default function Navbar() {
  const pages: string[] = ['about', 'artists', 'schedule', 'values', 'scholarship', 'registration'];
  const [active, setActive] = useState(0);

  const handlePage = (e: React.MouseEvent, i:number) :void => {
    e.preventDefault();
    setActive(i);
  }
    return (
    <nav className={classes.navbar}>
      <Flex gap="xs" justify="flex-end" align="center" direction="row" wrap="nowrap">
        {pages &&
          pages.map((page: string, i: number) => (
            <NavLink
              href={`/${page}`}
              key={i}
              active={i === active}
              label={page.toUpperCase()}
              onClick={(e): void => handlePage(e, i)}
            />
          ))}
      </Flex>
    </nav>
  );
}
