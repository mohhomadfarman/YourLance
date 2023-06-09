import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { loginStart } from "../../redux/reducer/usersLogin";
import { loginApi } from "../../redux/auctions/userLogin";
import { useDispatch } from "react-redux";
import RegisterImage from "../../img/Register.jpg";
import { CurrentApi } from "../../config/config";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [validate, setValidate] = useState("");
  const [passwordErr, setPasswordErr] = useState();
  const [status, setStatus] = useState();
  const [err, setErr] = useState()
  // const [otpPasscode, setOtpPasscode] = useState();
  const [getData, setGetData] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    let Pagevalidation = JSON.parse(localStorage.getItem("OTP Status"));
    if (Pagevalidation === true) {
      navigate("/Login");
    }
  }, [navigate]);
 

  const baseUrl =  CurrentApi;
  const sendEmail = async () => {
    setStatus(
      email === "" && password === "" && fullname === "" && mobile === ""
        ? false
        : true
    );
  
    // if(status){

      let dataSend = {
        fullname: fullname,
        email: email,
        password:
          password === cpassword
            ? password
            : setPasswordErr("Password Not Match") || password === cpassword
            ? setPasswordErr("")
            : "",
        mobile: mobile,
        status: status,
      };
      let localStorageDB = {
        fullname: fullname,
        email: email,
        password:
          password === cpassword
            ? password
            : setPasswordErr("Password Not Match") || password === cpassword
            ? setPasswordErr("")
            : "",
        mobile: mobile,
        status: status,
      };
  
      localStorage.setItem("data", JSON.stringify(localStorageDB));
  
      const res = await fetch(`${baseUrl}/api/UserRegister`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        // HANDLING ERRORS
        .then((res) => {
          if (res.status > 199 && res.status < 300) {
            console.log("Send Successfully !");
          }
        });
    // }else{
    //   setErr("Fill All the Details")
    // }

  };

  const ValidateOTP = async () => {
    setStatus(validate ? false : true);

    let SendOTPValidationStatus = {
      otp: JSON.parse(validate),
      status: JSON.parse(validate) ? true : false,
    };

    dispatch(loginApi(SendOTPValidationStatus)).then((response) => {
      setGetData(response);
    });

    // console.log(JSON.parse(getData.data.otp), "rghjkl");
        if (getData.data.otp === true) {
      localStorage.setItem("OTP Status", true);
      navigate("/Login");
    }
  };

  return (
    <>
      {!JSON.parse(localStorage.getItem("OTP Status")) && (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack
            className="Boxx_13"
            spacing={8}
            // mx={"auto"}
            maxW={"xl"}
            py={12}
            px={6}
            align={"center"}
          >
            <Box boxSize="sm" align={"center"}>
              <Image src={RegisterImage} alt="Register Image" />
            </Box>
          </Stack>

          <Stack
            className="Boxx_1"
            spacing={8}
            // mx={"auto"}
            maxW={"xl"}
            py={12}
            px={6}
          >
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Register to the account</Heading>
            </Stack>
            <Box
              rounded={"xl"}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    required
                    // disabled={status ? true : false}
                    type="text"
                    placeholder="Eneter Your Full Name"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    required
                    // disabled={status ? true : false}
                    type="email"
                    placeholder="Enter Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="mobile">
                  <FormLabel>mobile Number</FormLabel>
                  <Input
                    required
                    // disabled={status ? true : false}
                    type="number"
                    placeholder="Enter Mobile Number"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    // disabled={status === true ? true : false}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter the Password..."
                  />
                </FormControl>
                <FormControl id="text">
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    // disabled={status ? true : false}
                    onChange={(e) => setCpassword(e.target.value)}
                    placeholder="Confirm your Password..."
                  />
                  {passwordErr && `<p style={{color:"red"}}>${passwordErr}</p>`}
                </FormControl>

                {err && <p>{err}</p>}

                {status && err ? (
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
                    Register
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
    </>
  );
}
