// @ts-nocheck

"use client"
export default function CustomList({ items }) {
    const handleItemClick = (event) => {
        if (event.target.tagName === "LI") {
            // Get index using the dataset attribute
            const index = event.target.dataset.index
            console.log(`Clicked Item: ${event.target.textContent}, Index: ${index}`)
        }
    }

    return (
        <ul onClick={handleItemClick}>
            {[{ name: "amr" }].map((item, index) => (
                <li key={index} data-index={index}>
                    {item.name}
                </li>
            ))}
        </ul>
    )
}
