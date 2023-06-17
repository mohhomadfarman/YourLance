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
import GrowExample from "./Isloading";
import { getToken, getUserId } from "../../utils/auth";
import jwtDecode from "jwt-decode";

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

    // if(isLoggedIn){
    //   navigate(`/client/dfdsfduds8df788`)
    // }
  }, [navigate]);


  

  const LoginBUtton = async () => {
    setStatus(email === "" && password === "" ? false : true);
    let dataSend = {
      email: email,
      password: password,
      status: status,
    };

    dispatch(loginApi(dataSend)).then((response) => {
      setGetData(response);
      token !== undefined ? localStorage.setItem('token',  token): localStorage.clear()
        
          if(!isLoading){
               if(token){
                window.location.href = `/client`;
              }
          }
          
    });
  //   setTimeout(()=>{

  // },1000)

    
    
  };

  
  const token = useSelector((state) => state?.login?.user?.tokenuigiugitygtyigtyi);
  const isLoading = useSelector((state) => state?.login?.isLoading);


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
          {token && token !== undefined && (<p>Login Again</p>)}

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
