import { useRouter } from "next/router";
import Wrapper from "../layout/Wrapper";
import Icon from "./Icon";
import Pill from "./Pill";

const MobileFilter: React.FC = () => {
  const filters = [
    "All",
    "Top Villa",
    "Free Reschedule",
    "Book Now, Pay later",
    "Self ChechIn",
    "Instant Book",
  ];

  const router = useRouter();
  const { query } = router;

  const updateQuery = (filter: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, filter }, // update or add params
      },
      undefined,
      { shallow: true } // optional, avoids full page reload
    );
  };

  return (
    <div className="md:hidden">
      <Wrapper className="flex gap-4 py-4 items-center">
        <button className="w-10 shrink-0 border-2 border-[#E9E9E9] grid place-items-center aspect-square rounded-full">
          <Icon name="Filter" size={24} />
        </button>
        <ul className="flex gap-4 flex-nowrap items-center overflow-x-scroll no-scrollbar">
          {filters.map((item) => (
            <li key={item}>
              <Pill
                border={`border-2 ${
                  query?.filter && query.filter == item
                    ? "border-[#34967C]"
                    : "border-[#E9E9E9]"
                }`}
                className={`py-2 px-4 font-semibold ${
                  query?.filter && query.filter == item ? "bg-[#F0FFFB]" : ""
                }`}
                onClick={() => {
                  updateQuery(item);
                }}
              >
                <button
                  className={`text-nowrap ${
                    query?.filter && query.filter == item
                      ? "text-[#34967C]"
                      : ""
                  }`}
                >
                  {item}
                </button>
              </Pill>
            </li>
          ))}
        </ul>
      </Wrapper>
    </div>
  );
};

export default MobileFilter;
