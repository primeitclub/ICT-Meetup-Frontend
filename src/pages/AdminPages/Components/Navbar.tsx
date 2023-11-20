import { Box, Flex, Image, Select, Spacer, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import imagelogo from '../../../assets/logo.svg';
import { RxDashboard } from 'react-icons/rx';
import { TbCalendarEvent } from 'react-icons/tb';
import { RiTeamLine } from 'react-icons/ri';
import { TfiGallery } from 'react-icons/tfi';
import { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Routes, Route } from 'react-router-dom';

function NavbarAdmin() {
 const [expandEvent, setExpandEvent] = useState(false);
 const [expandMember, setExpandMember] = useState(false);



 const navItemAdmin = {
  fontSize: '16px',
  cursor: 'pointer',
  textTransform: 'capitalize',
  _hover: {
   color: '#2C84EC ',
   transition: '0.2s ease-out'
  }
 };

 //  function handelToggle

 const handelEvent = () => {
  setExpandEvent(!expandEvent);
  setExpandMember(false)

 };

 const handelMember = ()=>{
  setExpandMember(!expandMember);
  setExpandEvent(false)
 }

 //  function maintainActive
 const maintainActive = () => {
 };

 // function remove expand
 const removeExpand = () => {
  setExpandEvent(false);
  setExpandMember(false)
 };

 // functio handel click
 useEffect(() => {
  const allNodes = document.querySelectorAll('.sing_nav_item');

 

  allNodes.forEach((item) => {
   item.addEventListener('click', removeExpand);
  });

  return () => {
    window.removeEventListener('click', removeExpand);
  };
 }, []);

 return (
  <>
   <Flex direction={'column'} gap={10} className="nav_items_admin">
    <Box width={'100%'} borderBottom={'1px solid white'} pb={5} className="nav_image">
     <Image width={'70%'} pl={8} height={'100%'} objectFit={'contain'} src={imagelogo} />
    </Box>

    <Flex my={6} px={8} width={'100%'} gap={8} direction={'column'}>
     <Box className="sing_nav_item">
      <NavLink to={'dashboard'}>
       <Flex sx={navItemAdmin} alignItems={'center'} gap={4}>
        <RxDashboard className="icon_size_admin" />
        dashboard
       </Flex>
      </NavLink>
     </Box>

     <Box className="sing_nav__child">
      <Flex onClick={ handelEvent } sx={navItemAdmin} alignItems={'center'} gap={4}>
       <TbCalendarEvent className="icon_size_admin" />
       <Text className={expandEvent ? 'active' : 'nav'}>Events</Text>
       <Spacer />

       {expandEvent ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </Flex>

      {expandEvent ? (
       <Box borderLeft={'1px solid white'} className="single_nav_child" pl={'30px'} mt={6}>
        <Flex gap={5} direction={'column'}>
         <Box onClick={maintainActive} sx={navItemAdmin}>
          <NavLink to={'events/all-event'}>all event</NavLink>
         </Box>

         <Box sx={navItemAdmin}>
          <NavLink to={'events/add-event'}>add event</NavLink>
         </Box>

         <Box sx={navItemAdmin}>
          <NavLink to={'events/add-speaker'}>add speaker</NavLink>
         </Box>
        </Flex>
       </Box>
      ) : (
       <></>
      )}
     </Box>

     
     <Box className="sing_nav__child">
      <Flex onClick={ handelMember } sx={navItemAdmin} alignItems={'center'} gap={4}>
       <TbCalendarEvent className="icon_size_admin" />
       <Text className={expandMember ? 'active' : 'nav'}>Members</Text>
       <Spacer />

       {expandMember ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </Flex>

      {expandMember ? (
       <Box borderLeft={'1px solid white'} className="single_nav_child" pl={'30px'} mt={6}>
        <Flex gap={5} direction={'column'}>
         <Box onClick={maintainActive} sx={navItemAdmin}>
          <NavLink to={'members/all-member'}>all member</NavLink>
         </Box>

         <Box sx={navItemAdmin}>
          <NavLink to={'members/add-member'}>add member</NavLink>
         </Box>

        </Flex>
       </Box>
      ) : (
       <></>
      )}
     </Box>


     <Box className="sing_nav_item">
      <NavLink to={'Participants'}>
       <Flex sx={navItemAdmin} alignItems={'center'} gap={4}>
        <TfiGallery className="icon_size_admin" />
        PARTICIPATES 
       </Flex>
      </NavLink>
     </Box>


     <Box className="sing_nav_item">
      <NavLink to={'gallery'}>
       <Flex sx={navItemAdmin} alignItems={'center'} gap={4}>
        <TfiGallery className="icon_size_admin" />
        gallery
       </Flex>
      </NavLink>
     </Box>

    </Flex>
   </Flex>
  </>
 );
}

export default NavbarAdmin;
