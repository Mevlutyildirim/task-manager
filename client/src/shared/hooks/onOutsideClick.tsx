import { useEffect, useRef } from "react";

const onOutsideClick = (
  ignoredElementsRef,
  isListening,
  onOutsideClick,
  listeningElementRef
) => {
  const mouseDownTargetRef = useRef();
  const ignoredElementsRefMemoize = [ignoredElementsRef].flat();

  useEffect(() => {
    const handleMouseDown = (event) => {
      mouseDownTargetRef.current = event.target;
    };

    const handleMouseUp = (event) => {
      if (typeof ignoredElementsRefMemoize !== undefined) {
        const isTarget = ignoredElementsRefMemoize.some(
          (elementRef) =>
            elementRef.current.contains(mouseDownTargetRef.current) ||
            elementRef.current.contains(event.target)
        );
        if (event.button === 0 && !isTarget) {
          onOutsideClick();
        }
      }
    };

    const listeningElement = (listeningElementRef || {}).current || document;

    if (isListening) {
      listeningElement.addEventListener("mouseDown", handleMouseDown);
      listeningElement.addEventListener("mouseUp", handleMouseUp);
    }
    return () => {
      listeningElement.removeEventListener("mouseDown", handleMouseDown);
      listeningElement.removeEventListener("mouseUp", handleMouseUp);
    };
  }, [ignoredElementsRefMemoize, isListening, onOutsideClick, listeningElementRef]);
};
