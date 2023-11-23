import { Button } from '@chakra-ui/react';

export default function PrimaryButton({ buttonText }: { buttonText: string }) {
 return (
  <>
   <Button
    paddingX={'24px'}
    width={{
     base: '100%',
     md: '321px'
    }}
    paddingY={'12px'}
    variant={'primary-button'}>
    {buttonText}
   </Button>
  </>
 );
}
