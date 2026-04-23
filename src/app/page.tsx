import { Box, Flex, Text, Grid, Heading, TextField, Button } from "@radix-ui/themes";
import NavBarButtons from "./NavBarButtons";
import Image from "next/image";
export default function Home() {
  return (
    <Box className="background-color-layer w-dvw h-full" pt='12vh' px={{
      sm: '1',
      md: '3.5vw',
    }}>
      <Grid
        className="scroll-container max-w-[1920px] pt-[2vh] mx-auto w-full bg-white"
        columns="[edge-left] 4.5vh [content] 1fr 4.5vh [edge-right]"
        rows="[hero-start] min(86vh,970px) [hero-end 
              brands-start] min(8vh,186px) [brands-end 
              arrival-start] min(86vh,970px) [arrival-end 
              banner-start] min(86vh,970px) [banner-end
              favourite-start] min(80vh,847px) [favourite-end
              vouchers-start] min(83vh,930px) [vouchers-end
              community-start] min(60vh,623px) [community-end
              ]">
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
        <Flex className="bg-[#E8D96B] px-[4.5vh]" gridColumn="edge-left / edge-right" gridRow="brands" align="center" direction="row" justify="between">
          {['Him', 'Ober', 'Shopify', 'Lacoste', "Levi's", 'amazon'].map(item => <Text key={item} className="text-white" color="purple">{item}</Text>)}
        </Flex>
        <Flex asChild gridColumn="content" gridRow='arrival' className="mt-[2vh]" gap="9" direction="column">
          <section aria-label="new arrivals">
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
              {['Hoodies & Sweetshirt', 'Coats & parkas', 'Tees & T-Shirt'].map(item =>
                <Flex direction="column" key={item} gap="2">
                  <Box className="bg-blue-300 flex-1 max-h-[704px]"></Box>
                  <Flex direction="column">
                    <Text key={item}>{item}</Text>
                    <Text>Explore Now!</Text>
                  </Flex>
                </Flex>
              )}
            </Grid>
          </section>
        </Flex>
        <Flex gridRow="banner" gridColumn="edge-left / edge-right" className="bg-amber-500"></Flex>
        <Flex asChild gridColumn="content" gridRow="favourite" className="mt-[min(4vh,190px)]" direction="column" gap="9">
          <section aria-label="Favourite Section">
            <Heading as='h4' weight="bold">{'Your Favourite'.toUpperCase()}</Heading>
            <Grid columns="repeat(2,1fr)" gap='3' className="flex-1" rows="1fr">
              {['Trending on instagram', 'All Under $40'].map(item =>
                <Flex key={item} direction="column" gap="2">
                  <Box className="bg-green-300 flex-1 max-h-[575px]"></Box>
                  <Flex direction="column">
                    <Text key={item}>{item}</Text>
                    <Text>Explore Now!</Text>
                  </Flex>
                </Flex>
              )}
            </Grid>
          </section>
        </Flex>
        <Flex asChild gridColumn="content" gridRow="vouchers" className="mx-[min(118px,9vh)] my-[min(2vh,220px)]" justify="between">
          <section aria-label="vouchers section">
            <Flex className=" flex-1 mr-[min(340px,25%)]" justify="center" direction="column" align="center" gap="3">
              <Heading as='h4' weight="bold" className="text-5xl text-center max-w-[65%]">{'Download APP & Get The Voucher'.toUpperCase()}</Heading>
              <Text className="max-w-[60%] text-center">Get 30% off for firsttransaction using Rondovising mobile app for now.</Text>
              <Flex gap="2" className="w-full h-[min(7%,204px)]" justify="center">
                <Box className="bg-emerald-300  h-full w-[min(20%,204px)]"></Box>
                <Box className="bg-emerald-300  h-full w-[min(20%,204px)]"></Box>
              </Flex>
            </Flex>
            <Box className="bg-purple-200 flex-1">

            </Box>
          </section>
        </Flex>
        <Flex gridRow="community" gridColumn="edge-left / edge-right" className="bg-[#E5C643]" align="center" justify="center" direction="column" gap="2">
          <Heading size="8" as="h4" weight="bold" className="text-white max-w-[40%] text-center">{'JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO'.toUpperCase()}</Heading>
          <Text size='4' className="text-[#fffcf8] text-[32px]">{'Type your email down below and be young wild generation'}</Text>
          <div className="flex items-center bg-white rounded-[10px] py-2 px-4 w-[clamp(0px,24%,574px)]">
            <input type="email" placeholder="Add your email here" aria-label="Email address" autoComplete="email" className="flex-1 outline-none bg-transparent text-sm placeholder:text-gray-400" />
            <button className="shrink-0 bg-black text-white py-1 px-4 rounded-md text-sm transition-transform active:scale-95">Send</button>
          </div>
        </Flex>
      </Grid>
    </Box>
  );
}
