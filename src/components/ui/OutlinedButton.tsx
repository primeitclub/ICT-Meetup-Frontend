import { Button } from '@chakra-ui/react';

export default function OutlinedButton({ buttonText }: { buttonText: string }) {
 return (
  <>
   <Button
    paddingX={'24px'}
    width={{
     base: '100%',
     md: '321px'
    }}
    paddingY={'12px'}
    variant={'outlined-button'}>
    {buttonText}
   </Button>
  </>
 );
}
