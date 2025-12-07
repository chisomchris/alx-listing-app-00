import Card from "../common/Card";
import Wrapper from "./Wrapper";

const Listing = ({ listings }: { listings: PropertyProps[] }) => {
  return (
    <Wrapper>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {listings.map((listing, key) => (
          <li key={key}>
            <Card listing={listing} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Listing;
