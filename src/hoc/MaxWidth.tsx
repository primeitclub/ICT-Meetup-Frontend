import { ReactNode } from 'react';

import { Container } from '@chakra-ui/react';

export default function MaxWidthHOC({ children }: { children: ReactNode }) {
  return (
    <Container
      maxW={{
        xl: '1100px',
        '2xl': '1440px',
      }}
      paddingX={{
        base: '32px',
        md: '64px',
        xl: '0px',
      }}
      margin={'auto'}
    >
      {children}
    </Container>
  );
}
