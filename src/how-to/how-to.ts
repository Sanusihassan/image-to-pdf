export type _howToSchemas = typeof howToSchemas;
export type howToType = {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    step: {
        "@type": string;
        name: string;
        text: string;
        substeps: string[];
    }[];
};
export const howToSchemas = {
    JPGToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert JPG Images to PDF",
        description:
            "Step-by-step guide to convert multiple JPG images to a single PDF document.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the JPG to PDF tool on PDFEquips.",
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Drag and drop JPG images or click the 'Select JPG Files' button to choose your images.",
            },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Rearrange the images by dragging and dropping them in your preferred order.",
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Configure settings like orientation, page size, and margin if needed.",
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Click the 'Convert' button to start the JPG to PDF conversion process.",
            },
            {
                "@type": "HowToStep",
                name: "Step 6",
                text: "Wait for the conversion process to finish.",
            },
            {
                "@type": "HowToStep",
                name: "Step 7",
                text: "Download the converted PDF document.",
            },
        ],
    },
    PNGToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "How to Convert PNG Images to PDF",
        "description": "Step-by-step guide to convert multiple PNG images to a single PDF document.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Step 1",
                "text": "Open the PNG to PDF converter tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                "name": "Step 2",
                "text": "Drag and drop PNG images or click the 'Select PNG Files' button to choose your images."
            },
            {
                "@type": "HowToStep",
                "name": "Step 3",
                "text": "Arrange the images by dragging and dropping them in your preferred order."
            },
            {
                "@type": "HowToStep",
                "name": "Step 4",
                "text": "Configure settings like orientation, page size, and margin if needed."
            },
            {
                "@type": "HowToStep",
                "name": "Step 5",
                "text": "Click the 'Convert' button to start the PNG to PDF conversion process."
            },
            {
                "@type": "HowToStep",
                "name": "Step 6",
                "text": "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                "name": "Step 7",
                "text": "Download the converted PDF document."
            }
        ]
    },
    GIFToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "How to Convert GIF Images to PDF",
        "description": "Step-by-step guide to convert multiple GIF images to a single PDF document.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Step 1",
                "text": "Open the GIF to PDF converter tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                "name": "Step 2",
                "text": "Drag and drop GIF images or click the 'Select GIF Files' button to choose your images."
            },
            {
                "@type": "HowToStep",
                "name": "Step 3",
                "text": "Arrange the images by dragging and dropping them in your preferred order."
            },
            {
                "@type": "HowToStep",
                "name": "Step 4",
                "text": "Configure settings like orientation, page size, and margin if needed."
            },
            {
                "@type": "HowToStep",
                "name": "Step 5",
                "text": "Click the 'Convert' button to start the GIF to PDF conversion process."
            },
            {
                "@type": "HowToStep",
                "name": "Step 6",
                "text": "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                "name": "Step 7",
                "text": "Download the converted PDF document."
            }
        ]
    },
    TIFFToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "How to Convert TIFF Images to PDF",
        "description": "Step-by-step guide to convert multiple TIFF images to a single PDF document.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Step 1",
                "text": "Open the TIFF to PDF converter tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                "name": "Step 2",
                "text": "Drag and drop TIFF images or click the 'Select TIFF Files' button to choose your images."
            },
            {
                "@type": "HowToStep",
                "name": "Step 3",
                "text": "Arrange the images by dragging and dropping them in your preferred order."
            },
            {
                "@type": "HowToStep",
                "name": "Step 4",
                "text": "Configure settings like orientation, page size, and margin if needed."
            },
            {
                "@type": "HowToStep",
                "name": "Step 5",
                "text": "Click the 'Convert' button to start the TIFF to PDF conversion process."
            },
            {
                "@type": "HowToStep",
                "name": "Step 6",
                "text": "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                "name": "Step 7",
                "text": "Download the converted PDF document."
            }
        ]
    },
    BMPToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "How to Convert BMP Images to PDF",
        "description": "Step-by-step guide to convert BMP images to a single PDF document.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Step 1",
                "text": "Open the BMP to PDF converter tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                "name": "Step 2",
                "text": "Drag and drop BMP images or click the 'Select BMP Files' button to choose your images."
            },
            {
                "@type": "HowToStep",
                "name": "Step 3",
                "text": "Arrange the images by dragging and dropping them in your preferred order."
            },
            {
                "@type": "HowToStep",
                "name": "Step 4",
                "text": "Configure settings like orientation, page size, and margin if needed."
            },
            {
                "@type": "HowToStep",
                "name": "Step 5",
                "text": "Click the 'Convert' button to start the BMP to PDF conversion process."
            },
            {
                "@type": "HowToStep",
                "name": "Step 6",
                "text": "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                "name": "Step 7",
                "text": "Download the converted PDF document."
            }
        ]
    },
    SVGToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "How to Convert SVG Images to PDF",
        "description": "Step-by-step guide to convert SVG images to a single PDF document.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Step 1",
                "text": "Open the SVG to PDF converter tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                "name": "Step 2",
                "text": "Drag and drop SVG images or click the 'Select SVG Files' button to choose your images."
            },
            {
                "@type": "HowToStep",
                "name": "Step 3",
                "text": "Arrange the images by dragging and dropping them in your preferred order."
            },
            {
                "@type": "HowToStep",
                "name": "Step 4",
                "text": "Configure settings like orientation, page size, and margin if needed."
            },
            {
                "@type": "HowToStep",
                "name": "Step 5",
                "text": "Click the 'Convert' button to start the SVG to PDF conversion process."
            },
            {
                "@type": "HowToStep",
                "name": "Step 6",
                "text": "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                "name": "Step 7",
                "text": "Download the converted PDF document."
            }
        ]
    },
    WebPToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "How to Convert WebP Images to PDF",
        "description": "Step-by-step guide to convert WebP images to a single PDF document.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Step 1",
                "text": "Open the WebP to PDF converter tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                "name": "Step 2",
                "text": "Drag and drop WebP images or click the 'Select WebP Files' button to choose your images."
            },
            {
                "@type": "HowToStep",
                "name": "Step 3",
                "text": "Arrange the images by dragging and dropping them in your preferred order."
            },
            {
                "@type": "HowToStep",
                "name": "Step 4",
                "text": "Configure settings like orientation, page size, and margin if needed."
            },
            {
                "@type": "HowToStep",
                "name": "Step 5",
                "text": "Click the 'Convert' button to start the WebP to PDF conversion process."
            },
            {
                "@type": "HowToStep",
                "name": "Step 6",
                "text": "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                "name": "Step 7",
                "text": "Download the converted PDF document."
            }
        ]
    },
    HEIFToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "How to Convert HEIF Images to PDF",
        "description": "Step-by-step guide to convert HEIF images to a single PDF document.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Step 1",
                "text": "Open the HEIF to PDF converter tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                "name": "Step 2",
                "text": "Drag and drop HEIF images or click the 'Select HEIF Files' button to choose your images."
            },
            {
                "@type": "HowToStep",
                "name": "Step 3",
                "text": "Arrange the images by dragging and dropping them in your preferred order."
            },
            {
                "@type": "HowToStep",
                "name": "Step 4",
                "text": "Configure settings like orientation, page size, and margin if needed."
            },
            {
                "@type": "HowToStep",
                "name": "Step 5",
                "text": "Click the 'Convert' button to start the HEIF to PDF conversion process."
            },
            {
                "@type": "HowToStep",
                "name": "Step 6",
                "text": "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                "name": "Step 7",
                "text": "Download the converted PDF document."
            }
        ]
    },
    HEICToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        "name": "How to Convert HEIC Images to PDF",
        "description": "Step-by-step guide to convert HEIC images to a single PDF document.",
        "step": [
            {
                "@type": "HowToStep",
                "name": "Step 1",
                "text": "Open the HEIC to PDF converter tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                "name": "Step 2",
                "text": "Drag and drop HEIC images or click the 'Select HEIC Files' button to choose your images."
            },
            {
                "@type": "HowToStep",
                "name": "Step 3",
                "text": "Arrange the images by dragging and dropping them in your preferred order."
            },
            {
                "@type": "HowToStep",
                "name": "Step 4",
                "text": "Configure settings like orientation, page size, and margin if needed."
            },
            {
                "@type": "HowToStep",
                "name": "Step 5",
                "text": "Click the 'Convert' button to start the HEIC to PDF conversion process."
            },
            {
                "@type": "HowToStep",
                "name": "Step 6",
                "text": "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                "name": "Step 7",
                "text": "Download the converted PDF document."
            }
        ]
    },
    ImageToPDFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert Images to PDF",
        description: "Step-by-step guide to convert multiple images (JPG, PNG, etc.) to a single PDF document.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the image to PDF conversion tool."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Drag and drop the images you want to convert into the tool, or click the \"Select IMAGE files\" button to choose them."
            },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Arrange the images in the desired order by dragging and dropping them."
            },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 4",
            //     text: "Adjust settings such as page orientation, size, and margins if necessary."
            // },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: `Initiate the conversion process by clicking the "Convert to PDF" button.`
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Wait for the conversion to complete."
            },
            {
                "@type": "HowToStep",
                name: "Step 6",
                text: "Download the resulting PDF file containing your images."
            }
        ]
    },
    PDFToImageHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert PDF to Images",
        description: "Step-by-step guide to convert a PDF document into images (JPG, PNG, etc.).",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the PDF to image conversion tool."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Upload or select the PDF file you want to convert."
            },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Choose the image format (JPG, PNG, etc.)."
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Specify the pages you wish to convert to images."
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Start the conversion process by clicking the 'Convert to IMAGE'."
            },
            {
                "@type": "HowToStep",
                name: "Step 6",
                text: "Wait for the conversion to finish."
            },
            {
                "@type": "HowToStep",
                name: "Step 7",
                text: "Download the resulting images from the converted PDF."
            }
        ]
    },
    PDFToPNGHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert PDF to PNG Images",
        description: "Step-by-step guide to convert a PDF document into PNG images.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the PDF to png conversion tool."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Upload or select the PDF file you want to convert."
            },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Specify the pages pages you wish to convert to PNG images."
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Start the conversion process by clicking the 'Convert to PNG' button."
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Wait for the conversion to finish."
            },
            {
                "@type": "HowToStep",
                name: "Step 6",
                text: "Download the resulting PNG images from the converted PDF."
            }
        ]
    },
    PDFToJPGHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert PDF Documents to JPG Images",
        description: "Step-by-step guide to convert a PDF document into multiple JPG images.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the PDF to JPG tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Upload or select the PDF file you want to convert."
            },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 3",
            //     text: "Choose the pages you want to convert to JPG images."
            // },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 3",
            //     text: "Configure any additional settings such as image resolution or quality, if needed."
            // },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Click the 'Convert to JPG' button to start the PDF to JPG conversion process."
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Download the converted JPG images."
            }
        ]
    },
    PDFToGIFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert PDF Documents to GIF Images",
        description: "Step-by-step guide to convert a PDF document into GIF images.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the PDF to GIF tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Upload or select the PDF file you want to convert."
            },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 3",
            //     text: "Choose the pages you want to convert to GIF images."
            // },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 4",
            //     text: "Configure any additional settings such as image resolution or quality, if needed."
            // },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Click the 'Convert to GIF' button to start the PDF to GIF conversion process."
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Download the converted GIF images."
            }
        ]
    },
    PDFToBMPHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert PDF Documents to BMP Images",
        description: "Step-by-step guide to convert a PDF document into BMP images.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the PDF to BMP tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Upload or select the PDF file you want to convert."
            },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 3",
            //     text: "Choose the pages you want to convert to BMP images."
            // },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 3",
            //     text: "Configure any additional settings such as image resolution or quality, if needed."
            // },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Click the \"Convert\" button to start the PDF to BMP conversion process."
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Download the converted BMP images."
            }
        ]
    },
    PDFToWEBPHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert PDF Documents to WebP Images",
        description: "Step-by-step guide to convert a PDF document into WebP images.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the PDF to WebP tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Upload or select the PDF file you want to convert."
            },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 3",
            //     text: "Choose the pages you want to convert to WebP images."
            // },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 4",
            //     text: "Configure any additional settings such as image resolution or quality, if needed."
            // },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Click the \"Convert to Webp\" button to start the PDF to WebP conversion process."
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Download the converted WebP images."
            }
        ]
    },
    PDFToSVGHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert PDF Documents to SVG Images",
        description: "Step-by-step guide to convert a PDF document into SVG images.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the PDF to SVG tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Upload or select the PDF file you want to convert."
            },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 3",
            //     text: "Choose the pages you want to convert to SVG images."
            // },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 4",
            //     text: "Configure any additional settings such as image resolution or quality, if needed."
            // },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Click the \"Convert to PDF\" button to start the PDF to SVG conversion process."
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Download the converted SVG images."
            }
        ]
    },
    PDFToTIFFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert PDF Documents to TIFF Images",
        description: "Step-by-step guide to convert a PDF document into TIFF images.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the PDF to TIFF tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Upload or select the PDF file you want to convert."
            },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 3",
            //     text: "Choose the pages you want to convert to TIFF images."
            // },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 4",
            //     text: "Configure any additional settings such as image resolution or quality, if needed."
            // },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Click the 'Convert' button to start the PDF to TIFF conversion process."
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Download the converted TIFF images."
            }
        ]
    },
    PDFToHEIFHOWTO: {
        "@context": "http://schema.org",
        "@type": "HowTo",
        name: "How to Convert PDF Documents to HEIF/HEIC Images",
        description: "Step-by-step guide to convert a PDF document into HEIF or HEIC images.",
        step: [
            {
                "@type": "HowToStep",
                name: "Step 1",
                text: "Open the PDF to HEIF/HEIC tool on PDFEquips."
            },
            {
                "@type": "HowToStep",
                name: "Step 2",
                text: "Upload or select the PDF file you want to convert."
            },
            {
                "@type": "HowToStep",
                name: "Step 3",
                text: "Choose the pages you want to convert to HEIF/HEIC images."
            },
            {
                "@type": "HowToStep",
                name: "Step 4",
                text: "Select the desired output format: HEIF or HEIC."
            },
            // {
            //     "@type": "HowToStep",
            //     name: "Step 5",
            //     text: "Configure any additional settings such as image resolution or quality, if needed."
            // },
            {
                "@type": "HowToStep",
                name: "Step 5",
                text: "Click the \"Convert to HEIF/HEIC\" button to start the PDF to HEIF/HEIC conversion process."
            },
            {
                "@type": "HowToStep",
                name: "Step 6",
                text: "Wait for the conversion process to finish."
            },
            {
                "@type": "HowToStep",
                name: "Step 7",
                text: "Download the converted HEIF or HEIC images."
            }
        ]
    }
}
