import { Heading, Flex } from '@chakra-ui/react';

type HeaderProps = {
 title: string;
 direction?: 'end' | 'normal';
 top?: string;
 right?: string;
 left?: string;
};

export default function SectionHeader(props: HeaderProps) {
 return (
  <>
   <Flex
    align={'center'}
    flexDirection={props.direction === 'end' ? 'row-reverse' : 'row'}
    position={'absolute'}
    top={props.top}
    right={props.right}
    left={props.left}>
    {/* <div
     style={{
      width: '234px',
      height: '2px',
      background: 'white',
      marginRight: '20px'
     }}></div> */}
    <Heading variant={'section-header'} fontFamily={'heading'}>
     {props.title}
     <span
      style={{
       color: '#E76028'
      }}>
      .
     </span>
    </Heading>
   </Flex>
  </>
 );
}
