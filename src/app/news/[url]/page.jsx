import { getPostByUrl } from "@/lib/firestore";

export default async function Noticias({ params }) {
  const { url } = params;

  let post;
  try {
    post = await getPostByUrl(url);
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }

  function convertDriveLinkToDirect(link) {
    const match = link.match(/[-\w]{25,}/); // Extraer el FILE_ID del enlace
    if (match) {
      const fileId = match[0];
      return `https://drive.google.com/thumbnail?sz=w640&id=${fileId}`;
    }
    throw new Error("El enlace proporcionado no es válido.");
  }
  
  return (
    <>
      <div
        className="w-full flex items-center justify-center h-[550px]"
        style={{
          backgroundImage: `url(${convertDriveLinkToDirect(post.imagen)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>
      <main
        id="home"
        className="flex flex-col gap-[0] md:gap-[100px] bg-[#140f1a]" 
        style={{padding:"8em"}}
      >
        <div className="flex justify-center">
          <div className="w-[80%] relative bottom-[200px] md:text-lg rounded-[15px]">
            <div className="article">
              <strong className="text-[25px] leading-[30px] sm:text-[30px] sm:leading-[35px]">
                {post.title}
              </strong>
              <br />
              <br />
              <strong>{post.date}</strong>
              <br />
              <br />
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
