import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-100 py-12 md:py-16 lg:py-20 text-muted-foreground m-auto">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 m-auto md:px-6">
        {/* Company Info Section */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            <span className="text-[#4A60FF]">BCQ</span> Crypto
          </h3>
          <p className="max-w-xs text-sm">
            {
              "Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system."
            }
          </p>
        </div>

        {/* Important Links Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">
            Important links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Agent Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Prices
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Tax
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">
            Get in Touch
          </h4>
          <p className="text-sm">
            {"Question or feedback? We'd love to hear from you."}
          </p>
          <Input
            type="email"
            placeholder="Your email"
            className="max-w-sm bg-white"
          />
        </div>
      </div>

      {/* Copyright and Policy Section */}
      <div className="container m-auto mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm ">
        <p className="mb-4 md:mb-0">{"Copyright © BCQ 2021"}</p>
        <div className="flex space-x-4">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
