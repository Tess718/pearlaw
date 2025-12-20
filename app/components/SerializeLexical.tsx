import React, { Fragment } from 'react'
import escapeHTML from 'escape-html'

export const IS_BOLD = 1
export const IS_ITALIC = 2
export const IS_STRIKETHROUGH = 4
export const IS_UNDERLINE = 8
export const IS_CODE = 16
export const IS_SUBSCRIPT = 32
export const IS_SUPERSCRIPT = 64

export default function serializeLexical({
  nodes,
}: {
  nodes: any[]
}): React.JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, i) => {
        if (!node) return null

        if (node.type === 'text') {
          let text = (
            <span
              dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }}
            />
          )

          if (node.format & IS_BOLD) {
            text = <strong>{text}</strong>
          }
          if (node.format & IS_ITALIC) {
            text = <em>{text}</em>
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = <span className="line-through">{text}</span>
          }
          if (node.format & IS_UNDERLINE) {
            text = <span className="underline">{text}</span>
          }
          if (node.format & IS_CODE) {
            text = <code>{text}</code>
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub>{text}</sub>
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup>{text}</sup>
          }

          return <Fragment key={i}>{text}</Fragment>
        }

        if (node.type === 'block') {
          return (
            <Fragment key={i}>
              {serializeLexical({ nodes: node.children })}
            </Fragment>
          )
        }

        switch (node.type) {
          case 'heading':
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6': {
            const tag = node.type === 'heading' ? node.tag : node.type
            const content = serializeLexical({ nodes: node.children })

            switch (tag) {
              case 'h1':
                return <h1 key={i} className="text-4xl font-bold mb-4 text-gray-900">{content}</h1>
              case 'h2':
                return <h2 key={i} className="text-3xl font-bold mb-3 mt-6 text-gray-900">{content}</h2>
              case 'h3':
                return <h3 key={i} className="text-2xl font-bold mb-3 mt-5 text-gray-900">{content}</h3>
              case 'h4':
                return <h4 key={i} className="text-xl font-bold mb-2 mt-4 text-gray-900">{content}</h4>
              case 'h5':
                return <h5 key={i} className="text-lg font-bold mb-2 mt-4 text-gray-900">{content}</h5>
              case 'h6':
                return <h6 key={i} className="text-base font-bold mb-2 mt-4 text-gray-900">{content}</h6>
              default:
                return <p key={i} className="font-bold mb-4 text-gray-900">{content}</p>
            }
          }

          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-4 border-gray-300 pl-4 italic my-4"
              >
                {serializeLexical({ nodes: node.children })}
              </blockquote>
            )

          case 'ul':
          case 'list': {
            const items = node.children?.filter(
              (child: any) =>
                child.type === 'li' || child.type === 'listitem'
            )

            return (
              <ul key={i} className="list-disc pl-5 my-4">
                {items?.map((item: any, index: number) => (
                  <Fragment key={item.key ?? index}>
                    {serializeLexical({ nodes: [item] })}
                  </Fragment>
                ))}
              </ul>
            )
          }

          case 'ol': {
            const items = node.children?.filter(
              (child: any) =>
                child.type === 'li' || child.type === 'listitem'
            )

            return (
              <ol key={i} className="list-decimal pl-5 my-4">
                {items?.map((item: any, index: number) => (
                  <Fragment key={item.key ?? index}>
                    {serializeLexical({ nodes: [item] })}
                  </Fragment>
                ))}
              </ol>
            )
          }

          case 'li':
          case 'listitem': {
            const children = node.children
              ?.map((child: any) => {
                if (child.type === 'paragraph') {
                  return child.children
                }
                return child
              })
              .flat()

            return (
              <li
                key={i}
                className="mb-1"
                style={{ color: 'rgba(43, 43, 43, 0.8)' }}
              >
                {serializeLexical({ nodes: children })}
              </li>
            )
          }

          case 'link':
            return (
              <a
                key={i}
                href={node.fields.url}
                target={node.fields.newTab ? '_blank' : undefined}
                className="text-blue-600 hover:underline"
              >
                {serializeLexical({ nodes: node.children })}
              </a>
            )

          case 'upload': {
            const { value } = node
            const src = value?.url
            if (!src) return null

            return (
              <div
                key={i}
                className="my-8 relative w-full h-auto aspect-video overflow-hidden"
              >
                <img
                  src={src}
                  alt={value.alt || ''}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          }

          case 'linebreak':
            return <br key={i} />

          default: {
            const Tag = node.type === 'paragraph' ? 'p' : 'span'
            const className =
              node.type === 'paragraph'
                ? 'mb-4 leading-relaxed text-gray-700'
                : ''

            return (
              <Tag key={i} className={className}>
                {serializeLexical({ nodes: node.children })}
              </Tag>
            )
          }
        }
      })}
    </Fragment>
  )
}
