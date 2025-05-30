"use client";
import Head from "next/head";
import NavBar from "pdfequips-navbar/NavBar";
import Tool from "../components/Tool";
import { OpenGraph } from "pdfequips-open-graph/OpenGraph";
import { fetchSubscriptionStatus } from "@/src/checkSubscriptionStatus";
import {
  edit_page,
  errors,
  tool,
  tools,
  downloadFile,
  toType,
} from "../src/content/content";
import { useRouter } from "next/router";
import { howToSchemas, howToType } from "@/src/how-to/how-to";
import { Features } from "@/components/Features";
import { Footer } from "pdfequips-footer/components/Footer";

import HowTo from "@/components/HowTo";
import Script from 'next/script'
import { useState, useCallback, useEffect } from "react";

export type data_type = {
  title: string;
  seoTitle: string;
  description: string;
  color: string;
  type: string;
  to: toType;
  keywords: string;
  features?: {
    title: string;
    description: string;
  }[] | undefined
};

export async function getStaticPaths() {
  const paths = Object.keys(routes).map((key) => ({
    params: { tool: key.substring(1) },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: {
    tool: string;
  };
}) {
  const initialPremiumStatus = await fetchSubscriptionStatus();
  const item = routes[`/${params.tool}` as keyof typeof routes].item;
  return { props: { item, initialPremiumStatus } };
}

export const routesMap = {
  JPGToPDFHOWTO: "/jpg-to-pdf",
  PDFToJPGHOWTO: "/pdf-to-jpg",
  PNGToPDFHOWTO: "/png-to-pdf",
  PDFToPNGHOWTO: "/pdf-to-png",
  GIFToPDFHOWTO: "/gif-to-pdf",
  PDFToGIFHOWTO: "/pdf-to-gif",
  TIFFToPDFHOWTO: "/tiff-to-pdf",
  PDFToTIFFHOWTO: "/pdf-to-tiff",
  BMPToPDFHOWTO: "/bmp-to-pdf",
  PDFToBMPHOWTO: "/pdf-to-bmp",
  SVGToPDFHOWTO: "/svg-to-pdf",
  PDFToSVGHOWTO: "/pdf-to-svg",
  WebPToPDFHOWTO: "/webp-to-pdf",
  PDFToWEBPHOWTO: "/pdf-to-webp",
  HEIFToPDFHOWTO: "/heif-heic-to-pdf",
  PDFToHEIFHOWTO: "/pdf-to-heif-heic",
  HEICToPDFHOWTO: "/heif-heic-to-pdf",
  ImageToPDFHOWTO: "/image-to-pdf",
  PDFToImageHOWTO: "/pdf-to-image"
};

export default ({ item, initialPremiumStatus }: { item: data_type, initialPremiumStatus: boolean }) => {
  const router = useRouter();
  const { asPath } = router;
  const matchingKey = Object.keys(routesMap).find(
    (key) => routesMap[key as keyof typeof routesMap] === item.to
  );
  const currentHowTo = matchingKey
    ? howToSchemas[matchingKey as keyof typeof howToSchemas]
    : null;
  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: `PDFEquips ${item.title}`,
    description: item.description,
    url: `https://www.pdfequips.com${asPath}`,
  };
  const [isPremium, setIsPremium] = useState(initialPremiumStatus);
  const [isLoaded, setIsLoaded] = useState(false);
  const checkStatus = useCallback(async () => {
    try {
      const status = await fetchSubscriptionStatus(); // Function to fetch subscription status
      setIsPremium(status);
      setIsLoaded(true);
    } catch (err) {
      console.error("Error checking subscription status:", err);
      setIsLoaded(true);

    }
  }, []);


  useEffect(() => {
    checkStatus();
  }, []);
  return (
    <>
      <Head>
        <title>{item.seoTitle}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="schema-howto"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(currentHowTo) }}
        />
        <meta name="description" content={item.description} />
        <meta name="keywords" content={item.keywords} />
        <link rel="icon" type="image/svg+xml" href="/images/icons/logo.svg" />
        <OpenGraph
          ogUrl={`https://www.pdfequips.com${item.to}`}
          ogDescription={item.description}
          ogImageHeight="630"
          ogImageWidth="1200"
          ogLocale="en"
          ogSiteName="PDFEquips"
          ogTitle={item.seoTitle}
          ogImage={`https://www.pdfequips.com/images${item.to}.png`}
        />
        {isLoaded && !isPremium ?
          <>
            <meta name="google-adsense-account" content="ca-pub-7801483217621867" />
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7801483217621867"
              cross-origin="anonymous"></script></>
          : null}
      </Head>
      <NavBar path={item.to.replace("/", "")} lang="" />
      <Tool
        tools={tools}
        data={item}
        lang=""
        errors={errors}
        edit_page={edit_page}
        pages={edit_page.pages}
        page={edit_page.page}
        downloadFile={downloadFile}
      />
      <div className="container">
        <Features features={item.features as { title: string; description: string }[]} tool={item.to} />
      </div>
      <div className="container">
        <HowTo howTo={currentHowTo as howToType} alt={item.seoTitle} imgSrc={item.to.replace("/", "")} />
      </div>
      <Footer lang="" title={item.seoTitle.split("-")[1]} />
    </>
  );
};

export const routes = {
  "/jpg-to-pdf": { item: tool["JPG_to_PDF"] },
  "/svg-to-pdf": { item: tool["SVG_to_PDF"] },
  "/png-to-pdf": { item: tool["PNG_to_PDF"] },
  "/gif-to-pdf": { item: tool["GIF_to_PDF"] },
  "/tiff-to-pdf": { item: tool["TIFF_to_PDF"] },
  "/bmp-to-pdf": { item: tool["BMP_to_PDF"] },
  "/webp-to-pdf": { item: tool["WebP_to_PDF"] },
  "/heif-heic-to-pdf": { item: tool["HEIF_to_PDF"] },
  "/pdf-to-jpg": { item: tool["PDF_to_JPG"] },
  "/pdf-to-svg": { item: tool["PDF_to_SVG"] },
  "/pdf-to-png": { item: tool["PDF_to_PNG"] },
  "/pdf-to-gif": { item: tool["PDF_to_GIF"] },
  "/pdf-to-tiff": { item: tool["PDF_to_TIFF"] },
  "/pdf-to-bmp": { item: tool["PDF_to_BMP"] },
  "/pdf-to-webp": { item: tool["PDF_to_WebP"] },
  "/pdf-to-heif-heic": { item: tool["PDF_to_HEIF"] },
  "/image-to-pdf": { item: tool["Image_to_PDF"] },
  "/pdf-to-image": { item: tool["PDF_to_Image"] },
};