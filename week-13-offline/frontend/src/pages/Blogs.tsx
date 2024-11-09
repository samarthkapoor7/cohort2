import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard 
                    authorName={"Samarth Kapoor"}
                    title={"How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketing"}
                    content={"How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketing How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketing"}
                    publishedDate={"2nd Feb 2024"}
                    />
                    <BlogCard 
                    authorName={"Samarth Kapoor"}
                    title={"How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketing"}
                    content={"How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketing"}
                    publishedDate={"2nd Feb 2024"}
                    />
                    <BlogCard 
                    authorName={"Samarth Kapoor"}
                    title={"How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketing"}
                    content={"How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketing"}
                    publishedDate={"2nd Feb 2024"}
                    />
                    <BlogCard 
                    authorName={"Samarth Kapoor"}
                    title={"How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketing"}
                    content={"How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketing"}
                    publishedDate={"2nd Feb 2024"}
                    />
            </div>
        </div>
    </div>
}