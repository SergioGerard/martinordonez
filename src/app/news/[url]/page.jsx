import { getPostByUrl } from "@/lib/firestore";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";

export default async function Noticias({ params }) {
  const { url } = params;

  let post;
  try {
    post = await getPostByUrl(url);
  } catch (error) {
    notFound();
  }

  function convertDriveLinkToDirect(link) {
    const match = link.match(/[-\w]{25,}/);
    if (match) {
      const fileId = match[0];
      return `https://drive.google.com/thumbnail?sz=w1000&id=${fileId}`;
    }
    throw new Error("El enlace proporcionado no es válido.");
  }

  return (
    <section id="news" className="block md:flex justify-center w-full py-48 px-8">
      {/* Botón de retroceso */}
      <BackButton />

      <div id="article" className="max-w-5xl ml-0 md:ml-8">
        {/* Imagen de cabecera */}
        <div
          className="w-full h-[550px] mb-8"
          style={{
            backgroundImage: `url(${convertDriveLinkToDirect(post.imagen)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Contenido del artículo */}
        <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
          {post.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {post.date}
          </p>
        </div>
        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.body }}
        ></article>
      </div>
    </section>
  );
}
