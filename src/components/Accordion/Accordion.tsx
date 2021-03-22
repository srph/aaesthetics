import React, { useState, useContext } from "react"
import cx from "classnames"
import { FaAngleDown, FaAngleUp } from "../Icon"

interface AccordionContextType {
  index: number
  isActive: boolean
  isLast: boolean
  setActive: (n: number) => void
}

const AccordionContext = React.createContext<AccordionContextType>(
  {} as AccordionContextType
)

const Accordion: React.FC = ({ children }) => {
  const [active, setActive] = useState<number>(-1)

  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <AccordionContext.Provider
          value={{
            index,
            isActive: index === active,
            isLast: index === React.Children.count(children) - 1,
            setActive,
          }}
        >
          {child}
        </AccordionContext.Provider>
      ))}
    </div>
  )
}

interface AccordionItemProps {
  label: string
}

const AccordionItem: React.FC<AccordionItemProps> = ({ label, children }) => {
  const { isActive, isLast, index, setActive } = useContext(AccordionContext)

  const handleClick = () => {
    if (isActive) {
      setActive(-1)
    } else {
      setActive(index)
    }
  }

  return (
    <div className="border-l border-r border-t border-gold-500">
      <div
        role="button"
        className={cx("flex items-center p-8 border-gold-500 cursor-pointer", {
          "border-b": isLast || isActive,
        })}
        onClick={handleClick}
      >
        <div className="flex-shrink-0 flex items-center justify-center mr-4 h-8 w-8 font-heading font-bold text-white bg-gold-500 rounded-full">
          {index + 1}
        </div>

        <span className="font-heading font-bold uppercase">{label}</span>

        <div className="pl-4 ml-auto">
          {isActive ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>

      {isActive && (
        <div
          className={cx("p-8 border-gold-500", {
            "border-b": isLast,
          })}
        >
          <div className="lg:w-3/5">{children}</div>
        </div>
      )}
    </div>
  )
}

const AccordionParagraph: React.FC = ({ children }) => {
  return (
    <p className="font-body font-medium text-black text-2xl leading-normal">
      {children}
    </p>
  )
}

export { Accordion, AccordionItem, AccordionParagraph }
