function MyButton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function Toolbar({ onPlayVideo, onUploadFile }) {
  return (
    <>
      <MyButton onClick={onPlayVideo} children={"Play video"} />
      <MyButton onClick={onUploadFile} children={"Upload file"} />
    </>
  );
}
