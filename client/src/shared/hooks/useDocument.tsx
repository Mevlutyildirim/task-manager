import React, { useEffect } from "react";

export const useDocument = (title: string) => {
  title = `${title}| task-manager`;

  useEffect(() => {
    document.title = title;
  }, [title]);
};
