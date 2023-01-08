import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/light-async";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";

const Code = ({ code }) => {
  return (
    <SyntaxHighlighter className='code' lineNumberContainerStyle={{ textAlign: 'left' }} language="javascript" style={dark} customStyle={{ padding: 10 }} showLineNumbers={true} >
      {code}
    </SyntaxHighlighter>
  );
}

export default Code;