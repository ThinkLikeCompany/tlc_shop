import { Box, Flex, Text, Button } from "@radix-ui/themes";
import Image from "next/image";
export default function Home() {
  return (
    <Box className="scroll-container w-dvw h-dvh" pt='12vh' px={{
      sm: '1',
      md: '3.5vw',
    }}>
      <Flex asChild direction="column" className="bg-white h-full rounded-xl max-w-[1140px] px-[4.5%] pt-[2%] mx-auto">
        <section aria-label="introduction">
          <Flex asChild justify="between">
            <header>
              <Flex gap="2" className="items-center">
                <Image width={32} height={32} src="/logo32.ico" alt="tlc logo"></Image>
                <Text className="font-extrabold">TLC Shop</Text>
              </Flex>
              <Flex gap="6">
                {['catalogue', 'fashion', 'favourite', 'lifestyle', 'setup'].map(item => <Button key={item} size="2" variant="ghost" className="mx-2">{item}</Button>)}
              </Flex>
            </header>
          </Flex>
        </section>
      </Flex>
    </Box>
  );
}
