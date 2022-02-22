import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Hero } from "shared/components/Hero/Hero";
import { Button } from "components/Button/Button";

const Home: NextPage = () => {
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Hero />
      <Button />
    </Flex>
  );
};

export default Home;
