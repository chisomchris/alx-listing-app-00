import Image from "next/image";
import Pill from "./Pill";
import Icon from "./Icon";
import { Star } from "../../public/assets/icons";

const Card = ({ listing }: { listing: PropertyProps }) => {
  return (
    <div className="pb-6 text-[#161117]">
      <Image
        src={listing.image}
        alt={listing.name}
        width={300}
        height={200}
        className="w-full rounded-md"
      />
      <div>
        {listing?.category && (
          <ul className="flex gap-2 py-3 text-[#161117] font-medium overflow-auto no-scrollbar">
            {listing.category.map((category) => (
              <li key={category}>
                <Pill bg="bg-[#F9F9F9] text-nowrap text-xs">{category}</Pill>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-between items-start gap-4">
        <h2 className="font-semibold text-lg">{listing.name}</h2>

        <p className="font-medium text-xl inline-flex items-center gap-1">
          <Star width={20} /> {listing.rating}
        </p>
      </div>
      <p className="font-medium text-md">
        {listing.address.city}, {listing.address.country}
      </p>
      <div className="pt-8 pb-4 flex items-center justify-between gap-4">
        <Pill border="border boder-[#E9E9E9]" className="px-4 py-2">
          <Icon name="Bed" size={16} />
          {listing.offers.bed}
          <Icon name="Bathtub" size={16} />
          {listing.offers.shower} <Icon name="People" size={16} />
          {listing.offers.occupants}{" "}
        </Pill>
        <p className="font-semibold text-2xl">
          ${listing.price}
          <sub>/n</sub>
        </p>
      </div>
    </div>
  );
};

export default Card;
