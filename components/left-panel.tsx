"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";

const LeftPanel = () => {
  return (
    <div
      key="left-panel"
      className="shadow-grid rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center @container"
    >
      {/* Top Container */}
      <div className="relative overflow-hidden">
      <div className="pt-6 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg pb-4">
            <h1 className="text-4xl font font-extrabold tracking-tight text-primary sm:text-6xl">
            <span className="text-white">Hey ich bin </span><br />
            Niklas Steenfatt
            </h1>
            <p className="mt-4 text-xl text-neutral-500">
            Hey! Ich bin Informatiker, YouTuber, Podcaster und ein leidenschaftlicher Lerner.
Nach ein paar Jahren bei Facebook arbeite ich jetzt daran, die größte Schule der Welt aufzubauen.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8 transform lg:rotate-2">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <Image
                          src="/1.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <Image
                           src="/2.webp"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <Image
                          src="/3.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <Image
                           src="/4.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <Image
                           src="/5.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <Image
                          src="/6.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <Image
                           src="/7.webp"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <Image
                           src="/8.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <Image
                          src="/3.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <Image
                           src="/5.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                          width={900}
                          height={900}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default LeftPanel;
