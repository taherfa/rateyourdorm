import NextLink from 'next/link'

const Link = ({ onMouseEnter, onClick, href, ref, className, style, children, disabled }) => (
  <NextLink
    onMouseEnter={
      disabled
        ? e => {
            e.preventDefault()
          }
        : onMouseEnter
    }
    href={href}
    ref={ref}
    style={{display: 'block'}}
    >
    <a
      disabled={disabled}
      className={className}
      style={style}
      onClick={
        disabled
          ? e => {
              e.preventDefault()
            }
          : onClick
      }>
      {children}
    </a>
  </NextLink>
)

export default Link
