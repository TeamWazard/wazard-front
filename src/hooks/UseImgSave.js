import { useState } from "react";

export function useImgsave(initialValue, imgRef) {
  const [imgFile, setImgFile] = useState(initialValue);

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return [imgFile, saveImgFile];
}
