import '../App.css'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ size: [] }],
    [{ font: [] }],
    [{ align: ["right", "center", "justify"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: ["red", "#785412"] }],
    [{ background: ["red", "#785412"] }]
  ]
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "color",
  "image",
  "background",
  "align",
  "size",
  "font",
  "code-block"
];

function PostBlog() {
  const [blogContent, setBlogContent] = useState('');
  const [isPostSent, setIsPostSent] = useState(false)
  const [postButtonText, setPostButtonText] = useState('Post')

  const sendPost = async () => {
      try {
        const docRef = await addDoc(collection(db, 'blog'), {
          text: blogContent,
          date: Date.now(),
        });

        setIsPostSent(true)
        setPostButtonText('Post sent!')

        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
  }

  return (
    <div className="main-wrapper">
      <Header />
      <div className="quill-wrapper">
        <ReactQuill
          theme="snow"
          modules={modules}
          value={blogContent}
          formats={formats}
          onChange={setBlogContent} />
      </div>
      <button className='post-blog-button' onClick={() => !isPostSent && sendPost()}>{postButtonText}</button>
      <Footer />
    </div>
  )
}

export default PostBlog