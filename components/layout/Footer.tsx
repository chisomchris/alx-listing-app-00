import Link from "next/link";
import Wrapper from "./Wrapper";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 relative bg-[#222222] text-[#CACACA] font-medium max-[540px]:text-xs">
      <div className="absolute w-full h-6 bg-[#34967C] top-0 left-0 right-0" />
      <Wrapper>
        <section className="flex flex-col gap-x-24 gap-y-8 pb-12 xl:flex-row">
          <div className="max-w-[745px] xl:max-w-[520px]">
            <h1 className="text-white font-bold text-5xl pb-6">alx</h1>
            <p className="max-[540px]:text-xs leading-5">
              ALX is a platform where travelers can discover and book unique,
              comfortable, and affordable lodging options worldwide. From cozy
              city apartments and tranquil countryside retreats to exotic
              beachside villas, ALX connects you with the perfect place to stay
              for any trip.
            </p>
          </div>
          <div className="grid grid-cols-2 w-11/12 mx-auto font-medium gap-x-16 min-[640px]:grid-cols-3">
            <div>
              <h3 className="font-semibold pb-1 pt-4 text-[16px]">Explore</h3>
              <ul className="grid gap-2.5 pt-7">
                <li>
                  <Link href="">Apartments in Dubai</Link>
                </li>
                <li>
                  <Link href="">Hotels in New York</Link>
                </li>
                <li>
                  <Link href="">Villa in Spain</Link>
                </li>
                <li>
                  <Link href="">Mansion in Indonesia</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold pb-1 pt-4 text-[16px]">Company</h3>
              <ul className="grid gap-2.5 pt-7">
                <li>
                  <Link href="">About Us</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Career</Link>
                </li>
                <li>
                  <Link href="">Customers</Link>
                </li>
                <li>
                  <Link href="">Brand</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold pb-1 pt-4 text-[16px]">Help</h3>
              <ul className="grid gap-2.5 pt-7">
                <li>
                  <Link href="">Support</Link>
                </li>
                <li>
                  <Link href="">Cancel booking</Link>
                </li>
                <li>
                  <Link href="">Refunds Process</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="h-px bg-[#ffffff22] w-full" />
        <section className="pt-6 flex flex-col gap-8 justify-between xl:flex-row">
          <p className="text-center leading-6">
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details{" "}
            <Link href="/" className="text-[#34967C]">
              here
            </Link>
          </p>
          <ul className="flex items-center gap-6 justify-center">
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
            <li>
              <Link href="/">Policy service</Link>
            </li>
            <li>
              <Link href="/">Cookies Policy</Link>
            </li>
          </ul>
        </section>
      </Wrapper>
    </footer>
  );
};

export default Footer;
