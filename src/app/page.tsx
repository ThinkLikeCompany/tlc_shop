import { Box, Flex, Text } from "@radix-ui/themes";
import NavBarButtons from "./NavBarButtons";
import Image from "next/image";
export default function Home() {
  return (
    <Box className="w-dvw h-dvh" pt='12vh' px={{
      sm: '1',
      md: '3.5vw',
    }}>
      <Box className="scroll-container max-w-[1140px] px-[4.5%] pt-[2%] mx-auto w-full bg-white">
        <Flex asChild direction="column" className="relative h-[min(82vh,852px)]" gap="5">
          <section aria-label="introduction">
            <Flex asChild justify="between">
              <header>
                <Flex gap="2" className="items-center">
                  <Image width={32} height={32} src="/logo32.ico" alt="tlc logo"></Image>
                  <Text className="font-extrabold">TLC Shop</Text>
                </Flex>
                <NavBarButtons />
              </header>
            </Flex>
            <Box className="relative flex-1 rounded-xl bg-gray-100">TODO: Hero MainSection</Box>
          </section>
        </Flex>
        <Flex>Hello</Flex>
      </Box>
    </Box>
  );
}
