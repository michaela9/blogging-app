import type { ClassValue } from "clsx";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import clsxm from "@/utils/clsxm";

type Props = {
  children: string;
  className?: ClassValue;
  printable?: boolean;
};
export default function Markdown({
  children,
  printable = false,
  className,
}: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className={clsxm(
        { printable: printable, markdown: !printable },
        "markdown",
        className,
      )}
    >
      {children}
    </ReactMarkdown>
  );
}
