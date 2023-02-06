import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Input, Button, Flex, Container } from "@chakra-ui/react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <main className={inter.className}>
        <Container m={4} p={0}>
          <Flex gap={2}>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search area ..."
              focusBorderColor="teal.600"
              w={60}
            />
            <Button colorScheme="teal">Search</Button>
          </Flex>
        </Container>
      </main>
    </>
  );
}
