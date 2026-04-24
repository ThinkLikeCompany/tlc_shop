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
  "[edge-left] 4.5vh [content] 1fr 4.5vh [edge-right]";
const gridTemplateRows = `
[hero-start] min(86vh,970px) [hero-end
brands-start] min(8vh,186px) [brands-end
arrival-start] min(86vh,970px) [arrival-end
banner-start] min(86vh,970px) [banner-end
favourite-start] min(80vh,847px) [favourite-end
vouchers-start] min(83vh,930px) [vouchers-end
community-start] min(60vh,623px) [community-end
sitemap-start] min(43vh,545px) [sitemap-end
]
`;

export default function Home() {
  const sitemapLinks = [
    { title: "Company", links: ["About", "Blog", "Jobs"] },
    { title: "Quick link", links: ["Help", "Support", "Contact"] },
    { title: "Legal", links: ["Terms", "Privacy"] },
  ];

  return (
    <div className="h-full w-dvw px-1 pt-[12vh] md:px-[3.5vw]">
      <div
        className="mx-auto grid w-full max-w-[1920px] bg-white pt-[2vh]"
        style={{ gridTemplateColumns, gridTemplateRows }}
      >
        <section
          aria-label="Hero Section"
          className="relative [grid-column:content] [grid-row:hero] flex flex-col gap-5"
        >
          <header className="flex justify-between">
            <div className="flex items-center gap-2">
              <Image width={32} height={32} src="/logo32.ico" alt="tlc logo" />
              <span className="font-extrabold">TLC Shop</span>
            </div>
            <NavBarButtons />
          </header>
          <div className="relative flex-1 rounded-t-xl bg-gray-100">
            TODO: Hero MainSection
          </div>
        </section>

        <div className="[grid-column:edge-left_/_edge-right] [grid-row:brands] flex flex-row items-center justify-between bg-[#E8D96B] px-[4.5vh]">
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
          className="[grid-column:content] [grid-row:arrival] mt-[2vh] flex flex-col gap-9"
        >
          <h4 className="font-bold">{"New Arrivals".toUpperCase()}</h4>
          <div className="grid flex-1 grid-cols-3 gap-5">
            {["Hoodies & Sweetshirt", "Coats & parkas", "Tees & T-Shirt"].map(
              (item) => (
                <div key={item} className="flex flex-col gap-2">
                  <div className="max-h-[704px] flex-1 bg-blue-300" />
                  <div className="flex flex-col">
                    <span>{item}</span>
                    <span>Explore Now!</span>
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        <div className="[grid-column:edge-left_/_edge-right] [grid-row:banner] bg-amber-500" />

        <section
          aria-label="Favourite Section"
          className="[grid-column:content] [grid-row:favourite] mt-[min(4vh,190px)] flex flex-col gap-9"
        >
          <h4 className="font-bold">{"Your Favourite".toUpperCase()}</h4>
          <div className="grid flex-1 grid-cols-2 gap-3">
            {["Trending on instagram", "All Under $40"].map((item) => (
              <div key={item} className="flex flex-col gap-2">
                <div className="max-h-[575px] flex-1 bg-green-300" />
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
          className="[grid-column:content] [grid-row:vouchers] mx-[min(118px,9vh)] my-[min(2vh,220px)] flex justify-between"
        >
          <div className="mr-[min(340px,25%)] flex flex-1 flex-col items-center justify-center gap-3">
            <h4 className="max-w-[65%] text-center text-5xl font-bold">
              {"Download APP & Get The Voucher".toUpperCase()}
            </h4>
            <p className="max-w-[60%] text-center">
              Get 30% off for first transaction using Rondovising mobile app for
              now.
            </p>
            <div className="flex h-[min(7%,204px)] w-full justify-center gap-2">
              <div className="h-full w-[min(20%,204px)] bg-emerald-300" />
              <div className="h-full w-[min(20%,204px)] bg-emerald-300" />
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
