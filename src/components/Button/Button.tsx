import { Flex, Button as ChakraButton } from "@chakra-ui/react";

export function Button() {
  return (
    <Flex>
      <ChakraButton
        bgGradient={"linear(to-b, #5ba6db, #3b6c8e)"}
        _hover={{
          bgGradient: "linear(to-b,#3b6c8e, #5ba6db, )",
          color: "#fff",
        }}
        textColor={"#fff"}
      >
        This is a button (for this project)
      </ChakraButton>
    </Flex>
  );
}
