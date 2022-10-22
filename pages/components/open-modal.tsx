import React from "react";
import * as M from "../components/modal.style";

type OpenModalProps = {
  className: string;
  src: string;
  alt: string;
  title: string;
  content: string;
};

export function OpenModal(props: OpenModalProps) {
  const { src, alt, title, content, className } = props;
  return (
    <>
      <M.IconEmail src={src} alt={alt} />
      <M.Title> {title} </M.Title>
      <M.Content className={className}>{content}</M.Content>
    </>
  );
}
