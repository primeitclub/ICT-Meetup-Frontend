import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const CommingSoon = () => {
    return (
        <Flex justifyContent='center' marginY={'50px'}>
            <Heading as={'h1'} fontFamily={'heading'} variant={'section-header'}>
                Coming Soon<span style={{ color: '#2C84EC' }} >.</span>
                <span style={{ color: '#2C84EC' }} >.</span>
                <span style={{ color: '#2C84EC' }} >.</span>
                <span style={{ color: '#2C84EC' }} >.</span>
            </Heading>
        </Flex>
    )
}

export default CommingSoon
