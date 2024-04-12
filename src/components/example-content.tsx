import { FiArrowUpRight } from "react-icons/fi"

export function ExampleContent() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-pretty">
        Additional content explaining the above card here
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus
          mi at felis rhoncus gravida aliquam vel neque. In quis tellus mollis,
          pulvinar elit sed, congue elit. Nam fringilla felis.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
          magna non lorem pellentesque, non.
        </p>
        <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white  transition-colors hover:bg-neutral-700 md:w-fit">
          Learn more <FiArrowUpRight className="inline" />
        </button>
      </div>
    </div>
  )
}
