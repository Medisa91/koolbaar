import React, { useState, useMemo } from "react";
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
  photo?: File;
  setPhoto?: React.Dispatch<React.SetStateAction<File>>;
}

export const Uploader: React.FC<IProp> = ({ title, photo, setPhoto }) => {
  const { isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { "image/*": [] },
  });

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },

    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setPhoto(acceptedFiles[0]);
    },
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

  const thumbs = files.map((file) => (
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
  ));

  return (
    <>
      <>
        <span className="upload-title">{title}</span>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p className="thumb-title">Drop images here or click to upload</p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </>
    </>
  );
};
