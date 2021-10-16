import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import firebase from "firebase"
import { useSession } from "next-auth/client"
import Image from "next/image"
import React, { useRef, useState } from "react"
import { db, storage } from "../../../firebase"

const InputBox = () => {
  const [image, setImage] = useState(null)
  const [session] = useSession()
  const inputRef = useRef(null)
  const filePickerRef = useRef(null)

  const sendPost = (e) => {
    e.preventDefault()

    if (!inputRef.current.value) return

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      // upload an image
      .then((doc) => {
        if (image) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(image, "data_url")
          removeImage()
          uploadTask.on(
            "state_change",
            null,
            (error) => console.log("Error"),
            () => {
              // when the uplaod complete
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  )
                })
            }
          )
        }
      })

    inputRef.current.value = ""
  }

  const uploadImage = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setImage(null)
  }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium'>
      <div className='flex space-x-4 items-center'>
        <Image
          className='rounded-full'
          src={session.user.image}
          width={40}
          height={40}
          layout='fixed'
        />
        <form className='flex flex-1'>
          <input
            className='rounded-full outline-none h-12 bg-gray-100 px-5 flex-grow'
            type='text'
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user?.name}?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>
        {image && (
          <div
            className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'
            onClick={removeImage}
          >
            <img className='h-10 object-contain' src={image} alt='' />
            <p className='text-xs text-blue-500 text-center'>Remove Image</p>
          </div>
        )}
      </div>
      <div className='flex justify-evenly my-3 p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className='inputIcon'
        >
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input
            ref={filePickerRef}
            hidden
            type='file'
            onChange={uploadImage}
          />
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
