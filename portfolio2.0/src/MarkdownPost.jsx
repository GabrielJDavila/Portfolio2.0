import { useState, useEffect } from "react"
import { marked } from "marked"

export default function MarkdownPost() {
    const [postContent, setPostContent] = useState("")

    useEffect(() => {
        fetch("/markdown-posts/blogpost1.md")
            .then(res => res.text())
            .then(text => setPostContent(marked(text)))
    }, [])

    return (
        <div dangerouslySetInnerHTML={{ __html: postContent }}/>
    )
}