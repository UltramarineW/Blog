import { PageSEO } from '@/components/SEO'
import friendsData from '@/data/friendsData'
import Friend from '@/components/Friend'

export default function Friends({ children, frontMatter }) {
  return (
    <>
      <PageSEO title={`Friends`} description={`My Friends`} />
      <div className="">
        <div className="mt-10">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Friends
            </h1>
          </div>
          <div className="container py-1">
            <div className="lg:grid grid-cols-2 gap-6">
              {friendsData.map((d) => (
                <Friend key={d.page} name={d.name} url={d.url} page={d.page} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
