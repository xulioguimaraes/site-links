import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  CircularProgress,
  useColorModeValue,
} from "@chakra-ui/react";

import { useState, useEffect, ReactNode } from "react";
import { child, get, ref, onValue, onChildChanged } from "firebase/database";
import { database } from "@/services/firebase";
import { IDataPage } from "@/types/IDataPage";
import { social } from "@/utils/mock-icons";

interface SocialProfileSimpleProps {
  dataPage: IDataPage;
}
export const SocialProfileSimple = ({ dataPage }: SocialProfileSimpleProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Center
      flexDirection={"column"}
      h={"100vh"}
      py={2}
      w={"100%"}
      background={dataPage["info-main"]?.background}
    >
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        p={2}
        background={dataPage["info-main"]?.background}
        textAlign={"center"}
      >
        <Avatar
          size={"2xl"}
          src={`${dataPage["info-main"]?.urlImage}`}
          mb={4}
          pos={"relative"}
        />
        {!isLoading && (
          <>
            {dataPage["info-main"]?.name && (
              <Heading
                fontSize={"lg"}
                fontFamily={"body"}
                color={dataPage["info-main"]?.colorTextName}
              >
                {dataPage["info-main"]?.name}
              </Heading>
            )}
            {dataPage["info-main"]?.addIstagram && (
              <Text
                fontSize={"sm"}
                fontWeight={600}
                color={dataPage["info-main"]?.colorTextInstagram}
                mb={4}
              >
                @{dataPage["info-main"]?.instagram}
              </Text>
            )}
            {dataPage["info-main"]?.resume && (
              <Text
                textAlign={"center"}
                px={3}
                color={dataPage["info-main"]?.colorTextResume}
                fontSize={"xs"}
              >
                {dataPage["info-main"]?.resume}
              </Text>
            )}

            <Stack mt={8}>
              {!!dataPage?.buttons &&
                Object.keys(dataPage?.buttons).map((item) => {
                  const dataItem = dataPage.buttons[item];

                  return (
                    <Button
                      key={item}
                      fontSize={"sm"}
                      rounded={"full"}
                      position={"relative"}
                      bg={dataItem.backgroundButton}
                      color={dataItem.colorTextButton}
                      boxShadow={
                        "0px 1px 10px -5px rgb(66 153 225 / 48%), 0 0px 0px -5px rgb(66 153 225 / 43%)"
                      }
                      onClick={() => {
                        window.location.href = dataItem.link;
                      }}
                    >
                      {dataItem.name}
                    </Button>
                  );
                })}
            </Stack>
            <Stack
              justifyContent={"center"}
              pt={6}
              direction={"row"}
              spacing={2}
            >
              {!!dataPage["social-media"] &&
                social.map((item) => {
                  const active = !!dataPage["social-media"][item.name]?.active;

                  return active ? (
                    <Box
                      cursor={"pointer"}
                      onClick={() =>
                        (window.location.href =
                          dataPage["social-media"][item.name]?.link)
                      }
                      key={item.name}
                      color={item.color}
                    >
                      {item.icon}
                    </Box>
                  ) : (
                    <></>
                  );
                })}
            </Stack>
          </>
        )}
      </Box>
      {isLoading && <CircularProgress />}
    </Center>
  );
};
