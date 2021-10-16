import React from "react"
import StoryCard from "./StoryCard"

const stories = [
  {
    id: 1,
    name: "Faiz Khan",
    src: "https://yt3.ggpht.com/yti/APfAmoEwEea3ypaAMiG69Jjr7meACJjUYzca4MAbhuSEsw=s88-c-k-c0x00ffffff-no-rj-mo",
    profile:
      "https://yt3.ggpht.com/yti/APfAmoEwEea3ypaAMiG69Jjr7meACJjUYzca4MAbhuSEsw=s88-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: 2,
    name: "Bill Gates",
    src: "https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg",
    profile:
      "https://yt3.ggpht.com/yti/APfAmoEwEea3ypaAMiG69Jjr7meACJjUYzca4MAbhuSEsw=s88-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2847721886632%29_%28cropped%29.jpg",
    profile:
      "https://cdn.britannica.com/w:400,h:300,c:crop/54/187354-050-BE0530AF/Mark-Zuckerberg.jpg",
  },
  {
    id: 4,
    name: "Faiz Khan",
    src: "https://yt3.ggpht.com/yti/APfAmoEwEea3ypaAMiG69Jjr7meACJjUYzca4MAbhuSEsw=s88-c-k-c0x00ffffff-no-rj-mo",
    profile:
      "https://yt3.ggpht.com/yti/APfAmoEwEea3ypaAMiG69Jjr7meACJjUYzca4MAbhuSEsw=s88-c-k-c0x00ffffff-no-rj-mo",
  },
]

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto '>
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  )
}

export default Stories
