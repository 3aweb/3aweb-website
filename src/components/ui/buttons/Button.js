import Link from 'next/link'
import './Button.scss'

export default function Button ({ children, href, className, ...props }) {
  const Wrapper = (props) => {
    return typeof href === 'string'
      ? <Link href={href} className={props.className} {...props}>{props.children}</Link>
      : <div className={props.className} {...props}>{props.children}</div>
  }

  return (
    <Wrapper className={`Button ${className || ''}`} {...props}>
      {children}
    </Wrapper>
  )
}
