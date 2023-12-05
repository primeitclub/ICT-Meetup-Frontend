import { Stack, Tab, Text } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

export default function TabLists() {

      const stLine = {
          _before:{
            content:"''",
            position:'absolute',
            height:'80%',
            width:'2px',
            left:{xl:-9,lg:-7,md:-5,sm:-3},
            bg:'#395387'
          }
      }

  return (
    <>

        <Tab
        position={'relative'}
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Wokshop
        </Tab>


        <Tab
        position={'relative'}
         className="Tab_Header"
         sx={stLine}
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Sessions
        </Tab>


        <Tab
        position={'relative'}
         className="Tab_Header"
         sx={stLine}
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Compitition
        </Tab>


        <Tab
        position={'relative'}
         className="Tab_Header"
         sx={stLine}
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Panels
        </Tab>

        <Tab
        position={'relative'}
         className="Tab_Header"
         sx={stLine}
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        E-SpoRts
        </Tab>
    
    </>
  )
}
