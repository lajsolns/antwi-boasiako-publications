"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BooksRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/books/gallery");
  }, [router]);

  return null;
}
