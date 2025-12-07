import { useRouter } from "next/router";
import Wrapper from "../layout/Wrapper";
import Icon from "./Icon";
import Pill from "./Pill";

const DesktopFilter: React.FC = () => {
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
    <div className="hidden md:block">
      <Wrapper className="flex gap-8 py-4 items-center justify-between">
        <div className="@container flex-1 flex gap-4 overflow-x-hidden">
          <ul className="flex gap-4 flex-nowrap items-center">
            {filters.slice(0, 4).map((item) => (
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
          <ul className="flex gap-4 flex-nowrap items-center @max-[800px]:hidden">
            {filters.slice(4).map((item) => (
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
        </div>

        <ul className="flex gap-4 flex-nowrap items-center">
          <Pill
            border="border-2 border-[#E9E9E9]"
            className="py-2 px-2 lg:px-4"
          >
            <span className="text-[#161117] font-semibold hidden lg:inline">
              Filter
            </span>{" "}
            <Icon name="Filter" size={24} />
          </Pill>
          <Pill
            border="border-2 border-[#E9E9E9]"
            className="py-2 px-4 text-nowrap"
          >
            <span className="text-[#8C8C8C] font-semibold">Filter :</span>
            <p className="text-[#161117] font-semibold">Highest Price</p>
          </Pill>
        </ul>
      </Wrapper>
    </div>
  );
};

export default DesktopFilter;
