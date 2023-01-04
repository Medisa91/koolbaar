import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#d6d6d6",
  borderStyle: "solid",
  width: "100%",
  height: "174px",
  margin: "0 0 29px",
  padding: "60px 135px 50px 93px",
  borderRadius: "5px",
  backgroundColor: "#fff",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
} as React.CSSProperties;

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
} as React.CSSProperties;

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
} as React.CSSProperties;

const img = {
  display: "block",
  width: "100%",
  height: "fit-content",
} as React.CSSProperties;

interface IProp {
  title: string;
  image?: string;
  //   setPhotos?: React.Dispatch<React.SetStateAction<File>[]>;
  setPhotos?: any;
}

export const MultipleUploader: React.FC<IProp> = ({
  title,
  image,
  setPhotos,
}) => {
  const { isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { "image/*": [] },
    multiple: true,
    maxFiles: 10,
  });

  const [defaultImage, setDefaultImage] = useState(null);
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setPhotos((prevState) => [...prevState, file]);
        setFiles((prevState) => [
          ...prevState,
          Object.assign({
            preview: URL.createObjectURL(file),
          }),
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: true,
    maxFiles: 10,
    onDrop: onDrop,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  ) as React.CSSProperties;

  useEffect(() => {
    if(image?.length !==0) setDefaultImage(image);
  }, [image]);

  const removeFile = () => {
    setFiles([]);
    setDefaultImage(null);
  };

  const thumbs = files.map((file) => (
    <>
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
            alt="preview"
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      </div>
      {/* <a className="remove-img-link" onClick={removeFile}>
        Remove File
      </a> */}
    </>
  ));

  return (
    <>
      <>
        <span className="upload-title">{title}</span>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p className="thumb-title">Drop images here or click to upload</p>
        </div>
        <aside style={thumbsContainer}>
          {defaultImage && files.length === 0 && (
            <div style={thumb}>
              <div style={thumbInner}>
                <img src={defaultImage} style={img} alt="previewImg" />
              </div>
            </div>
          )}
          {thumbs}
        </aside>
      </>
    </>
  );
};
