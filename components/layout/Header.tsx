import Image from "next/image";
import Wrapper from "./Wrapper";
import { HeaderIcon } from "../common/HeaderIcon";
import { ICONS } from "../../constants";
import Link from "next/link";
import ALXLogo from "../common/Logo";
import Pill from "../common/Pill";
import { User } from "../../public/assets/icons";
import { SearchBox } from "./SearchBox";

const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-[#34967C] py-4 max-[540px]:pt-8">
        <Wrapper className=" text-white font-semibold flex flex-nowrap gap-4 justify-center items-center md:gap-12 max-[540px]:text-xs">
          <div className="flex flex-nowrap items-center gap-3">
            <Image src="/assets/icons/case.svg" alt="" width="40" height="40" />
            <p>Overseas trip? Get the latest information on travel guides</p>
          </div>
          <button className="bg-[#161117] rounded-full py-1 px-2 text-nowrap">
            More Info
          </button>
        </Wrapper>
      </div>
      <div className="border-b border-b-[#EBEBEB] py-2">
        <Wrapper className="flex items-center justify-between gap-8">
          <Link href="/" className="hidden md:inline">
            <ALXLogo size={64} className="text-[#262626]" />
          </Link>

          <SearchBox />

          <div>
            <div className="hidden flex-nowrap gap-3 lg:flex">
              <Pill bg="bg-[#34967C]">
                <button className="text-white text-nowrap">Sign in</button>
              </Pill>
              <Pill border="border border-[#ECECEC]">
                <button className="text-black text-nowrap">Sign up</button>
              </Pill>
            </div>

            <div className="lg:hidden">
              <User width={40} className="text-[#34967C]" />
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="relative border-b border-b-[#FDFDFD] overflow-y-hidden">
        <div className="bg-white flex flex-nowrap gap-6 pt-6 pb2 overflow-auto no-scrollbar pl-[calc(1/24*100%)] pr-[calc(1/12*100%)] md:gap-10 md:pr-[calc(1/18*100%)]">
          <div className="absolute w-1/18 h-full top-0 left-0 md:w-1/24 bg-linear-to-r from-white to-transparent" />
          <div
            className="absolute w-1/12 h-full top-0 right-0 bg-linear-to-l from-white to-white/50 md:w-1/18"
            style={{
              boxShadow: "-5px 0px 10px 15px rgba(255,255,255,0.5)",
            }}
          />
          {ICONS.map((icon) => (
            <HeaderIcon
              description={icon.name}
              icon={icon.name}
              key={icon.name}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
