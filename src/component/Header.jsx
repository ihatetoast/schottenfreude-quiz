import React from 'react';

export default function Header({title, headerClass, titleClass, children}) {
  return (
    <header className={headerClass}>
      <h1 className={titleClass}>{title}</h1>
      {children}
    </header>
  );
}
