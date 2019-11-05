import { useState, useEffect, useCallback } from "react";

export default ({
  fin,
  name,
  windowOptions,
  parentDocument,
  shouldInheritCss
}) => {
  const [windowRef, windowRef] = useState(null);
  const [htmlDocument, setHtmlDocument] = useState(null);

  const reset = () => {
    setWindowRef(null);
    setHtmlDocument(null);
  };

  useEffect(() => {
    if (windowRef) {
      setHtmlDocument(windowRef.getWebWindow().document);
      htmlDocument.title = name;
      windowRef.addListener("closed", reset);
      windowRef.removeListener("closed", reset);
    }
    return () => {
      if (windowRef) {
        windowRef.removeListener("closed", reset);
      }
    };
  }, [name, windowRef]);

  const launch = useCallback(() => {
    if (!windowRef) {
      try {
        fin.Window.create(windowOptions).then(childWindow => {
          setWindowRef(childWindow);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, [fin]);

  const close = useCallback(async () => {
    try {
      if (windowRef) {
        await windowRef.close();
      }
      reset();
    } catch (error) {
      console.error(error);
    }
  }, [windowRef]);

  return {
    close,
    launch,
    windowRef
  };
};
