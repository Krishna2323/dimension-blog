import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BlogCodeComponent: React.FC<{ code: string; language: string }> = (
  props
) => {
  return (
    <div className="text-[16px] py-4 bg-[#292D3E] my-6 mt-10 rounded-md">
      <SyntaxHighlighter
        language={props.language}
        style={vs2015}
        customStyle={{ background: "none" }}
      >
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default BlogCodeComponent;
