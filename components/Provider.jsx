"use client";
import React from 'react'
import { MantineProvider } from '@mantine/core';

const Provider = ({children}) => {
  return (
    <div>
        <MantineProvider>
            {children}
        </MantineProvider>
    </div>
  )
}

export default Provider;