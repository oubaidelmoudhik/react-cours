export default function Profile() {
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 120,
  };

  return (
    // react fragment
    <>
      <h1>My name is: {user.name}</h1>
      <img
        src={user.imageUrl}
        alt=""
        style={{ width: user.imageSize, borderRadius: "60px" }}
      />
    </>
  );
}
