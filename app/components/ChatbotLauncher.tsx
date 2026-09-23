"use client";

import { Button, IconButton } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const Chatbot = dynamic(() => import("./Chatbot"), {
  ssr: false,
  loading: () => null,
});

export default function ChatbotLauncher({
  floating = false,
}: {
  floating?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {floating ? (
        <IconButton
          aria-label="Open healthcare chatbot"
          icon={<HiOutlineChatBubbleLeftRight />}
          colorScheme="blue"
          onClick={() => setIsLoaded(true)}
          position="fixed"
          bottom="80px"
          right="20px"
          zIndex="50"
          borderRadius="50%"
          size="lg"
        />
      ) : (
        <Button
          onClick={() => setIsLoaded(true)}
          colorScheme="blue"
          variant="outline"
          borderRadius={5}
        >
          Chat With A HealthCare Bot
        </Button>
      )}

      {isLoaded && <Chatbot autoOpen showLaunchers={false} />}
    </>
  );
}
