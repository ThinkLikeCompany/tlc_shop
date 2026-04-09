import { Box, Flex, Text, Grid, Heading } from "@radix-ui/themes";
import NavBarButtons from "./NavBarButtons";
import Image from "next/image";
export default function Home() {
  return (
    <Box className="background-color-layer w-dvw h-full" pt='12vh' px={{
      sm: '1',
      md: '3.5vw',
    }}>
      <Grid
        className="scroll-container max-w-[1140px] pt-[2vh] mx-auto w-full bg-white"
        columns="[edge-left] 4.5vh [content] 1fr 4.5vh [edge-right]"
        rows="[hero-start] min(86vh,970px) [hero-end banner-start] min(8vh,186px) [banner-end arrival-start] min(86vh,970px) [arrival-end] "
      >
        <Flex asChild direction="column" className="relative " gap="5" gridColumn="content" gridRow="hero">
          <section aria-label="Hero Section">
            <Flex asChild justify="between">
              <header>
                <Flex gap="2" className="items-center">
                  <Image width={32} height={32} src="/logo32.ico" alt="tlc logo"></Image>
                  <Text className="font-extrabold">TLC Shop</Text>
                </Flex>
                <NavBarButtons />
              </header>
            </Flex>
            <Box className="relative flex-1 rounded-t-xl bg-gray-100">TODO: Hero MainSection</Box>
          </section>
        </Flex>
        <Flex className="bg-[#E8D96B] px-[4.5vh]" gridColumn="edge-left / edge-right" gridRow="banner" align="center" direction="row" justify="between">
          {['Him', 'Ober', 'Shopify', 'Lacoste', "Levi's", 'amazon'].map(item => <Text key={item} className="text-white" color="purple">{item}</Text>)}
        </Flex>
        <Flex asChild gridColumn="content" gridRow='arrival' className="pt-[2vh]" gap="5" direction="column">
          <section aria-label="New Arrivals">
            <Heading
              as="h4"
              weight="bold"
            >{'New Arrivals'.toUpperCase()}</Heading>
            <Grid
              columns="repeat(3,1fr)"
              className="flex-1"
              rows="1fr"
              gap="5"
            >
              {['abc', 'cde', 'fex'].map(item =>
                <Flex direction="column" key={item}>
                  <Box className="bg-blue-300 flex-1 max-h-[704px]"></Box>
                  <Text key={item} className="text-white" color="purple">{item}</Text>
                </Flex>
              )}
            </Grid>
          </section>
        </Flex>
      </Grid>
    </Box>
  );
}
