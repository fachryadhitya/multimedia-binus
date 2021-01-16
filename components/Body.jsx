import Writing from "../icons/writing.svg";
import Study from "../icons/study.svg";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Button,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Body = () => {
  return (
    <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row justify-around ">
      <div className="shake-bottom order-1 mt-6 lg:mt-0 lg:order-first nameText self-center lg:self-start lg:text-left text-xl md:text-2xl lg:text-3xl text-yellow-primary lg:mr-10 mb-3 lg:mb-0">
        <Menu placement="bottom" size="sm">
          <MenuButton
            borderRadius="10px"
            as={Button}
            bgColor="#333"
            rightIcon={<ChevronDownIcon />}
            padding="0.5rem"
          >
            Our Talented Group
          </MenuButton>
          <MenuList
            bgColor="#363635"
            padding="0.5rem"
            borderRadius="10px"
            className="text-sm lg:text-2xl"
          >
            <MenuItem minH="48px" mb="10px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/Itop.svg"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <div className="flex flex-col">
                <p>Christophe Pratihata</p>
                <p>2301861964</p>
              </div>
            </MenuItem>

            <MenuItem minH="48px" mb="10px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/fachry.svg"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <div className="flex flex-col">
                <p>Fachry Adhitya</p>
                <p>2301932595</p>
              </div>
            </MenuItem>

            <MenuItem minH="48px" mb="10px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/Leo.svg"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <div className="flex flex-col">
                <p>Leonardo Ignatius</p>
                <p>2301853123</p>
              </div>
            </MenuItem>

            <MenuItem minH="48px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="/Rei.svg"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <div className="flex flex-col">
                <p>Reinaldy Sukamto</p>
                <p>2301853136</p>
              </div>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div className="flex flex-col">
        <video
          style={{ width: "885px", borderRadius: "20px" }}
          autoPlay
          controls
          className="tilt-in-bl"
        >
          <source src="/mulmed.mp4" type="video/mp4" />
        </video>

        <div className="flex flex-col md:flex-row justify-around">
          <Writing className="lg:h-96 max-w-full" />
          <Study className="lg:h-96 mt-8 lg:mt-0 max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Body;
