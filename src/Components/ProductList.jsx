
import { useState } from "react"
import { categoryData } from "../data"

function ProductList() {
  const [category, setCategory] = useState("All")

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">
          Shop By Category
        </h1>
      </div>

      {/* Category Section */}
      <div className="mb-1 py-6">
        <ul className="flex flex-nowrap justify-between gap-3">
          {categoryData.slice(0, 5).map((item) => {
            const isActive = category === item.category_title

            return (
              <li
                key={item.id}
                className="list-none cursor-pointer group shrink-0"
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.category_title
                      ? "All"
                      : item.category_title
                  )
                }
              >
                <div
                  className={`relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                    isActive
                      ? "border-amber-500 ring-2 ring-amber-400 scale-105"
                      : "hover:border-amber-400 hover:scale-105"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.category_title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-end justify-center">
                    <span
                      className={`mb-1 px-1.5 py-1 rounded-full text-[9px] sm:text-[10px] font-semibold text-white text-center backdrop-blur ${
                        isActive
                          ? "bg-amber-500"
                          : "bg-black/50 group-hover:bg-amber-500"
                      }`}
                    >
                      {item.category_title}
                    </span>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProductList
