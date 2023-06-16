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
import { useDispatch, useSelector } from "react-redux";
import RegisterImage from "../../img/Register.jpg";
import { loginApi } from "../../redux/auctions/userLogin";
import { get } from "mongoose";
import ClientDashboard from "../../Client Side";
import GrowExample from "./Isloading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getData, setGetData] = useState();
  const [status, setStatus] = useState();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    let Pagevalidation = JSON.parse(localStorage.getItem("Login Status"));
    if (Pagevalidation === true) {
      navigate("/client");
    }
  }, [navigate]);

  const LoginBUtton = async () => {
    setStatus(email === "" && password === "" ? false : true);
    let dataSend = {
      email: email,
      password: password,
      status: status,
    };
    let localStorageDB = {
      email: email,
      password: password,
      status: status,
    };

    localStorage.setItem("data", JSON.stringify(localStorageDB));

    dispatch(loginApi(dataSend)).then((response) => {
      setGetData(response);
    });
  };
  const LoginData = useSelector((state) => [state?.login?.user?.loginStatus,state?.login?.user?.id ]);
  const isLoading = useSelector((state) => state?.login?.isLoading);

  console.log(LoginData)
  if (LoginData[0]) {
    navigate(`/client/${LoginData[1]}`);
    console.log(`/client/${LoginData[1]}`)
  }

  return (
    <>
      {isLoading && (
          <GrowExample />
      )} 
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
              <Heading fontSize={"4xl"}>Login To Your Account</Heading>
            </Stack>
            <Box rounded={"xl"} boxShadow={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    required
                    type="email"
                    placeholder="Enter Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Enter the Password..."
                  />
                </FormControl>
                {/* {getData && !LoginErr.loginStatus === false ? (
                  <p className="alert-danger">{LoginErr.err}</p>
                ) : (
                  ""
                )} */}

                <Stack spacing={10}>
                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={() => LoginBUtton()}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      
    </>
  );
}
