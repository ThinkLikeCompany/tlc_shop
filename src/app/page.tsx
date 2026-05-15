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
  "[edge-left] min(4.68vw,75px) [content] 1fr min(4.68vw,75px) [edge-right]";
const gridTemplateRows = `
[hero-start] min(67.6vh,811.5px) [hero-end
brands-start] min(11.6vh,139.5px) [brands-end
arrival-start] min(76.4vh,917.25px) [arrival-end
banner-start] min(60.5vh,726px) [banner-end
favourite-start] min(64.8vh,777.75px) [favourite-end
vouchers-start] min(95.8vh,1150px) [vouchers-end
community-start] min(43vh,467px) [community-end
sitemap-start] min(38vh,408.5px) [sitemap-end
]
`;

export default function Home() {
  const sitemapLinks = [
    { title: "Company", links: ["About", "Blog", "Jobs"] },
    { title: "Quick link", links: ["Help", "Support", "Contact"] },
    { title: "Legal", links: ["Terms", "Privacy"] },
  ];

  return (
    <div className="w-vw pt-[14vh]">
      <div
        className="mx-auto grid w-full max-w-[min(90vw,1440px)] bg-white"
        style={{ gridTemplateColumns, gridTemplateRows }}
      >
        <section
          aria-label="Hero Section"
          className="relative [grid-column:content] [grid-row:hero-start/hero-end] flex flex-col gap-5 pt-[min(2.8vh,34.5px)] pb-[min(49.5px,4.1vh)]"
        >
          <header className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image width={32} height={32} src="/logo32.ico" alt="tlc logo" />
              <span className="font-extrabold">TLC Shop</span>
            </div>
            <NavBarButtons />
          </header>
          <div className="relative flex-1 rounded-t-xl bg-gray-100"></div>
        </section>

        <div className="[grid-column:edge-left_/_edge-right] [grid-row:brands] flex h-full flex-row items-center justify-between bg-[#E8D96B]">
          {["Him", "Ober", "Shopify", "Lacoste", "Levi's", "amazon"].map(
            (item) => (
              <span key={item} className="text-white">
                {item}
              </span>
            ),
          )}
        </div>

        <section
          aria-label="new arrivals"
          className="[grid-column:content] [grid-row:arrival] flex min-w-0 flex-col gap-[min(6.25vh,75px)] pt-[min(49.5px,4.1vh)]"
        >
          <h4 className="text-[20px] leading-[1.5] font-black">
            {"New Arrivals".toUpperCase()}
          </h4>
          <div className="grid max-h-[min(606px,50.5vh)] flex-1 auto-cols-[min(363px,30.2vh)] grid-flow-col gap-16 overflow-x-auto">
            {[
              "Hoodies & Sweetshirt",
              "Coats & parkas",
              "Tees & T-Shirt",
              "Jeans",
              "Jackets",
            ].map((item) => (
              <div key={item} className="flex flex-col gap-2">
                <div className="max-h-[min(528px,44vh)] flex-1 bg-blue-300" />
                <div className="flex flex-col">
                  <span>{item}</span>
                  <span>Explore Now!</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="[grid-column:edge-left_/_edge-right] [grid-row:banner] bg-amber-500" />

        <section
          aria-label="Favourite Section"
          className="[grid-column:content] [grid-row:favourite] mt-[min(11.8vh,142.5px)] flex flex-col gap-9"
        >
          <h4 className="font-bold">{"Your Favourite".toUpperCase()}</h4>
          <div className="grid flex-1 grid-cols-[repeat(auto-fit,minmax(0,min(39vw,625.5px)))] justify-between gap-3">
            {["Trending on instagram", "All Under $40"].map((item) => (
              <div key={item} className="flex flex-col justify-between gap-2">
                <div className="max-h-[575px] flex-1 rounded-xl bg-green-300" />
                <div className="flex flex-col">
                  <span>{item}</span>
                  <span>Explore Now!</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-label="vouchers section"
          className="[grid-column:content] [grid-row:vouchers] mx-[min(88.5px,5.5vw)] my-[min(13.1vh,157.5px)] flex gap-8"
        >
          <div className="my-auto flex-1">
            <div className="flex max-w-[min(380px,23.7vw)] flex-col gap-6">
              <h4 className="text-left text-5xl font-bold">
                {"Download APP & Get The Voucher".toUpperCase()}
              </h4>
              <p className="text-left">
                Get 30% off for first transaction using Rondovising mobile app
                for now.
              </p>
              <div className="flex gap-4">
                <div className="h-12 w-[min(153px,9.5vw)] rounded-xl bg-blue-300"></div>
                <div className="h-12 w-[min(153px,9.5vw)] rounded-xl bg-blue-300"></div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-purple-200" />
        </section>

        <div className="[grid-column:edge-left_/_edge-right] [grid-row:community] flex flex-col items-center justify-center gap-2 bg-[#E5C643]">
          <h4 className="max-w-[40%] text-center text-[35px] font-bold text-white">
            {"JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO".toUpperCase()}
          </h4>
          <p className="text-[24px] text-[#fffcf8]">
            Type your email down below and be young wild generation
          </p>
          <div className="flex w-[clamp(0px,24%,574px)] items-center rounded-[10px] bg-white px-4 py-2">
            <Input
              type="email"
              placeholder="Add your email here"
              aria-label="Email address"
              autoComplete="email"
              className="border-none shadow-none focus-visible:border-transparent focus-visible:ring-0"
            />
            <Button type="submit" size="sm">
              Send
            </Button>
          </div>
        </div>
        <div
          className="[grid-column:edge-left_/_edge-right] [grid-row:sitemap] grid content-center items-start gap-4 bg-black px-[5%]"
          style={{ gridTemplateColumns: "3fr 2fr" }}
        >
          <div aria-label="sitemap-socials">
            <h4 className="text-[40px] font-black text-white">FASHION</h4>
            <p className="max-w-[240px] text-wrap text-[#8e8e8e]">
              Complete your style with awesome clothes from us.
            </p>
            <div className="my-4 flex flex-row gap-2">
              {[SiFacebook, SiInstagram, SiYoutube, SiGithub].map((Icon, i) => (
                <Icon
                  key={i}
                  className="h-6 w-6 rounded-md bg-[#e8d96b] p-1 text-black"
                />
              ))}
            </div>
          </div>
          <div
            aria-label="sitemap-links"
            className="grid gap-y-3"
            style={{
              gridTemplateColumns: `repeat(${sitemapLinks.length},minmax(0,1fr))`,
            }}
          >
            {sitemapLinks.flatMap(({ title, links }, col) => [
              <span
                key={`${col}-title`}
                className="font-bold text-[#D9D9D9]"
                style={{ gridColumn: col + 1, gridRow: 1 }}
              >
                {title}
              </span>,
              ...links.map((link, row) => (
                <span
                  key={`${col}-${row}`}
                  className="text-[#8E8E8E]"
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
