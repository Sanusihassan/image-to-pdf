import Head from "next/head";
import NavBar from "pdfequips-navbar/NavBar";
import Tool from "../components/Tool";
import {
  edit_page,
  errors,
  tool,
  tools,
  downloadFile,
} from "../src/content/content";
import { useRouter } from "next/router";
import { howToSchemas } from "@/src/how-to/how-to";

export type data_type = {
  title: string;
  seoTitle: string;
  description: string;
  color: string;
  type: string;
  to: string;
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
  const item = routes[`/${params.tool}` as keyof typeof routes].item;
  return { props: { item } };
}

export const routesMap = {
  JPGToPDFHOWTO: "/jpg-to-pdf",
  PNGToPDFHOWTO: "/png-to-pdf",
  GIFToPDFHOWTO: "/gif-to-pdf",
  TIFFToPDFHOWTO: "/tiff-to-pdf",
  BMPToPDFHOWTO: "/bmp-to-pdf",
  SVGToPDFHOWTO: "/svg-to-pdf",
  WebPToPDFHOWTO: "/webp-to-pdf",
  HEIFToPDFHOWTO: "/heif-heic-to-pdf",
  HEICToPDFHOWTO: "/heif-heic-to-pdf"
};

export default ({ item }: { item: data_type }) => {
  const router = useRouter();
  const { asPath } = router;
  const matchingKey = Object.keys(routesMap).find(
    (key) => routesMap[key as keyof typeof routesMap] === asPath
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
  return (
    <>
      <Head>
        <title>{`PDFEquips | ${item.seoTitle}`}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(currentHowTo),
          }}
        />
        <meta name="description" content={item.description} />
        <link rel="icon" href="/logo.png" />
        {/* needed for styles */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
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
  "/pdf-to-svg": { item: tool["PDF_to_SVG"] }, // front end
  "/pdf-to-png": { item: tool["PDF_to_PNG"] }, // done
  "/pdf-to-gif": { item: tool["PDF_to_GIF"] }, // not now
  "/pdf-to-tiff": { item: tool["PDF_to_TIFF"] }, // done
  "/pdf-to-bmp": { item: tool["PDF_to_BMP"] }, // done
  "/pdf-to-webp": { item: tool["PDF_to_WebP"] },
  "/pdf-to-heif-heic": { item: tool["PDF_to_HEIF"] }, // choose
};