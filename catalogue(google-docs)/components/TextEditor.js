import { convertFromRaw, convertToRaw, EditorState } from "draft-js"
import { useSession } from "next-auth/client"
import { useRouter } from "next/dist/client/router"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { useDocumentOnce } from "react-firebase-hooks/firestore"
import { db } from "../firebase"

/**
 * dynamic import for next js
 */
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
)
const TextEditor = () => {
  const [session] = useSession()

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const router = useRouter()
  const { id } = router.query
  const [snapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  )
  console.log(snapshot)

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      )
    }
  }, [snapshot])

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)

    db.collection("userDocs")
      .doc(session.user.email)
      .collection("docs")
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        {
          merge: true,
        }
      )
  }

  return (
    <div className='bg-[#F8F9FA] min-h-screen pb-16'>
      <Editor
        editorState={editorState}
        toolbarClassName='flex sticky top-0 z-50 !justify-content mx-auto mb-12 border'
        wrapperClassName='wrapperClassName'
        editorClassName='mt-6 bg-white shadow-lg max-w-4xl  mx-auto p-10'
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  )
}

export default TextEditor
