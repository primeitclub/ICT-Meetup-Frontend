import { Box, Flex, Image } from '@chakra-ui/react';

export default function SpeakerCards({
  image,
  name,
  speakerSpeciality,
}: {
  image: string;
  name: string;
  speakerSpeciality: string;
}) {
  return (
    <>
      <Flex h={'100%'} direction={'column'}>
        <Box
          className='speaker_image_wrapper'
          maxH={'500px'}
          maxW={{
            xl: '440px',
          }}
          borderRadius={'16px'}
          position={'relative'}
          transition={'all .3s ease-in-out'}
        >
          <Image
            className='speaker-image'
            h={'100%'}
            w={'100%'}
            objectFit={'cover'}
            src={image}
            borderRadius={'16px'}
            border={'2px solid #fff'}
            background={
              ' linear-gradient(135deg, rgba(56, 137, 213, 0.20) 4.25%, rgba(36, 79, 233, 0.20) 100.05%), linear-gradient(0deg, rgba(6, 21, 50, 0.40) 11%, rgba(0, 0, 0, 0.00) 25.1%), url(<path-to-image>), lightgray -41.571px -59.707px / 116.628% 125.141% no-repeat'
            }
            backgroundBlendMode={'color, normal, normal'}
          />
          <Box
            position={'absolute'}
            bottom={0}
            width={'full'}
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'center'}
            color={'white'}
            h={'20%'}
            fontWeight={700}
            fontSize={'32px'}
            className='speaker_name'
            backgroundBlendMode={'plus-darker'}
            letterSpacing={'.2px'}
          >
            {name}
            {speakerSpeciality}
          </Box>
        </Box>
      </Flex>
    </>
  );
}
