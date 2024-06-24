'use client';

import '@mantine/core/styles.css';
import { NavLink, Flex } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';
import classes from './Navbar.module.scss';

export default function Navbar() {
  const pages: string[] = ['about', 'artists', 'schedule', 'values', 'scholarship', 'registration'];
  const [active, setActive] = useState(0);

  const handlePage = (i: number): void => {
    setActive(i);
  };

  return (
    <nav className={classes.navbar}>
      <Flex gap="xs" justify="flex-end" align="center" direction="row" wrap="nowrap">
        {pages.map((page: string, i: number) => (
          <Link href={`/${page}`} key={i} passHref>
            <NavLink
              component="a"
              active={i === active}
              label={page.toUpperCase()}
              onClick={() => handlePage(i)}
              className={classes.navbar__link}
            />
          </Link>
        ))}
      </Flex>
    </nav>
  );
}
