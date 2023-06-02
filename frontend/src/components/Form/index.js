import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Textarea,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
  
  export default function EmailForm() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    // const [status, setStatus] = useState(email === "" && subject === ""  && message=== ""  ? false : true);
    const [status, setStatus] = useState(true);
    const [otpPasscode, setOtpPasscode] = useState()
  
    const baseUrl = "http://localhost:4000";
console.log(otpPasscode)
  
    const sendEmail = async () => {
setStatus(email === "" && subject === ""  && message === ""  ? false : true)
      let dataSend = {
        email: email,
        subject: subject,
        message: message,
        otp: email || subject || message ? otpPasscode : "",
        status: status
      };
      setOtpPasscode(Math.floor(Math.random(1000 > 10000) *  9000));

      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          
        },
      })

        // HANDLING ERRORS
        .then((res) => {
          console.log(res);
          if (res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
           
          }
        });

    };



    return (

    
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Send email to the account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Don't forget to subscribe ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                required
                  type="email"
                  placeholder="Receiver's Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Subject</FormLabel>
                <Input
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Enter the subject here..."
                />
              </FormControl>
              <FormControl id="text">
                <FormLabel>Message</FormLabel>
                <Textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message here..."
                />
              </FormControl>

              {!status ? (<p>Fill All The details </p>):""}

              <Stack spacing={10}>
                <Button
                type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() => sendEmail()}
                >
                  Send Email
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  