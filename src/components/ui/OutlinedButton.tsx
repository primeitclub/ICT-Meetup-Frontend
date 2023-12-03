import { Button } from '@chakra-ui/react';

export default function OutlinedButton({ buttonText }: { buttonText: string }) {
  return (
    <>
      <Button
        paddingX={'64px'}
        width={{
          base: '100%',
          md: 'fit-content',
        }}
        paddingY={{
          base: '8px',
        }}
        variant={'outlined-button'}
        borderRadius={'50px'}
        fontSize={'24px'}
        fontWeight={'500'}
      >
        {buttonText}
      </Button>
    </>
  );
}
