"use client"

interface TableOfContentsProps {
  items: { id: string; title: string; level: number }[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  // Hide the Table of Contents
  return null

  // Original code commented out
  /*
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" },
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <nav className="space-y-2">
      <h2 className="text-lg font-semibold mb-4 cosmic-title">Table of Contents</h2>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`block cosmic-link text-sm ${
            activeId === item.id ? "font-semibold" : ""
          } ${item.level === 2 ? "ml-0" : "ml-4"}`}
          onClick={(e) => {
            e.preventDefault()
            document.querySelector(`#${item.id}`)?.scrollIntoView({
              behavior: "smooth",
            })
          }}
        >
          <LinkIcon className="inline-block w-4 h-4 mr-2" />
          {item.title}
        </a>
      ))}
    </nav>
  )
  */
}

