
export default function Contact() {
    return (
        <form>
            <h3 className="footer-title">Want to reach me?</h3>
            <input
                type="text"
                className="name"
                placeholder="name"
            />
            <input
                type="email"
                className="email"
                placeholder="email"
            />
            <textarea></textarea>
        </form>
    )
}