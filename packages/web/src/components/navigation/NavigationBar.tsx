import React, { useCallback } from 'react';

import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme, useThemeMode } from '@themes/ThemeProvider';
import LinkButton from '@components/misc/LinkButton';
import IconButton from '@components/misc/IconButton';
import Link from 'next/link';

type NavigationBarProps = {
  title?: string;
};

const NavigationBar = ({ title }: NavigationBarProps) => {
  const { toggleTheme } = useThemeMode();
  const theme = useTheme();

  const _toggleTheme = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <>
      <div className="px-8 pt-8 flex justify-between flex-row items-center">
        {title && (
          <Link href="/">
            <span className="whitespace-nowrap">{title}</span>
          </Link>
        )}
        <div className="space-x-4 flex flex-row items-center">
          <LinkButton href="/login" appearance="minimal">
            login
          </LinkButton>
          <LinkButton href="/register" appearance="minimal" color="emerald">
            register
          </LinkButton>
          <IconButton icon={theme === 'light' ? FiSun : FiMoon} onClick={_toggleTheme} />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;