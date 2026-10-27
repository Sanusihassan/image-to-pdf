import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "常见问题",
  items: {
    "/svg-to-pdf": [
      {
        question: "如何将SVG转换为PDF？",
        answer: "点击选择按钮或将SVG文件拖到上方区域，按需设置页面方向、页面大小和边距，然后点击「转换为 PDF」。",
      },
      {
        question: "可以把多个SVG合并为一个PDF吗？",
        answer: "可以。添加所有SVG文件，并勾选「将所有图像合并到一个PDF文件中」，即可得到一个PDF文档。",
      },
      {
        question: "SVG转PDF免费吗？",
        answer: "免费，无需注册，也不会添加水印。",
      },
      {
        question: "我的文件安全吗？",
        answer: "安全。您的文件通过加密连接（TLS）传输，并在处理完成后自动从我们的服务器删除。",
      },
    ],
    "/pdf-to-svg": [
      {
        question: "如何将PDF转换为SVG？",
        answer: "选择PDF文件或将其拖到上方区域，然后点击「转换为SVG」，PDF的每一页都会转换为一个SVG文件。",
      },
      {
        question: "PDF转SVG免费吗？",
        answer: "免费，无需注册，在浏览器中即可完成。",
      },
      {
        question: "我的文件安全吗？",
        answer: "安全。您的文件通过加密连接（TLS）传输，并在处理完成后自动从我们的服务器删除。",
      },
    ],
    "/heif-heic-to-pdf": [
      {
        question: "如何将HEIC照片转换为PDF？",
        answer: "选择HEIC或HEIF照片，或将其拖到上方区域，然后点击「转换为 PDF」，无需先转换为JPG。",
      },
      {
        question: "什么是HEIC文件？",
        answer: "HEIC（或HEIF）是iPhone默认的照片格式。它比JPG占用空间更小，但很多软件无法打开，转换为PDF后更方便分享和打印。",
      },
      {
        question: "可以把多张HEIC照片放进一个PDF吗？",
        answer: "可以。添加所有照片，并勾选「将所有图像合并到一个PDF文件中」。",
      },
      {
        question: "我的文件安全吗？",
        answer: "安全。您的文件通过加密连接（TLS）传输，并在处理完成后自动从我们的服务器删除。",
      },
    ],
  },
};
