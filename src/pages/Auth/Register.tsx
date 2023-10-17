import {
    Flex,
    Image,
    FormControl,
    Input,
    FormErrorMessage,
    Button,
} from "@chakra-ui/react";
import Robot from "../../assets/robo.svg"
import { Formik } from "formik";
import * as Yup from 'yup';
const RegisterPage = () => {
    const initialValue = {
        name: '',
        email: '',
        phone: '',
        collegeName: '',
        password: '',
        confirmPassword: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phone: Yup.number().required('Required'),
        collegeName: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string().required('Required')
    })
    const onSubmit = (values: any) => {
        console.log(values)
    }
    const gradient = `radial-gradient(55.06% 120.2% at 43.76% 52.23%, #040E2C 0.47%, rgba(0, 0, 0, 0.8) 100%)`;
    return (
        <Flex bg={gradient} h='100vh'
            justifyContent={'space-between'}
            p={'10% 8%'}>
            <Image src={Robot} alt="Robot" height={'100%'} />
            <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(form) => (
                    <form onSubmit={form.handleSubmit} >
                        <Flex w='50vw'>
                            <Flex justifyContent={'center'} mb={4} direction={'column'} color={'white'} width='100%'>
                                <FormControl mt={4} isInvalid={form.errors.name} >
                                    <Input
                                        variant='login-input'
                                        {...form.getFieldProps("name")}
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt={4} isInvalid={form.errors.email}>
                                    <Input
                                        {...form.getFieldProps("email")}
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt={4} isInvalid={form.errors.phone}>
                                    <Input
                                        {...form.getFieldProps("phone")}
                                        type="number"
                                        placeholder="Enter your phone number"
                                    />
                                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt={4} isInvalid={form.errors.collegeName}>
                                    <Input
                                        {...form.getFieldProps("collegeName")}
                                        type="text"
                                        placeholder="Enter your college name"
                                    />
                                    <FormErrorMessage>{form.errors.collegeName}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt={4} isInvalid={form.errors.password}>
                                    <Input
                                        {...form.getFieldProps("password")}
                                        type="password"
                                        placeholder="Enter a password"
                                    />
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                                <FormControl mt={4} isInvalid={form.errors.confirmPassword}>
                                    <Input
                                        {...form.getFieldProps("confirmPassword")}
                                        type="password"
                                        placeholder="Confirm your password"
                                    />
                                    <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                                </FormControl>
                                <Button mt={4} colorScheme="teal" type="submit">
                                    Register
                                </Button>
                            </Flex>
                        </Flex>
                    </form>

                )}
            </Formik>
        </Flex>)

};

export default RegisterPage;
