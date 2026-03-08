import A11yIntro from "./components/A11yIntro";
import AriaAttributes from "./components/AriaAttributes";
import AriaIntro from "./components/AriaIntro";
import KeyboardAccessibility from "./components/KeyboardAccessibility";
import SemanticExamples from "./components/SemanticExamples";
import SemanticReasons from "./components/SemanticReasons";
import SemanticTagNames from "./components/SemanticTagNames";

const A11y = () => {
  return (
    <>
      <A11yIntro />

      <SemanticTagNames />

      <SemanticReasons />

      <SemanticExamples />

      <AriaIntro />

      <AriaAttributes />

      <KeyboardAccessibility />
    </>
  );
};

export default A11y;
