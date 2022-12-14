import Link from '@/components/Link'
import FriendIcon from './friends-icons'

const Friend = ({ name, url, page }) => {
  return (
    <Link href={url} className="">
      <div className="my-3">
        <div className="flex rounded border dark:hover:border-gray-400 dark:border-gray-600 border-gray-300 hover:border-gray-500 cursor-pointer mb-4 lg:mb-0">
          <div className="p-3 lg:p-4">
            <FriendIcon type={name} />
          </div>
          <div className="p-3 lg:p-4 md:p-4 overflow-hidden">
            <h3 className="text-lg lg:text-2xl font-bold leading-8 tracking-tight whitespace-nowrap overflow-hidden overflow-ellipsis">
              {page}
            </h3>
            <br />
            <span className="text-primary-color dark:text-primary-color-dark">{url}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Friend
