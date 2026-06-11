import NavBarButtons from "./NavBarButtons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const gridTemplateColumns =
  "[edge-left] clamp(16px,4.68vw,75px) [content] 1fr clamp(16px,4.68vw,75px) [edge-right]";
const gridTemplateRows = `
[hero-start] min(50.72vw,811.5px) [hero-end
brands-start] min(8.72vw,139.5px) [brands-end
arrival-start] min(57.33vw,917.25px) [arrival-end
banner-start] min(45.38vw,726px) [banner-end
favourite-start] min(48.61vw,777.75px) [favourite-end
vouchers-start] min(53.9vw,862.5px) [vouchers-end
community-start] min(29.19vw,467px) [community-end
sitemap-start] min(25.53vw,408.5px) [sitemap-end
]
`;

export default function Home() {
  const sitemapLinks = [
    { title: "Company", links: ["About", "Blog", "Jobs"] },
    { title: "Quick link", links: ["Help", "Support", "Contact"] },
    { title: "Legal", links: ["Terms", "Privacy"] },
  ];

  return (
    <div className="w-vw pt-[10.5vw]">
      <div
        className="mx-auto grid w-full max-w-[clamp(375px,90vw,1440px)] bg-white"
        style={{ gridTemplateColumns, gridTemplateRows }}
      >
        <section
          aria-label="Hero Section"
          className="relative [grid-column:content] [grid-row:hero-start/hero-end] flex flex-col gap-1 pt-[min(2.16vw,34.5px)] pb-[min(49.5px,3.09vw)] sm:gap-2"
        >
          <header className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image
                width={32}
                height={32}
                src="/logo32.ico"
                alt="tlc logo"
                className="h-6 w-6 md:h-8 md:w-8"
              />
              <span className="text-[clamp(14px,1.25vw,18px)] font-extrabold">
                TLC Shop
              </span>
            </div>
            <NavBarButtons />
          </header>
          <div className="relative flex flex-1 flex-row gap-[min(2.01vw,32.25px)] rounded-xl bg-gray-100 px-[min(3.79vw,60.75px)]">
            <div className="flex-[606] pt-[min(3.6vw,57.75px)]">
              <h1 className="font-poppins text-[min(72px,4.5vw)]/[1.2] font-black">
                <span className="relative isolate block before:absolute before:inset-0 before:right-1/4 before:-left-[1/24*100%] before:-z-10 before:-rotate-2 before:bg-white">
                  {"LET'S"}
                </span>
                <span className="block">{"EXPLORE"}</span>
                <span className="relative isolate block before:absolute before:inset-0 before:right-1/4 before:-left-[1/24*100%] before:-z-10 before:-rotate-2 before:bg-[#EBD96D]">
                  {"UNIQUE"}
                </span>
                <span className="block">{"CLOTHES"}</span>
              </h1>
              <p className="mt-[min(1.87vw,30px)] text-[min(24px,1.5vw)]">
                Live for Influential and Innovative fashion!
              </p>
              <Button className="mt-[min(24px,1.5vw)] h-[min(61.5px,3.84vw)] w-[min(165.75px,10.35vw)] rounded-xs text-[min(16.875px,1.05vw)] font-medium uppercase transition-none">
                Shop Now
              </Button>
            </div>
            <div className="relative flex-[871]">
              <Image
                alt="hero image"
                src="/HeroSectionGirl.png"
                fill
                className="object-contain"
              ></Image>
            </div>
          </div>
        </section>

        <div className="[grid-column:edge-left_/_edge-right] [grid-row:brands] flex h-full flex-row items-center justify-between bg-[#E8D96B] px-[8.9%]">
          {[
            { name: "H&M", file: "HM.svg" },
            { name: "Obey", file: "OBEY.svg" },
            { name: "Shopify", file: "shopify.svg" },
            { name: "Lacoste", file: "LACOSTE.svg" },
            { name: "Levi's", file: "LEVIs.svg" },
            { name: "Amazon", file: "amazon.svg" },
          ].map(({ name, file }) => (
            <div key={name} className="relative h-[40%] w-[10%] min-w-[40px]">
              <Image
                src={`/BrandLogos/${file}`}
                alt={name}
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>

        <section
          aria-label="new arrivals"
          className="[grid-column:content] [grid-row:arrival] flex min-w-0 flex-col gap-[min(4.69vw,75px)] pt-[min(49.5px,3.09vw)]"
        >
          <h4 className="text-[clamp(14px,1.39vw,20px)] leading-[1.5] font-black">
            {"New Arrivals".toUpperCase()}
          </h4>
          <div className="grid max-h-[min(606px,37.88vw)] flex-1 auto-cols-[min(363px,22.69vw)] grid-flow-col justify-center-safe gap-[clamp(8px,4.44vw,64px)] overflow-x-auto">
            {[
              { label: "Hoodies & Sweetshirt", image: "/Arrivals/Hoodies.png" },
              { label: "Coats & parkas", image: "/Arrivals/Coats.png" },
              { label: "Tees & T-Shirt", image: "/Arrivals/Tees.png" },
              { label: "Coats & parkas", image: "/Arrivals/Coats.png" },
              { label: "Tees & T-Shirt", image: "/Arrivals/Tees.png" },
            ].map(({ label, image }, index) => (
              <div key={label + index} className="flex flex-col gap-2">
                <div className="relative max-h-[min(528px,33vw)] flex-1">
                  <Image
                    src={image}
                    alt={label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="truncate text-[clamp(10px,2.06vw,33px)]">
                    {label}
                  </span>
                  <span className="truncate text-[clamp(8px,1.5vw,24px)]">
                    Explore Now!
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="relative [grid-column:edge-left_/_edge-right] [grid-row:banner] flex flex-row bg-gradient-to-t from-[#E0C340] to-[#F9DF56]">
          <div className="relative w-[calc(100%_*_991_/_1923)] flex-none overflow-hidden">
            <div className="absolute inset-0">
              <Image
                alt="hero image"
                src="/BannerGirl.png"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-t from-[#E0C340] to-[#F9DF56]">
            <h1 className="font-poppins mt-[min(96.09px,6vw)] font-black">
              <span className="relative isolate inline text-[min(72px,4.5vw)]/[1.37] uppercase before:absolute before:inset-0 before:-right-[1/24*100%] before:-left-[1/24*100%] before:-z-10 before:-rotate-2 before:bg-white">
                {"payday"}
              </span>
              <span className="block text-[min(72px,4.5vw)]/[1.37] uppercase">
                {"sale now"}
              </span>
            </h1>
            <p className="mt-[min(1.54vw,24.75px)] max-w-[69%] text-[min(24px,1.5vw)]">
              {
                "Spend minimal $100 get 30% off voucher code for your nextpurchase"
              }
            </p>
            <p className="mt-[min(1.54vw,24.75px)] max-w-[69%] text-[min(24px,1.5vw)] font-bold">
              {"1 June - 10 June 2021"}
            </p>
            <p className="max-w-[69%] text-[min(24px,1.5vw)]">
              {"*Terms & Conditions apply"}
            </p>
            <Button className="mt-[min(24px,1.5vw)] h-[min(61.5px,3.84vw)] w-[min(165.75px,10.35vw)] rounded-xs text-[min(16.875px,1.05vw)] font-medium uppercase transition-none">
              Shop Now
            </Button>
          </div>
        </div>

        <section
          aria-label="Favourite Section"
          className="[grid-column:content] [grid-row:favourite] mt-[min(8.91vw,142.5px)] flex flex-col gap-[min(78px,4.8vw)]"
        >
          <h4 className="text-[min(36,2.25vw)] font-bold uppercase">
            {"Your Favourite"}
          </h4>
          <div className="grid flex-1 grid-cols-[repeat(auto-fit,min(39vw,625.5px))] justify-between">
            {[
              {
                label: "Trending on instagram",
                img: "/favourites/favourite-trending.png",
              },
              {
                label: "All Under $40",
                img: "/favourites/favourite-under.png",
              },
            ].map((item, index) => (
              <div
                key={item.label + index}
                className="flex flex-col justify-between"
              >
                <div className="relative max-h-[575px] flex-1 overflow-hidden rounded-xl">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <div className="flex flex-col">
                  <span className="text-[min(1.39vw,20px)]">{item.label}</span>
                  <span className="text-[min(1.11vw,16px)]">Explore Now!</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-label="vouchers section"
          className="[grid-column:content] [grid-row:vouchers] mx-[min(89.25px,5.57vw)] my-[min(165px,10.31vw)] flex flex-row justify-between gap-[min(228.75px,14.29vw)]"
        >
          <div className="align-center flex flex-[507] flex-col justify-center text-left">
            <h4 className="text-[min(36px,2.25vw)]/[1.5] font-bold uppercase">
              {"DOWNLOAD APP & GET THE VOUCHER!"}
            </h4>
            <p className="mt-[min(1.92vw,30.75px)] text-[min(18px,1.1vw)]/[1.45]">
              {
                "Get 30% off for first transaction using Rondovision mobile app for now."
              }
            </p>
            <div className="mt-[min(3.04vw,48.75px)] flex flex-row justify-start gap-[min(14.25px,0.9vw)]">
              <div className="relative h-[min(53.25px,3.32vw)] w-[min(153px,9.56vw)] overflow-hidden rounded-xs">
                <Image
                  fill
                  alt="app store"
                  src="/Downloads/appleStore.png"
                  className="object-contain"
                ></Image>
              </div>
              <div className="relative h-[min(53.25px,3.32vw)] w-[min(153px,9.56vw)] overflow-hidden">
                <Image
                  fill
                  alt="google store"
                  src="/Downloads/googleStore.png"
                  className="object-contain"
                ></Image>
              </div>
            </div>
          </div>
          <div className="relative flex-[671] overflow-hidden">
            <Image
              fill
              alt="match your style"
              src="/Downloads/Iphone.png"
              className="object-contain"
            ></Image>
          </div>
        </section>

        <div className="[grid-column:edge-left_/_edge-right] [grid-row:community] flex flex-col items-center justify-center bg-[#E5C643]">
          <h4 className="max-w-[50%] text-center text-[min(2.6vw,42.65px)]/[1.27] font-bold text-white">
            {"JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO".toUpperCase()}
          </h4>
          <p className="mt-[min(1.73vw,27.75px)] text-[min(1.5vw,24px)] text-[#fffcf8]">
            Type your email down below and be young wild generation
          </p>
          <div className="mt-[min(2.29vw,36.75px)] flex h-[min(4.07vw,65.25px)] w-[30%] items-center bg-white px-0.5">
            <Input
              type="email"
              placeholder="Add your email here"
              aria-label="Email address"
              autoComplete="email"
              className="border-none text-[min(18px,1.1vw)] shadow-none focus-visible:border-transparent focus-visible:ring-0"
            />
            <Button className="h-[min(50.25px,3.14vw)] rounded-sm text-[min(1.54vw,24.75px)]">
              Send
            </Button>
          </div>
        </div>
        <div
          className="[grid-column:edge-left_/_edge-right] [grid-row:sitemap] grid content-center items-start bg-black px-[5.2%]"
          style={{ gridTemplateColumns: "415fr 415fr 890fr" }}
        >
          <div aria-label="sitemap-socials">
            <h4 className="text-[min(1.875vw,30px)] font-black text-white">
              FASHION
            </h4>
            <p className="text-[min(1.12vw,18px)] text-wrap text-[#8e8e8e]">
              Complete your style with awesome clothes from us.
            </p>
            <div className="mt-[min(24px,1.5vw)] flex flex-row gap-[3.37%]">
              {[SiFacebook, SiInstagram, SiYoutube, SiGithub].map((Icon, i) => (
                <Icon
                  key={i}
                  className="h-[clamp(16px,2.43vw,39px)] w-[clamp(16px,2.43vw,39px)] rounded-md bg-[#e8d96b] p-1 text-black"
                />
              ))}
            </div>
          </div>
          <div
            aria-label="sitemap-links"
            className="grid gap-y-[min(1.5vw,24px)]"
            style={{
              gridColumnStart: 3,
              gridTemplateColumns: `repeat(${sitemapLinks.length},minmax(0,1fr))`,
            }}
          >
            {sitemapLinks.flatMap(({ title, links }, col) => [
              <span
                key={`${col}-title`}
                className="text-[min(18px,1.12vw)] font-bold text-[#D9D9D9]"
                style={{ gridColumn: col + 1, gridRow: 1 }}
              >
                {title}
              </span>,
              ...links.map((link, row) => (
                <span
                  key={`${col}-${row}`}
                  className="text-[min(18px,1.12vw)] text-[#8E8E8E]"
                  style={{ gridColumn: col + 1, gridRow: row + 2 }}
                >
                  {link}
                </span>
              )),
            ])}
          </div>
        </div>
      </div>
    </div>
  );
}
