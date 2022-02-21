import { Flex, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Flex>
      <Text
        fontSize={"8xl"}
        fontWeight={"bold"}
        bgGradient={"linear(to-b, #5ba6db, #3b6c8e)"}
        bgClip={"text"}
      >
        Next.js LN Boilerplate
      </Text>
    </Flex>
  );
}
