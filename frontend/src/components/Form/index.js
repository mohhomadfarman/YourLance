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
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fullname, setFullname] = useState("");
  const [validate, setValidate] = useState("");
  // const [status, setStatus] = useState(email === "" && subject === ""  && message=== ""  ? false : true);
  const [status, setStatus] = useState();
  const [otpPasscode, setOtpPasscode] = useState(
    Math.floor(Math.random(1000 > 10000) * 9000)
  );


  const navigate = useNavigate();



  useEffect(()=>{
    let Pagevalidation = JSON.parse(localStorage.getItem("OTP Status"));
    if (Pagevalidation === true) {
        navigate("/dashboard");
    }
  },[navigate])



  const baseUrl = "http://localhost:4000";
  console.log(otpPasscode);
  const sendEmail = async () => {
    setStatus(email === "" && subject === "" && message === "" ? false : true);
    let dataSend = {
      fullname: fullname,
      email: email,
      subject: subject,
      message: message,
      otp: email || subject || message ? otpPasscode : "",
      status: status,
    };
    setOtpPasscode(Math.floor(Math.random(1000 > 10000) * 9000));
    localStorage.setItem("data", JSON.stringify(dataSend));

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

  const ValidateOTP = async () => {
    setStatus(email === "" && subject === "" && message === "" ? false : true);
    let GetOTP = localStorage.getItem("data");

    console.log(JSON.parse(GetOTP).otp, "fghjk");
    console.log(JSON.parse(validate), "fghjk");

    let SendOTPValidationStatus = {
      otp:
        JSON.parse(validate) === JSON.parse(GetOTP).otp
          ? JSON.parse(validate)
          : "",
      status: JSON.parse(validate) === JSON.parse(GetOTP).otp ? true : false,
    };

    if (SendOTPValidationStatus.status === true) {
      localStorage.setItem("OTP Status", true);
      navigate("/dashboard");
    }

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(SendOTPValidationStatus),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

 

  return (
    <>
    {!JSON.parse(localStorage.getItem("OTP Status")) && 
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Register to the account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Don't forget to subscribe ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
            <FormControl id="name">
                <FormLabel>Full Name</FormLabel>
                <Input
                  required
                  disabled={status ? true : false}
                  type="text"
                  placeholder="Eneter Your Full Name"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  required
                  disabled={status ? true : false}
                  type="email"
                  placeholder="Receiver's Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Subject</FormLabel>
                <Input
                  disabled={status ? true : false}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Enter the subject here..."
                />
              </FormControl>
              <FormControl id="text">
                <FormLabel>Message</FormLabel>
                <Textarea
                  disabled={status ? true : false}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message here..."
                />
              </FormControl>

              {!status ? <p>Fill All The details </p> : ""}

              {status ? (
                <>
                  <FormControl id="otp">
                    <FormLabel>Enter OTP</FormLabel>
                    <Input
                      onChange={(e) => setValidate(e.target.value)}
                      type="number"
                      placeholder="Enter OTP"
                    />
                  </FormControl>

                  <Stack spacing={10}>
                    <Button
                      type="submit"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={() => ValidateOTP()}
                    >
                      Validate
                    </Button>
                  </Stack>
                </>
              ) : (
                ""
              )}

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
      </Flex>}
    </>
  );
}
