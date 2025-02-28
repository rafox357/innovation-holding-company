"use client";

import Link from "next/link";
import { MegaMenu } from "./mega-menu";
import { navigationTabs } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function MainNav() {
  return (
    <div className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block">
            Hubverse
          </span>
        </Link>

        <div className="flex flex-1 items-center space-x-4">
          <MegaMenu tabs={navigationTabs} />

          <div className="flex-1" />

          <div className="w-full max-w-sm items-center space-x-2 hidden lg:flex">
            <Search className="h-4 w-4 text-muted-foreground absolute ml-2" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8"
            />
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
