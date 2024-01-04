import React from 'react';

export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='text-red-600 bg-black'>{children}</div>
  );
}