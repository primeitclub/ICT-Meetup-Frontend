import {
 Accordion,
 AccordionItem,
 AccordionButton,
 AccordionPanel,
 AccordionIcon,
 Container,
 Box,
 Heading,
 Flex,
 Button,
 Text
} from '@chakra-ui/react';
import HomePageTitle from '../reusables/HomePageTitle';

interface IFAQData {
 question: string;
 answer: string;
}

const faqData: IFAQData[] = [
 {
  question: 'Question 1',
  answer: 'Answer 1'
 },
 {
  question: 'Question 2',
  answer: 'Answer 2'
 },
 {
  question: 'Question 3',
  answer: 'Answer 3'
 },
 {
  question: 'Question 4',
  answer: 'Answer 4'
 },
 {
  question: 'Question 5',
  answer: 'Answer 5'
 }
];

export default function FAQAccordion() {
 return (
  <>
   <Container paddingY={'80px'}>
    <HomePageTitle pageTitle={'FAQS'} />
    <Heading as={'h2'} color={'white'} fontSize={'20px'} fontWeight={'100'} textAlign={'center'}>
     Find the answers to common questions about the event, registration and attendance.
    </Heading>
    <Flex justifyContent={'center'} paddingY={'16'}>
     <Accordion allowToggle w={'full'} maxW={'3xl'}>
      {faqData.map((faq, index: number) => (
       <AccordionItem key={index} paddingY={'20px'} borderY={'1px solid white'}>
        <Heading variant={'h5'}>
         <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
           {faq.question}
          </Box>
          <AccordionIcon />
         </AccordionButton>
        </Heading>
        <AccordionPanel py={4}>
         <Heading variant={'h5'} as={'h3'} textAlign={'left'}>
          {faq.answer}
         </Heading>
        </AccordionPanel>
       </AccordionItem>
      ))}
     </Accordion>
    </Flex>

    <Flex justifyContent={'center'} direction={'column'} alignItems={'center'}>
     <Heading variant={'h3'} as={'h2'} textAlign={'center'} fontFamily={'heading'}>
      STILL HAVE A QUESTION?
     </Heading>
     <Text textAlign={'center'} paddingY={4} color={'white'} fontSize={'20px'} fontWeight={'100'}>
      Contact our events head @Sandesh Basnet or @Jenish Maharjan
     </Text>
     <Box paddingY={'10'}>
      <Button
       paddingX={'24px'}
       width={{
        base: '100%',
        sm: '321px'
       }}
       paddingY={'12px'}
       variant={'outlined-button'}>
       Contact Us
      </Button>
     </Box>
    </Flex>
   </Container>
  </>
 );
}
