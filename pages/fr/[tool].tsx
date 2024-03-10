import Head from "next/head";
import NavBar from "pdfequips-navbar/NavBar";
import Tool from "../../components/Tool";

import {
  edit_page,
  tool,
  tools,
  downloadFile,
} from "../../src/content/content-fr";
import { errors } from "../../src/content/content-fr";
import { useRouter } from "next/router";
import { routesMap, type data_type } from "../[tool]";
import { howToSchemas } from "@/src/how-to/how-to-fr";
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

export default ({ item, lang }: { item: data_type; lang: string }) => {
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
        <title>{`PDFEquips | ${item.title}`}</title>
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
      </Head>
      <NavBar path="path-to-tool" lang={lang} />
      <Tool
        tools={tools}
        data={item}
        lang={lang}
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
};
