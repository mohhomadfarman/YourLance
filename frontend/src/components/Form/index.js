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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
// import { loginStart } from "../../redux/reducer/usersLogin";
import { loginApi } from "../../redux/auctions/userLogin";
import { useDispatch } from "react-redux";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [validate, setValidate] = useState("");
  const [passwordErr, setPasswordErr] = useState();
  const [status, setStatus] = useState();
  // const [otpPasscode, setOtpPasscode] = useState();
  const [getData, setGetData] = useState();



  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(()=>{
    let Pagevalidation = JSON.parse(localStorage.getItem("OTP Status"));
    if (Pagevalidation === true) {
        navigate("/dashboard");
    }
    // setOtpPasscode(Math.floor(Math.random(1000 > 10000) * 9000));

  },[navigate])



  const baseUrl = "http://localhost:4000";
  const sendEmail = async () => {
    setStatus(email === "" && password === "" && fullname === "" && mobile === "" ? false : true);
    let dataSend = {
      fullname: fullname,
      email: email,
      password: password === cpassword ? password : setPasswordErr("Password Not Match") || password === cpassword ? setPasswordErr(""): "" ,
      mobile: mobile,
      // otp: email || fullname || password || mobile ? otpPasscode : "",
      status: status,
    };
    let localStorageDB = {
      fullname: fullname,
      email: email,
      password: password === cpassword ? password : setPasswordErr("Password Not Match") || password === cpassword ? setPasswordErr(""): "" ,
      mobile: mobile,
      status: status,
    };
    // setOtpPasscode(Math.floor(Math.random(1000 > 10000) * 9000));
    
    localStorage.setItem("data", JSON.stringify(localStorageDB));

    const res = await fetch(`${baseUrl}/email/sendEmail`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // HANDLING ERRORS
      .then(res  => {
        // if (response.status > 199 && response.status < 300) {
        //   alert("Send Successfully !");
        // }
      });

      // let valueBD = {
      //   email: email,
      //   fullname: fullname,
      //   mobile: mobile
      // }
      //   dispatch(loginApi(valueBD)).then(response => {
      //     setGetData(response)
      //   })
  };

  // const ValidateOTP = async () => {
  //   setStatus(email === "" && password === "" && fullname === "" && mobile === "" ? false : true);
  //   let GetOTP = localStorage.getItem("data");

  //   console.log(JSON.parse(GetOTP).otp, "fghjk");
  //   console.log(JSON.parse(validate), "fghjk");

  //   let SendOTPValidationStatus = {
  //     otp:
  //       JSON.parse(validate) === JSON.parse(GetOTP).otp
  //         ? JSON.parse(validate)
  //         : "",
  //     status: JSON.parse(validate) === JSON.parse(GetOTP).otp ? true : false,
  //   };

  //   if (SendOTPValidationStatus.status === true) {
  //     localStorage.setItem("OTP Status", true);
  //     navigate("/dashboard");
  //   }

  //   const res = await fetch(`${baseUrl}/email/sendEmail`, {
  //     method: "POST",
  //     body: JSON.stringify(SendOTPValidationStatus),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  // useEffect(() => {
  //   let valueBD = {
  //     email: email
  //   }
  //     dispatch(loginApi(valueBD)).then(response => {
  //       setGetData(response)
  //     })
  //  }, []);
 



  const ValidateOTP = async () => {
        setStatus(validate ? false : true);

   let SendOTPValidationStatus = {
      otp: JSON.parse(validate),
      status:  JSON.parse(validate)?true : false,
    };

 
    dispatch(loginApi(SendOTPValidationStatus)).then(response => {
      setGetData(response)
      // console.log(response)
    }) ;

    console.log(getData.data.otp,"rghjkl")
    if (getData.data.otp === true) {
  localStorage.setItem("OTP Status", true);
  navigate("/dashboard");
}
  }
 

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
                  placeholder="Enter Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="mobile">
                <FormLabel>mobile Number</FormLabel>
                <Input
                  required
                  disabled={status ? true : false}
                  type="number"
                  placeholder="Enter Mobile Number"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  disabled={status ? true : false}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter the Password..."
                />
              </FormControl>
              <FormControl id="text">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  disabled={status ? true : false}
                  onChange={(e) => setCpassword(e.target.value)}
                  placeholder="Confirm your Password..."
                />
                {passwordErr && `<p style={{color:"red"}}>${passwordErr}</p>`}
              </FormControl>

              {!status && <p>Fill All The details </p>}

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
