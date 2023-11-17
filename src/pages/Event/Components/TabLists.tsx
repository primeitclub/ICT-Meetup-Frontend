import { Tab } from '@chakra-ui/react'

export default function TabLists() {
  return (
    <>

        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Wokshop
        </Tab>

        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Sessions
        </Tab>


        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Compitition
        </Tab>


        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        Panels
        </Tab>

        <Tab
         className="Tab_Header"
         fontSize={{ xl: '24px', sm: '18px', base: '14px' }}
         fontWeight={{ sm: '700', base: '600' }}
         _selected={{ borderBottom: '3px solid #F15B2D' }}>
        E-SpoRts
        </Tab>
    
    </>
  )
}
