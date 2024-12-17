"use client";
import { addPost, deletePost, updatePost } from "@/lib/firestore";
import { motion } from "framer-motion";
import { Editor } from "@tinymce/tinymce-react";
import { useState, useEffect } from "react";

const ConfigNews = ({
  isForUpdate,
  id = "",
  category="",
  url = "",
  imagen = "",
  title = "",
  subtitle = "",
  date = "",
  body = "",
}) => {
  const [content, setContent] = useState(body);
  const [url_parsed, setUrl] = useState(url);

  const sanitizeTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .trim();
  };

  useEffect(() => {
    if (body && body.body) {
      setContent(body.body);
    } else {
      setContent("Content...");
    }
  }, [body]);

  useEffect(() => {
    if (title) {
      setUrl(sanitizeTitle(title));
    }
  }, [title]);

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setUrl(sanitizeTitle(newTitle));
  };

  return (
    <section id="add_news" className="w-full py-[60px] ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col items-center justify-center text-primary gap-[25px] lg:gap-[35px] xl:gap-[44px] my-5"
      >
        <div className="text-2xl mb-8">
          <p>Manage News & Events</p>
        </div>

        <div className="">
          <form action={isForUpdate ? updatePost.bind(null, id) : addPost}>
            <div className="mb-8 text-primary">

              <div className="flex flex-col gap-3">
                <h3 className="font-[500] text-[#fafafa]">Category</h3>
                <select
                  className="mb-4 p-4"
                  style={{background:"#ddd",borderRadius:"8px"}}
                  name="category"
                  id="category"
                  defaultValue={category}
                >                 
                  <option value="Graduation">Graduation</option>
                  <option value="News">News</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Prize">Prize</option>
                </select>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <h3 className="font-[500] text-[#fafafa]">URL Image</h3>
                <input
                  className="mb-4 p-4"
                  style={{background:"#ddd",borderRadius:"8px"}}
                  defaultValue={imagen}
                  type="text"
                  placeholder="URL Image"
                  name="imagen"
                  id="imagen"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <h3 className="font-[500] text-[#fafafa]">Title</h3>
                <input
                  className="mb-4 p-4"
                  style={{background:"#ddd",borderRadius:"8px"}}
                  defaultValue={title}
                  type="text"
                  placeholder="Título"
                  name="title"
                  id="title"
                  required
                  onChange={handleTitleChange}
                />
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <h3 className="font-[500] text-[#fafafa]">Subtitle</h3>
                <input
                  className="mb-4 p-4"
                  style={{background:"#ddd",borderRadius:"8px"}}
                  defaultValue={subtitle}
                  type="text"
                  placeholder="Subtitle"
                  name="subtitle"
                  id="subtitle"
                />
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <h3 className="font-[500] text-[#fafafa]">Date</h3>
                <input
                  className="mb-4 p-4"
                  style={{background:"#ddd",borderRadius:"8px"}}
                  defaultValue={date}
                  type="date"
                  placeholder="Date"
                  name="date"
                  id="date"
                />
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-[500] text-[#fafafa]">Content</h3>

                <Editor
                  className="mt-4 p-4"
                  style={{background:"#ddd",borderRadius:"8px"}}
                  apiKey="bfww481hcvkc07tmf5qxw3bfec6m4hkxivw1t1mj0qbnt40g"
                  initialValue={body}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                    content_style: `
                        body {
                            font-family: 'Raleway', sans-serif;
                            font-size: 14px;
                        }
                        `,
                  }}
                  onEditorChange={handleEditorChange}
                />
                <input
                  type="hidden"
                  name="body"
                  id="body"
                  defaultValue={content}
                />
              </div>

              <input
                type="hidden"
                name="url"
                id="url"
                defaultValue={url_parsed}
              />

              <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
                <div className="mt-5 mt:mb-[0]">
                  <button type="submit" className="button-1 md:button-2 w-full">
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ConfigNews;
