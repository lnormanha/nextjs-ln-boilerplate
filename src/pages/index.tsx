import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Hero } from "shared/components/Hero/Hero";

const Home: NextPage = () => {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Hero />
    </Flex>
  );
};

export default Home;
