import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={inter.className}>
        <Button colorScheme="blue">
          <Link href="/about">Go To About Page</Link>
        </Button>
      </main>
    </>
  );
}
