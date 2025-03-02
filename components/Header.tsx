import Link from "next/link"

export default function Header() {
    return (
        <section className="z-30 hidden sm:block fixed inset-0 w-full h-10 bg-opacity-10 backdrop-blur-sm">
            <div className="flex gap-6 pr-10 py-2 items-center justify-end">
                <h3 className="text-lg duration-100 hover:text-sky-200 ">
                    <Link href="/">Home</Link>
                </h3>
                <h3 className="text-lg hover:text-sky-200 duration-300">
                    <Link href="/#projects">Projects</Link>
                </h3>
                <h3 className="text-lg hover:text-sky-200 duration-300">
                    <Link href="/blog">Blog</Link>
                </h3>
            </div>
        </section>
    )
}