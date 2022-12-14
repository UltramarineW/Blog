import Image from '@/components/Image'

// Icons taken from: https://simpleicons.org/

const FriendIcon = ({ type }) => {
  // const Icon = components[type]
  // if (!Icon) return <div>Missing icon</div>

  //   return <Icon className="h-16 w-16 lg:h-14 lg:w-14 xl:h-24 xl:w-24" fill="currentColor" />
  let imagesrc = '/static/images/friends/' + type + '.png'
  return (
    <div>
      <Image
        src={imagesrc}
        alt="avatar"
        width="96px"
        height="96px"
        // className=" [clip-path:polygon(0%_0%,100%_0%,50%_100%,0%_50%)]"
        className="rounded-full"
      />
    </div>
  )
}

export default FriendIcon
