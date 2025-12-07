import Icon, { IconProps } from "./Icon";
import { useRouter } from "next/router";

interface ButtonProps {
  icon: IconProps["name"];
  description: string;
}
export const HeaderIcon: React.FC<ButtonProps> = ({ icon, description }) => {
  const router = useRouter();
  const { query } = router;

  const updateQuery = () => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, accomodation_type: icon }, // update or add params
      },
      undefined,
      { shallow: true } // optional, avoids full page reload
    );
  };

  return (
    <button
      className={`flex flex-col items-center px-px pb-4 border-b-4 font-medium text-xs ${
        query?.accomodation_type &&
        typeof query.accomodation_type === "string" &&
        query.accomodation_type.toLowerCase() === icon.toLowerCase()
          ? "border-b-[#0F4E3D] text-[#222222]"
          : "border-b-[#ffffff00] text-[#616161]"
      }`}
      onClick={updateQuery}
    >
      <Icon
        name={icon}
        active={
          query?.accomodation_type &&
          typeof query?.accomodation_type === "string"
            ? query.accomodation_type.toLowerCase() === icon.toLowerCase()
            : false
        }
        size={42}
      />
      <span>{description}</span>
    </button>
  );
};
